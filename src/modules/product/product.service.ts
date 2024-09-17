import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/product.entity';
import { Op, Sequelize } from 'sequelize';
import { ProductIngredient } from '../product-ingredient/entities/product-ingredient.entity';
import { ProductImage } from '../product-image/entities/product-image.entity';
import { Category } from '../category/entities/category.entity';
import { Ingredient } from '../ingredient/entities/ingredient.entity';
import { Image } from '../image/entities/image.entity';
import { ProductPrice } from '../product-price/entities/product-price.entity';
import { Price } from '../price/entities/price.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { ingredients, images, ...productData } = createProductDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const product = await this.productRepository.create(productData, {
        transaction,
      });
      await Promise.all(
        ingredients.map(async (ingredientId) => {
          await ProductIngredient.create(
            {
              productId: product.id,
              ingredientId,
            },
            { transaction },
          );
        }),
      );
      await Promise.all(
        images.map(async (imagenId) => {
          await ProductImage.create(
            {
              productId: product.id,
              imagenId,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return product;
    } catch (error) {
      console.log('error', error);
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  async findAll(q?: string, category?: string, company?: number) {
    let whereCondition = {};

    if (q) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
          { code: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }

    let categoryCondition = {};
    if (category) {
      const categoryIds = category.split(',').map((id) => parseInt(id, 10));
      categoryCondition = {
        id: { [Op.in]: categoryIds },
      };
    }

    const products = await this.productRepository.findAll({
      where: whereCondition,
      include: [
        {
          model: ProductPrice,
          include: [{ model: Price, where: { companyBranchId: company } }],
        },
        {
          model: ProductIngredient,
          include: [Ingredient],
        },
        {
          model: ProductImage,
          include: [Image],
        },
        {
          model: Category,
          where: categoryCondition,
        },
      ],
    });

    return products;
  }

  async findAllActive() {
    return await this.productRepository.findAll({
      where: { isActive: true },
    });
  }

  async findOneBySlug(slug: string, company?: number) {
    return await this.productRepository.findOne({
      where: { slug },
      include: [
        {
          model: ProductPrice,
          include: [{ model: Price, where: { companyBranchId: company } }],
        },
        {
          model: ProductIngredient,
          include: [Ingredient],
        },
        {
          model: ProductImage,
          include: [Image],
        },
        {
          model: Category,
        },
      ],
    });
  }

  async findOne(id: number, company?: number) {
    return await this.productRepository.findByPk(id, {
      include: [
        {
          model: ProductPrice,
          include: [{ model: Price, where: { companyBranchId: company } }],
        },
        {
          model: ProductIngredient,
          include: [Ingredient],
        },
        {
          model: ProductImage,
          include: [Image],
        },
        {
          model: Category,
        },
      ],
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { ingredients, images, ...productData } = updateProductDto;
    let transaction;
    try {
      transaction = await this.sequelize.transaction();
      const product = await this.productRepository.update(productData, {
        where: { id },
      });
      await ProductIngredient.destroy({ where: { productId: id } });
      await Promise.all(
        ingredients.map(async (ingredientId) => {
          await ProductIngredient.create(
            {
              productId: id,
              ingredientId,
            },
            { transaction },
          );
        }),
      );
      await ProductImage.destroy({ where: { productId: id } });
      await Promise.all(
        images.map(async (imagenId) => {
          await ProductImage.create(
            {
              productId: id,
              imagenId,
            },
            { transaction },
          );
        }),
      );
      await transaction.commit();
      return product;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw error;
    }
  }

  // async remove(id: number) {
  //   return await this.ingredientRepository.destroy({
  //     where: { id },
  //   });
  // }
}
