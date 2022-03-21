import { Entity, Column, OneToMany } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_area')
export class ClinicArea {
  @Column('varchar', { primary: true, name: 'id', comment: 'areaID' })
  id: string;

  @Column('varchar', { name: 'area', comment: '地区' })
  area: string;

  @OneToMany((type) => Clinic, (clinic) => clinic.area)
  clinic: Clinic[];
}
