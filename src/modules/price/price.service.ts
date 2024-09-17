import { Inject, Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { PRICE_REPOSITORY } from 'src/core/constants';
import { Price } from './entities/price.entity';
import { Sequelize } from 'sequelize';
import { ProductPrice } from '../product-price/entities/product-price.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class PriceService {
  constructor(
    @Inject(PRICE_REPOSITORY)
    private readonly priceRepository: typeof Price,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(createPriceDto: CreatePriceDto) {
    //return await this.priceRepository.create(createPriceDto);
    const { detail, ...data } = createPriceDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const price = await this.priceRepository.create(data, {
        transaction,
      });
      console.log('detail', detail);
      await Promise.all(
        detail.map(async (det) => {
          await ProductPrice.create(
            {
              priceVal: det.priceVal,
              productId: det.productId,
              priceId: price.id,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return price;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async findAll() {
    return await this.priceRepository.findAll();
  }

  async findAllActive() {
    return await this.priceRepository.findAll({ where: { isActive: true } });
  }

  async findOne(id: number) {
    //return await this.priceRepository.findByPk(id);
    return await this.priceRepository.findByPk(id, {
      include: [
        {
          model: ProductPrice,
          //include: [Product],
        },
      ],
    });
  }

  async update(id: number, updatePriceDto: UpdatePriceDto) {
    // return await this.priceRepository.update(updatePriceDto, {
    //   where: { id },
    // });
    const { detail, ...data } = updatePriceDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const price = await this.priceRepository.update(data, {
        where: { id },
      });
      await ProductPrice.destroy({ where: { priceId: id } });
      await Promise.all(
        detail.map(async (det) => {
          await ProductPrice.create(
            {
              priceVal: det.priceVal,
              productId: det.productId,
              priceId: id,
            },
            { transaction },
          );
        }),
      );

      await transaction.commit();
      return price;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async remove(id: number) {
    return await this.priceRepository.destroy({
      where: { id },
    });
  }
}
