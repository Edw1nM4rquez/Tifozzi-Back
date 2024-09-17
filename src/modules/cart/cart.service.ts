import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CART_REPOSITORY } from 'src/core/constants';
import { Cart } from './entities/cart.entity';
import { Op, Sequelize } from 'sequelize';
import { CartDetail } from '../cart-detail/entities/cart-detail.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @Inject(CART_REPOSITORY)
    private readonly cartRepository: typeof Cart,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(createCartDto: CreateCartDto, userId: number) {
    const { detail, ...cartData } = createCartDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const cart = await this.cartRepository.create(
        {
          ...cartData,
          userId,
        },
        {
          transaction,
        },
      );
      console.log('cart created', cart);
      await Promise.all(
        detail.map(async (cartDetail: CartDetail) => {
          await CartDetail.create(
            {
              ...cartDetail,
              cartId: cart.id,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return await this.cartRepository.findOne({
        where: { id: cart.id },
        include: [
          {
            model: CartDetail,
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

  async findAll() {
    const carts = await this.cartRepository.findAll();
    return carts;
  }

  async findOneByUser(userId?: number) {
    return await this.cartRepository.findOne({
      where: { userId },
      include: [
        {
          model: CartDetail,
          include: [Product],
        },
      ],
    });
  }

  async update(updateCartDto: UpdateCartDto, userId: number) {
    const { id, detail, ...cartData } = updateCartDto; // Asegúrate de extraer también el id del carrito
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      await this.cartRepository.update(cartData, {
        where: { id, userId },
        transaction,
      });
      await CartDetail.destroy({ where: { cartId: id }, transaction });
      await Promise.all(
        detail.map(async (cartDetail: CartDetail) => {
          await CartDetail.create(
            {
              ...cartDetail,
              cartId: id,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return await this.cartRepository.findOne({
        where: { id },
        include: [
          {
            model: CartDetail,
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

  async remove(userId: number) {
    let transaction;
    try {
      transaction = await this.cartRepository.sequelize.transaction();
      const cart = await this.cartRepository.findOne({
        where: { userId },
      });
      await CartDetail.destroy({
        where: { cartId: cart.id },
        transaction,
      });
      const deletedCarts = await this.cartRepository.destroy({
        where: { userId },
        transaction,
      });
      await transaction.commit();
      return deletedCarts;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }
}
