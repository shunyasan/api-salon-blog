import { Injectable, NotFoundException } from '@nestjs/common';
import { get } from 'https';
import { OrderPlanParameter } from '@/src/common/parameter/order_plan.parameter';
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
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { BasePartsRepository } from '../common/repository/basePartsRepository';
import { OriginCategoryRepository } from '../common/repository/originCategoryRepository';
import { MachineRepository } from '../common/repository/machineRepository';
import { MachineService } from '../machine/machine.service';

@Injectable()
export class PriceService {
  constructor(
    private readonly originCategoryRepository: OriginCategoryRepository,
    private readonly aboutCategoryRepository: AboutCategoryRepository,
    private readonly basePartsRepository: BasePartsRepository,
    private readonly machineService: MachineService,
  ) {}

  async createQueryByOrderPlan(
    orderPlan: OrderPlanParameter,
  ): Promise<SelectQueryBuilder<any>> {
    const tableName = await this.aboutCategoryRepository.getPriceTableName(
      orderPlan.aboutCategoryId,
    );
    const excludeGender: number = orderPlan.gender === '男性' ? 1 : 2;

    const query = this.selectPriceQueryBuilder(tableName, excludeGender);
    if (orderPlan.partsId) {
      query.andWhere(`priceTable.parts_id = :x_parts_id `, {
        x_parts_id: orderPlan.partsId,
      });
    }
    if (orderPlan.skinCollor || orderPlan.hair) {
      const machines =
        await this.machineService.getIdfindBySkinColorAndHairType(
          orderPlan.skinCollor,
          orderPlan.hair,
        );
      const targetMachine = machines.map((data) => data.id);
      query
        .innerJoin('clinic.machines', 'machines')
        .andWhere('machines.id IN (:...x_machine)', {
          x_machine: targetMachine,
        });
    }
    return query;
  }

  async getPriceOrderPlan(
    orderPlan: OrderPlanParameter,
    pagenation: PagenationParameter,
  ): Promise<IncludePartsAndCategoryPriceDto> {
    const sortPrice = orderPlan.paySystem === '総額' ? 'price' : 'oncePrice';
    const query = await this.createQueryByOrderPlan(orderPlan);
    const byAboutCategoryId = await query
      .orderBy(`priceTable.${sortPrice}`, 'ASC')
      .take(pagenation.take)
      .skip(pagenation.skip)
      .getMany();

    const originCategory: IdAndNameDto =
      await this.originCategoryRepository.findOne({
        select: ['id', 'name'],
        where: { id: orderPlan.originCategoryId },
      });
    const aboutCategory: IdAndNameDto =
      await this.aboutCategoryRepository.findOne({
        select: ['id', 'name'],
        where: { id: orderPlan.aboutCategoryId },
      });
    const parts: IdAndNameDto = orderPlan.partsId
      ? await this.basePartsRepository.findOne({
          select: ['id', 'name'],
          where: { id: orderPlan.partsId },
        })
      : null;

    const data: IncludePartsAndCategoryPriceDto = {
      originCategory: originCategory,
      aboutCategory: aboutCategory,
      baseParts: parts,
      prices: byAboutCategoryId,
    };
    return data;
  }

  async getCountMaxPlan(orderPlan: OrderPlanParameter): Promise<number> {
    const query = await this.createQueryByOrderPlan(orderPlan);
    const count = await query.select('priceTable.id').getCount();
    return count;
  }

  async getPlanByClinicId(
    clinicId: string,
    pagenation?: PagenationParameter,
  ): Promise<PriceDto[]> {
    const data = await getRepository(PriceFaceSet).find({
      where: { clinicId: clinicId },
      take: pagenation ? pagenation.take : 2,
      skip: pagenation ? pagenation.skip : 0,
    });
    const change = data as PriceDto[];
    return change;
  }

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
      .innerJoinAndSelect('clinic.clinicOpeningHours', 'clinicOpeningHours')
      .innerJoin('priceTable.parts', 'parts')
      .innerJoinAndSelect(
        'parts.baseParts',
        'baseParts',
        'baseParts.gender != :x_gender',
        { x_gender: excludeGender },
      )
      .where(`priceTable.gender != :x_gender `, {
        x_gender: excludeGender,
      });
  }
}
