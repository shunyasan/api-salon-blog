import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { IdAndNameDto } from '../dto/id_and_name.dto';
import { AboutCategory } from '../entities/about_category';
import { Clinic } from '../entities/clinic';
import { ClinicArea } from '../entities/clinic_area';
import { Machine } from '../entities/machine';

@EntityRepository(Machine)
export class MachineRepository extends Repository<Machine> {
  findBySkinColorAndHairType(
    skinColor?: number,
    hair?: string,
  ): SelectQueryBuilder<Machine> {
    const query = this.createQueryBuilder('machine')
      .leftJoin('machine.machineHr', 'machineHr')
      .leftJoin('machine.machineShr', 'machineShr');
    if (skinColor) {
      query.where(
        'machineHr.skinColor >= :x_skinColor or machineShr.skinColor  >= :x_skinColor',
        {
          x_skinColor: skinColor,
        },
      );
    }
    if (hair) {
      query.andWhere(
        'machineHr.hairType like :x_hair or machineShr.hairType like :x_hair',
        { x_hair: `%${hair}%` },
      );
    }
    return query;
  }

  async getIdfindBySkinColorAndHairType(
    skinColor?: number,
    hair?: string,
  ): Promise<IdAndNameDto[]> {
    const query = this.findBySkinColorAndHairType(skinColor, hair);
    const sql = query.select('machine.id,machine.machine_name').getSql();
    const machine: IdAndNameDto[] = await query
      .select('machine.id,machine.machine_name')
      .getRawMany();
    return machine;
  }
}
