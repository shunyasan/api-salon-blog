import { EntityRepository, Repository } from 'typeorm';
import { AboutCategory } from '../entities/about_category';
import { Clinic } from '../entities/clinic';

@EntityRepository(Clinic)
export class ClinicRepository extends Repository<Clinic> {
  async getAllClinicAndLimit(take: number, skip: number): Promise<Clinic[]> {
    return await this.createQueryBuilder('clinic')
      .innerJoinAndSelect('clinic.clinicOption', 'clinicOption')
      .innerJoinAndSelect('clinic.clinicOpeningHours', 'clinicOpeningHours')
      .take(take)
      .skip(skip)
      .getMany();
  }

  async getAllClinicByAreaId(
    areaId: string,
    take: number,
    skip: number,
  ): Promise<Clinic[]> {
    return await this.createQueryBuilder('clinic')
      .innerJoinAndSelect('clinic.clinicOption', 'clinicOption')
      .innerJoinAndSelect('clinic.clinicOpeningHours', 'clinicOpeningHours')
      .where('clinic.areaId = :x_areaId', { x_areaId: areaId })
      .take(take)
      .skip(skip)
      .getMany();
  }
}
