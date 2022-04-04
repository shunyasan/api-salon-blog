import { EntityRepository, Repository } from 'typeorm';
import { AboutCategory } from '../entities/about_category';
import { Clinic } from '../entities/clinic';
import { ClinicArea } from '../entities/clinic_area';

@EntityRepository(ClinicArea)
export class ClinicAreaRepository extends Repository<ClinicArea> {
  async getAllClinicArea(): Promise<ClinicArea[]> {
    return await this.find();
  }
}
