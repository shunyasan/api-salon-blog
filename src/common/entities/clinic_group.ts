import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_group')
export class ClinicGroup {
  @Column('string', { primary: true, name: 'id', comment: 'clinicGroupID' })
  id: string;

  @Column('string', { name: 'example_clinic', comment: 'クリニック例' })
  exampleClinic: string;

  @Column('string', { name: 'group_name', comment: 'group_name' })
  groupName: string;

  @OneToMany((type) => Clinic, (clinic) => clinic.clinicGroupId)
  clinic: Clinic;
}
