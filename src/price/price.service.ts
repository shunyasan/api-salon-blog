import { Injectable } from '@nestjs/common';
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
import { Alias } from 'typeorm/query-builder/Alias';

@Injectable()
export class PriceService {
  constructor(
    private readonly aboutCategoryRepository: AboutCategoryRepository,
  ) {}

  async getPriceOrderPlan(orderPlan: OrderPlan): Promise<// PriceDto[]
  any> {
    const aboutCategory =
      await this.aboutCategoryRepository.getAboutCategoryById(
        orderPlan.aboutCategoryId,
      );
    const excludeGender: number = orderPlan.gender === '男性' ? 1 : 2;
    const sortPrice = orderPlan.paySystem === '総額' ? 'price' : 'once_price';

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
    return byAboutCategoryId;
  }

  selectPriceQueryBuilder(
    table: string,
    excludeGender: number,
  ): SelectQueryBuilder<any> {
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
    return getRepository(data)
      .createQueryBuilder('priceTable')
      .innerJoinAndSelect('priceTable.clinic', 'clinic')
      .innerJoinAndSelect('clinic.clinicOprion', 'clinicOprion')
      .where(`priceTable.gender != :x_gender `, {
        x_gender: excludeGender,
      });
  }
}
