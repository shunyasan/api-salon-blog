import { Exclude } from 'class-transformer';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_opening_hours')
export class ClinicOpeningHours {
  @Column('varchar', { primary: true, name: 'id', comment: 'clinicOptionID' })
  id: string;

  @Column('varchar', { name: 'start_hours', comment: '開始時間' })
  startHours: string;

  @Column('varchar', { name: 'end_hours', comment: '終了時間' })
  endHours: string;

  @Column('varchar', { name: 'description', comment: '備考', nullable: true })
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

  @Column('varchar', { name: 'clinic_id', comment: 'clinicId' })
  clinicId: string;

  @Exclude()
  @ManyToOne((type) => Clinic)
  @JoinColumn([{ name: 'clinic_id', referencedColumnName: 'id' }])
  clinic: Clinic;
}
