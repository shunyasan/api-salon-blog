import { Inject, Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { ClinicNestPriceDto } from '../common/dto/clinic_nest_price.dto';
import { Clinic } from '../common/entities/clinic';
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { ClinicRepository } from '../common/repository/clinicRepository';
import { PriceService } from '../price/price.service';

@Injectable()
export class ClinicService {
  constructor(
    private readonly clinicRepository: ClinicRepository,
    private readonly priceService: PriceService,
  ) {}

  async getAllClinicAndLimit(
    pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    const clinics = await this.clinicRepository.getAllClinicAndLimit(
      pagenation.take,
      pagenation.skip,
    );
    const nestPrice = await Promise.all(
      clinics.map(async (data) => {
        const prices = await this.priceService.getPlanByClinicId(data.id);
        return ClinicNestPriceDto.ClinicToClinicNestPriceDto(data, prices);
      }),
    );
    return nestPrice;
  }

  async getOneClinicAndLimit(clinicId: string): Promise<Clinic> {
    const clinic = await this.clinicRepository.getOneClinicAndLimit(clinicId);
    // const prices = await this.priceService.getPlanByClinicId(clinic.id);
    // const nestPrice = ClinicNestPriceDto.ClinicToClinicNestPriceDto(
    //   clinic,
    //   prices,
    // );
    return clinic;
  }

  async getAllClinicByAreaId(
    areaId: string,
    pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    const clinics = await this.clinicRepository.getAllClinicByAreaId(
      areaId,
      pagenation.take,
      pagenation.skip,
    );
    const nestPrice = await Promise.all(
      clinics.map(async (data) => {
        const prices = await this.priceService.getPlanByClinicId(data.id);
        return ClinicNestPriceDto.ClinicToClinicNestPriceDto(data, prices);
      }),
    );
    return nestPrice;
  }
}
