import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CATEGORY_REPOSITORY } from 'src/core/constants';
import { Category } from './entities/category.entity';
import { Op } from 'sequelize';
import { Product } from '../product/entities/product.entity';
import { ProductPrice } from '../product-price/entities/product-price.entity';
import { Price } from '../price/entities/price.entity';
import { ProductIngredient } from '../product-ingredient/entities/product-ingredient.entity';
import { Ingredient } from '../ingredient/entities/ingredient.entity';
import { ProductImage } from '../product-image/entities/product-image.entity';
import { Image } from '../image/entities/image.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private readonly categoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryRepository.create(createCategoryDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll(q?: string) {
    //return await this.categoryRepository.findAll();
    let whereCondition = {};
    if (q) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }
    return await this.categoryRepository.findAll({
      where: whereCondition,
    });
  }

  async findAllWithProducts(q?: string, company?: number) {
    //return await this.categoryRepository.findAll();
    let whereCondition = {};
    if (q) {
      whereCondition = {
        isActive: true,
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }
    return await this.categoryRepository.findAll({
      where: whereCondition,
      include: [
        Image,
        {
          model: Product,
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
          ],
        },
      ],
    });
  }

  async findAllActive(q?: string) {
    //return await this.categoryRepository.findAll({ where: { isActive: true } });
    let whereCondition = {};
    if (q) {
      whereCondition = {
        isActive: true,
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
        ],
      };
    }
    return await this.categoryRepository.findAll({
      where: whereCondition,
    });
  }

  async findOne(id: number) {
    return await this.categoryRepository.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.update(updateCategoryDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.categoryRepository.destroy({
      where: { id },
    });
  }
}
