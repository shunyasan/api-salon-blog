import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClinicGroup } from './clinic_group';

@Entity('clinic')
export class Clinic {
  @Column('string', { primary: true, name: 'id', comment: 'clinicID' })
  id: string;

  @Column('string', { name: 'interior', comment: '内装' })
  interior: string;

  @Column('string', { name: 'address', comment: 'address' })
  address: string;

  @Column('string', { name: 'card_pay', comment: 'card_pay' })
  cardPay: string;

  @Column('string', { name: 'clinic_group_id', comment: 'clinic_group_id' })
  clinicGroupId: string;

  @ManyToOne((type) => ClinicGroup)
  @JoinColumn([{ name: 'clinic_group_id', referencedColumnName: 'id' }])
  clinicGroup: ClinicGroup;

  @Column('string', { name: 'medhical_loan', comment: 'medhical_loan' })
  medhical_loan: string;

  @Column('string', { name: 'name', comment: 'name' })
  name: string;

  @Column('string', { name: 'nearest_station', comment: 'nearest_station' })
  nearest_station: string;

  @Column('string', { name: 'reserve', comment: 'reserve' })
  reserve: string;

  @Column('string', { name: 'review', comment: 'review' })
  review: string;

  @Column('string', { name: 'room_type', comment: 'room_type' })
  room_type: string;

  @Column('integer', { name: 'staff_gender', comment: 'staff_gender' })
  staff_gender: number;

  @Column('string', { name: 'tax', comment: 'tax' })
  tax: string;

  @Column('string', { name: 'tel', comment: 'tel' })
  tel: string;

  @Column('string', { name: 'url', comment: 'url' })
  url: string;
}
