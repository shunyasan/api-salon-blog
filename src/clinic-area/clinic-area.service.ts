import { Injectable } from '@nestjs/common';
import { ClinicArea } from '../common/entities/clinic_area';
import { ClinicAreaRepository } from '../common/repository/clinicAreaRepository';

@Injectable()
export class ClinicAreaService {
  constructor(private readonly clinicAreaRepository: ClinicAreaRepository) {}

  async getAllClinicArea(): Promise<ClinicArea[]> {
    const areas = await this.clinicAreaRepository.getAllClinicArea();
    return areas;
  }
}
