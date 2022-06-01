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
import { PagenationOrderPlanParameter } from '../common/parameter/pagenation_order_plan.parameter';

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

    const query = this.selectPriceJoinClinicQueryBuilder(
      tableName,
      excludeGender,
    );
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

    // clinic
    // clinicOption

    if (orderPlan.roomType) {
      query.andWhere(`clinic.roomType = :x_roomType `, {
        x_roomType: orderPlan.roomType,
      });
    }
    if (orderPlan.interior) {
      query.andWhere(`clinic.interior = :x_interior `, {
        x_interior: orderPlan.interior,
      });
    }
    if (orderPlan.staff) {
      query.andWhere(`clinic.staffGender = NOT :x_staff `, {
        x_staff: orderPlan.staff,
      });
    }
    if (orderPlan.card) {
      query.andWhere(`clinic.cardPay = :x_cardPay `, {
        x_cardPay: orderPlan.card,
      });
    }
    if (orderPlan.loan) {
      query.andWhere(`clinic.medhicalLoan = :x_medhicalLoan `, {
        x_medhicalLoan: orderPlan.loan,
      });
    }
    if (orderPlan.contract) {
      query.andWhere(`clinicOption.contractCancellation = :x_contract `, {
        x_contract: orderPlan.contract,
      });
    }
    // if (orderPlan.option) {
    //   for (const data of orderPlan.option) {
    //     query.andWhere(`clinic.${data} = :x_option `, {
    //       x_option: '無料',
    //     });
    //   }
    // }
    return query;
  }

  async getPriceByClinic(
    clinicId: string,
    aboutId: string,
  ): Promise<PriceDto[]> {
    const table = await this.aboutCategoryRepository.getPriceTableName(aboutId);
    const data = this.selectPriceClass(table);
    const price = await getRepository(data).find({
      where: { clinicId: clinicId },
    });
    const res = price as PriceDto[];
    return res;
  }

  async getPriceOrderPlan(
    pagenationOrderPlan: PagenationOrderPlanParameter,
  ): Promise<IncludePartsAndCategoryPriceDto> {
    const sortPrice =
      pagenationOrderPlan.paySystem === '総額' ? 'price' : 'oncePrice';
    const query = await this.createQueryByOrderPlan(
      pagenationOrderPlan as OrderPlanParameter,
    );
    const log = query.getSql();
    const byAboutCategoryId = await query
      .orderBy(`priceTable.${sortPrice}`, 'ASC')
      .take(pagenationOrderPlan.take)
      .skip(pagenationOrderPlan.skip)
      .getMany();

    const originCategory: IdAndNameDto =
      await this.originCategoryRepository.findOne({
        select: ['id', 'name'],
        where: { id: pagenationOrderPlan.originCategoryId },
      });
    const aboutCategory: IdAndNameDto =
      await this.aboutCategoryRepository.findOne({
        select: ['id', 'name'],
        where: { id: pagenationOrderPlan.aboutCategoryId },
      });
    const parts: IdAndNameDto = pagenationOrderPlan.partsId
      ? await this.basePartsRepository.findOne({
          select: ['id', 'name'],
          where: { id: pagenationOrderPlan.partsId },
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
    if (!data) {
      throw new NotFoundException(`not found price table at ${data}`);
    }
    return data;
  }

  selectPriceJoinClinicQueryBuilder(
    table: string,
    excludeGender?: number,
  ): SelectQueryBuilder<any> {
    const data = this.selectPriceClass(table);
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
