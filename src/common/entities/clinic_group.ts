import { Entity, Column, OneToMany } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_group')
export class ClinicGroup {
  @Column('varchar', { primary: true, name: 'id', comment: 'clinicGroupID' })
  id: string;

  @Column('varchar', { name: 'example_clinic', comment: 'クリニック例' })
  exampleClinic: string;

  @Column('varchar', { name: 'group_name', comment: 'group_name' })
  groupName: string;

  @OneToMany((type) => Clinic, (clinic) => clinic.clinicGroup)
  clinic: Clinic[];
}
