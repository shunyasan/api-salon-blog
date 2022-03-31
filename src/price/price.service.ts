import { Injectable, NotFoundException } from '@nestjs/common';
import { get } from 'https';
import { OrderPlan } from 'src/common/dto/order_plan.dto';
import { PriceDto } from 'src/common/dto/price.dto';
import { PriceAllBody } from 'src/common/entities/price_all_body';
import { PriceArm } from 'src/common/entities/price_arm';
import { PriceBackBody } from 'src/common/entities/price_back_body';
import { PriceBodySet } from 'src/common/entities/price_body_set';
import { PriceFaceSet } from 'src/common/entities/price_face_set';
import { PriceFrontBody } from 'src/common/entities/price_front_body';
import { PriceLeg } from 'src/common/entities/price_leg';
import { PriceLimb } from 'src/common/entities/price_limb';
import { PriceLowerBody } from 'src/common/entities/price_lower_body';
import { PriceLowerFace } from 'src/common/entities/price_lower_face';
import { PriceRange } from 'src/common/entities/price_range';
import { PriceSelect } from 'src/common/entities/price_select';
import { PriceTime } from 'src/common/entities/price_time';
import { PriceUpperBody } from 'src/common/entities/price_upper_body';
import { PriceUpperFace } from 'src/common/entities/price_upper_face';
import { PriceVio } from 'src/common/entities/price_vio';
import { PriceVioSet } from 'src/common/entities/price_vio_set';
import { AboutCategoryRepository } from 'src/common/repository/aboutCategoryRepository';
import { getManager, getRepository, SelectQueryBuilder } from 'typeorm';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { IncludePartsAndCategoryPriceDto } from '../common/dto/include_parts_and_category_price.dto';
import { OnlyPriceDto } from '../common/dto/only_price.dto';
import { BasePartsRepository } from '../common/repository/basePartsRepository';

@Injectable()
export class PriceService {
  constructor(
    private readonly aboutCategoryRepository: AboutCategoryRepository,
    private readonly basePartsRepository: BasePartsRepository,
  ) {}

  async getPriceOrderPlan(
    orderPlan: OrderPlan,
  ): Promise<IncludePartsAndCategoryPriceDto> {
    const aboutCategory =
      await this.aboutCategoryRepository.getIdNameTableNameAboutCategoryJoinOriginCategory(
        orderPlan.aboutCategoryId,
      );
    const excludeGender: number = orderPlan.gender === '男性' ? 1 : 2;
    const sortPrice = orderPlan.paySystem === '総額' ? 'price' : 'oncePrice';

    const query = this.selectPriceQueryBuilder(
      aboutCategory.tableName,
      excludeGender,
    );

    if (orderPlan.partsId) {
      query.andWhere(`priceTable.parts_id = :x_parts_id `, {
        x_parts_id: orderPlan.partsId,
      });
    }

    const byAboutCategoryId = await query
      .limit(20)
      .orderBy(`priceTable.${sortPrice}`, 'ASC')
      .getMany();

    const parts: IdAndNameDto = orderPlan.partsId
      ? await this.basePartsRepository.findOne({
          select: ['id', 'name'],
          where: { id: orderPlan.partsId },
        })
      : null;

    const data: IncludePartsAndCategoryPriceDto = {
      originCategory: {
        id: aboutCategory.origin.id,
        name: aboutCategory.origin.name,
      },
      aboutCategory: { id: aboutCategory.id, name: aboutCategory.name },
      baseParts: parts,
      prices: byAboutCategoryId,
    };
    return data;
  }

  async getPlanByClinicId(clinicId: string): Promise<OnlyPriceDto[]> {
    const data = await getRepository(PriceFaceSet).find({
      select: [
        'id',
        'name',
        'gender',
        'times',
        'price',
        'oncePrice',
        'description',
      ],
      where: { clinicId: clinicId },
      take: 2,
    });
    const change = data as PriceDto[];
    const result = change.map((res) => {
      return OnlyPriceDto.PriceDtoToOnlyPriceDto(res);
    });
    return result;
  }

  times;
  price;
  oncePrice;
  description;

  selectPriceClass(table: string): any {
    const func = {};
    func['PriceUpperFace'] = PriceUpperFace;
    func['PriceLowerFace'] = PriceLowerFace;
    func['PriceFaceSet'] = PriceFaceSet;
    func['PriceArm'] = PriceArm;
    func['PriceLeg'] = PriceLeg;
    func['PriceLimb'] = PriceLimb;
    func['PriceFrontBody'] = PriceFrontBody;
    func['PriceBackBody'] = PriceBackBody;
    func['PriceBodySet'] = PriceBodySet;
    func['PriceVio'] = PriceVio;
    func['PriceVioSet'] = PriceVioSet;
    func['PriceAllBody'] = PriceAllBody;
    func['PriceSelect'] = PriceSelect;
    func['PriceTime'] = PriceTime;
    func['PriceRange'] = PriceRange;
    func['PriceUpperBody'] = PriceUpperBody;
    func['PriceLowerBody'] = PriceLowerBody;

    const data = func[table];
    return data;
  }

  selectPriceQueryBuilder(
    table: string,
    excludeGender: number,
  ): SelectQueryBuilder<any> {
    const data = this.selectPriceClass(table);
    if (!data) {
      throw new NotFoundException(`not found price table at ${data}`);
    }
    return getRepository(data)
      .createQueryBuilder('priceTable')
      .innerJoinAndSelect('priceTable.clinic', 'clinic')
      .innerJoinAndSelect('clinic.clinicOption', 'clinicOption')
      .where(`priceTable.gender != :x_gender `, {
        x_gender: excludeGender,
      });
  }
}
