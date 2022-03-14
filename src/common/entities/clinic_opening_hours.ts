import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Clinic } from './clinic';
import { ClinicGroup } from './clinic_group';

@Entity('clinic_opening_hours')
export class ClinicOpeningHours {
  @Column('string', { primary: true, name: 'id', comment: 'clinicOptionID' })
  id: string;

  @Column('string', { name: 'start_hours', comment: '麻酔' })
  startHours: string;

  @Column('string', { name: 'end_hours', comment: '終了時間' })
  endHours: string;

  @Column('string', { name: 'description', comment: '備考' })
  description: string;

  @Column('boolean', { name: 'mon', comment: '' })
  mon: boolean;

  @Column('boolean', { name: 'thu', comment: '' })
  thu: boolean;

  @Column('boolean', { name: 'wed', comment: '' })
  wed: boolean;

  @Column('boolean', { name: 'thir', comment: '' })
  thir: boolean;

  @Column('boolean', { name: 'fri', comment: '' })
  fri: boolean;

  @Column('boolean', { name: 'sat', comment: '' })
  sat: boolean;

  @Column('boolean', { name: 'sun', comment: '' })
  sun: boolean;

  @Column('boolean', { name: 'hol', comment: '' })
  hol: boolean;

  @Column('string', { name: 'clinic_id', comment: 'clinicId' })
  clinicId: string;

  @ManyToOne((type) => Clinic)
  @JoinColumn([{ name: 'clinic_id', referencedColumnName: 'id' }])
  clinic: Clinic;
}
