import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { AboutCategory } from '../entities/about_category';
import { Clinic } from '../entities/clinic';

@EntityRepository(Clinic)
export class ClinicRepository extends Repository<Clinic> {
  async getAllClinicAndLimit(take: number, skip: number): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    return await query.take(take).skip(skip).getMany();
  }

  async getOneClinicAndLimit(clinicId: string): Promise<Clinic> {
    const query = this.selectQueryFeature();
    return await query
      .where('clinic.id = :x_clinicId', { x_clinicId: clinicId })
      .getOne();
  }

  async getFreeAnesthesia(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where('clinicOption.anesthesia like :x_free', { x_free: '%無料%' })
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountFreeAnesthesia(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where('clinicOption.anesthesia like :x_free', { x_free: '%無料%' })
      .getCount();
    return getData;
  }

  async getInstallments(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where(
        'clinic.card_pay like :x_condition or clinic.medhical_loan like :x_condition',
        { x_condition: '%OK%' },
      )
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountInstallments(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where(
        'clinic.card_pay like :x_condition or clinic.medhical_loan like :x_condition',
        { x_condition: '%OK%' },
      )
      .getCount();
    return getData;
  }

  async getInterior(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where('clinic.interior like :x_condition', { x_condition: '%豪華%' })
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountInterior(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where('clinic.interior like :x_condition', { x_condition: '%豪華%' })
      .getCount();
    return getData;
  }

  async getPrivateRoom(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where('clinic.room_type like :x_condition', {
        x_condition: '%完全個室%',
      })
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountPrivateRoom(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where('clinic.room_type like :x_condition', {
        x_condition: '%完全個室%',
      })
      .getCount();
    return getData;
  }

  async getSutudentDiscount(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where('clinicOption.student_discount like :x_condition', {
        x_condition: '%あり%',
      })
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountSutudentDiscount(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where('clinicOption.student_discount like :x_condition', {
        x_condition: '%あり%',
      })
      .getCount();
    return getData;
  }

  async getVisitFee(
    take: number,
    skip: number,
    notJoin?: boolean,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    if (notJoin) {
      query.select(['clinic']);
    }
    const getData = await query
      .where(
        'clinicOption.first_visit_fees like :x_condition and clinicOption.subsequent_visit_fees like :x_condition',
        {
          x_condition: '%無料%',
        },
      )
      .take(take)
      .skip(skip)
      .getMany();
    return getData;
  }

  async getCountVisitFee(): Promise<number> {
    const query = this.selectQueryFeature();
    const getData = await query
      .where(
        'clinicOption.first_visit_fees like :x_condition and clinicOption.subsequent_visit_fees like :x_condition',
        {
          x_condition: '%無料%',
        },
      )
      .getCount();
    return getData;
  }

  async getAllClinicByAreaId(
    areaId: string,
    take: number,
    skip: number,
  ): Promise<Clinic[]> {
    const query = this.selectQueryFeature();
    return await query
      .where('clinic.areaId = :x_areaId', { x_areaId: areaId })
      .take(take)
      .skip(skip)
      .getMany();
  }

  selectQueryFeature(): SelectQueryBuilder<Clinic> {
    return this.createQueryBuilder('clinic')
      .innerJoinAndSelect('clinic.clinicOption', 'clinicOption')
      .innerJoinAndSelect('clinic.clinicOpeningHours', 'clinicOpeningHours');
  }

  // chackJoinTable(notJoin: boolean): SelectQueryBuilder<Clinic>{
  //   if (notJoin) {
  //     return this.createQueryBuilder('clinic').select(['clinic']);
  //   }else{
  //      return this.selectQueryFeature();
  //   }
  // }
}
