import { Exclude } from 'class-transformer';
import { Entity, Column, OneToMany } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_area')
export class ClinicArea {
  @Column('varchar', { primary: true, name: 'id', comment: 'areaID' })
  id: string;

  @Column('varchar', { name: 'area', comment: '地区名' })
  area: string;

  @Column('varchar', { name: 'description', comment: '説明', nullable: true })
  description: string;

  @Column('integer', {
    name: 'registration_number',
    comment: '地区に登録されているクリニック数',
    default: 0,
  })
  registrationNumber: number;

  @Exclude()
  @OneToMany((type) => Clinic, (clinic) => clinic.area)
  clinic: Clinic[];
}
