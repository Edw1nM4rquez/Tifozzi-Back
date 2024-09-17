import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { COMPANY_BRANCH_REPOSITORY, EMISSION_POINT_REPOSITORY, ORDER_DETAIL_REPOSITORY, ORDER_REPOSITORY, PRODUCT_REPOSITORY } from 'src/core/constants';
import { Order } from './entities/order.entity';
import { Op, Sequelize } from 'sequelize';
import { OrderDetail } from '../order-detail/entities/order-detail.entity';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { Address } from '../address/entities/address.entity';
import { Country } from '../country/entities/country.entity';
import { State } from '../state/entities/state.entity';
import { City } from '../city/entities/city.entity';
import { EmissionPoint } from '../emission-point/entities/emission-point.entity';
import { CompanyBranch } from '../company-branch/entities/company-branch.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private readonly orderRepository: typeof Order,
    // @Inject(ORDER_DETAIL_REPOSITORY)
    // private readonly orderDetailRepository: typeof OrderDetail,
    // @Inject(PRODUCT_REPOSITORY)
    // private readonly productRepository: typeof Product,
    // @Inject(COMPANY_BRANCH_REPOSITORY)
    // private readonly companyBranchRepository: typeof CompanyBranch,
    // @Inject(EMISSION_POINT_REPOSITORY)
    // private readonly emissionPointRepository: typeof EmissionPoint,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { detail, ...cartData } = createOrderDto;
    let transaction;

    try {
      transaction = await this.sequelize.transaction();

      // Create the order header
      const order = await this.orderRepository.create(cartData, {
        transaction,
      });

      // Validate stock of products and create the order detail
      for (const orderDetail of detail) {
        const product = await Product.findOne({
          where: { id: orderDetail.productId, isInventoried: true },
          transaction,
        });

        if (product) {
          if (product.stock < orderDetail.quantity) {
            throw new Error(
              `Product ${product.name} does not have enough stock`,
            );
          }
          await Product.update(
            { stock: Sequelize.literal(`stock - ${orderDetail.quantity}`) },
            { where: { id: product.id }, transaction },
          );
        }

        await OrderDetail.create(
          { ...orderDetail, orderId: order.id },
          { transaction },
        );
      }

      // Get the emission point through the company branch
      const companyBranch = await CompanyBranch.findOne({
        where: { id: cartData.companyBranchId },
        include: [{ model: EmissionPoint }],
        transaction,
      });

      if (!companyBranch || !companyBranch.emissionPoint) {
        throw new Error('Emission point not found for the company branch');
      }

      const emissionPoint = companyBranch.emissionPoint;

      // Update the sequential number of the emission point
      await EmissionPoint.update(
        { number: Sequelize.literal('number + 1') },
        { where: { id: emissionPoint.id }, transaction },
      );

      // Commit the transaction
      await transaction.commit();

      // Return the order with the detail
      return await this.orderRepository.findOne({
        where: { id: order.id },
        include: [{ model: OrderDetail, include: [Product] }],
      });
    } catch (error) {
      // Rollback the transaction in case of error
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async findAll(
    dateInit: string,
    dateEnd: string,
    q: string,
  ): Promise<Order[]> {
    // Convertir las fechas de entrada a Date objects y ajustar las horas
    const adjustedDateInit = new Date(`${dateInit}T00:00:00.000Z`);
    const adjustedDateEnd = new Date(`${dateEnd}T23:59:59.999Z`);

    // Construir la condición de búsqueda para el parámetro q
    const searchCondition = q
      ? {
          [Op.or]: [
            { id: { [Op.eq]: `${+q}` } },
            { '$User.name$': { [Op.like]: `%${q}%` } },
            { '$User.lastname$': { [Op.like]: `%${q}%` } },
            { '$User.email$': { [Op.like]: `%${q}%` } },
            { '$User.surname$': { [Op.like]: `%${q}%` } },
            { '$User.fullName$': { [Op.like]: `%${q}%` } },
          ],
        }
      : {};

    return this.orderRepository.findAll({
      where: {
        date: {
          [Op.between]: [adjustedDateInit, adjustedDateEnd],
        },
        ...searchCondition,
      },
      include: [
        {
          //attributes: { exclude: ['password'] },
          model: User,
          //required: true,
          attributes: { exclude: ['password'] },
        },
      ],
    });
  }

  findOne(id: number) {
    return this.orderRepository.findByPk(id, {
      include: [
        {
          model: User,
          required: true,
        },
        {
          model: Address,
          include: [Country, State, City],
        },
        {
          model: OrderDetail,
          include: [Product],
        },
      ],
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const { detail, ...orderData } = updateOrderDto; // Asegúrate de extraer también el id del carrito
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      await this.orderRepository.update(orderData, {
        where: { id },
        transaction,
      });
      await OrderDetail.destroy({ where: { orderId: id }, transaction });
      await Promise.all(
        detail.map(async (orderDetail: OrderDetail) => {
          await OrderDetail.create(
            {
              ...orderDetail,
              orderId: id,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return await this.orderRepository.findOne({
        where: { id },
        include: [
          {
            model: OrderDetail,
            include: [Product],
          },
        ],
      });
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
