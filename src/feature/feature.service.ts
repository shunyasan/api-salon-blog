import { Injectable } from '@nestjs/common';
import { ClinicNestPriceDto } from '../common/dto/clinic_nest_price.dto';
import { FeatureDto } from '../common/dto/feature.dto';
import { Clinic } from '../common/entities/clinic';
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { ClinicRepository } from '../common/repository/clinicRepository';
import { PriceService } from '../price/price.service';

@Injectable()
export class FeatureService {
  constructor(
    private readonly priceService: PriceService,
    private readonly clinicRepository: ClinicRepository,
  ) {}

  async getAllFeature(): Promise<FeatureDto> {
    const anesthesia = await this.clinicRepository.getFreeAnesthesia(
      10,
      0,
      true,
    );
    const installments = await this.clinicRepository.getInstallments(
      10,
      0,
      true,
    );
    const interior = await this.clinicRepository.getInterior(10, 0, true);
    const privateRoom = await this.clinicRepository.getPrivateRoom(10, 0, true);
    const sutudentDiscount = await this.clinicRepository.getSutudentDiscount(
      10,
      0,
      true,
    );
    const visitFee = await this.clinicRepository.getVisitFee(10, 0, true);
    const feature: FeatureDto = {
      anesthesia,
      installments,
      interior,
      privateRoom,
      sutudentDiscount,
      visitFee,
    };
    return feature;
  }

  async getFeature(
    feature: string,
    pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    const clinics = await this.checkFeatureFunc(
      feature,
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

  async getCountFeature(feature: string): Promise<number> {
    const count = await this.checkCountFeatureFunc(feature);
    return count;
  }

  async checkCountFeatureFunc(feature: string): Promise<number> {
    const func: any = {};
    func['anesthesia'] = await this.clinicRepository.getCountFreeAnesthesia();
    func['installments'] = await this.clinicRepository.getCountInstallments();
    func['interior'] = await this.clinicRepository.getCountInterior();
    func['privateRoom'] = await this.clinicRepository.getCountPrivateRoom();
    func['sutudentDiscount'] =
      await this.clinicRepository.getCountSutudentDiscount();
    func['visitFee'] = await this.clinicRepository.getCountVisitFee();
    const getFunc: number = func[feature];
    if (!getFunc) {
      throw new Error();
    }
    return getFunc;
  }

  async checkFeatureFunc(
    feature: string,
    take: number,
    skip: number,
  ): Promise<Clinic[]> {
    const func: any = {};
    func['anesthesia'] = await this.clinicRepository.getFreeAnesthesia(
      take,
      skip,
    );
    func['installments'] = await this.clinicRepository.getInstallments(
      take,
      skip,
    );
    func['interior'] = await this.clinicRepository.getInterior(take, skip);
    func['privateRoom'] = await this.clinicRepository.getPrivateRoom(
      take,
      skip,
    );
    func['sutudentDiscount'] = await this.clinicRepository.getSutudentDiscount(
      take,
      skip,
    );
    func['visitFee'] = await this.clinicRepository.getVisitFee(take, skip);
    const getFunc: Clinic[] = func[feature];
    if (!getFunc) {
      throw new Error();
    }
    return getFunc;
  }
}
