import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { ClinicArea } from './clinic_area';
import { ClinicGroup } from './clinic_group';
import { ClinicOpeningHours } from './clinic_opening_hours';
import { ClinicOption } from './clinic_option';
import { Machine } from './machine';
import { PriceAllBody } from './price_all_body';
import { PriceArm } from './price_arm';
import { PriceBackBody } from './price_back_body';
import { PriceBodySet } from './price_body_set';
import { PriceFaceSet } from './price_face_set';
import { PriceFrontBody } from './price_front_body';
import { PriceLeg } from './price_leg';
import { PriceLimb } from './price_limb';
import { PriceLowerBody } from './price_lower_body';
import { PriceLowerFace } from './price_lower_face';
import { PriceRange } from './price_range';
import { PriceSelect } from './price_select';
import { PriceTime } from './price_time';
import { PriceUpperBody } from './price_upper_body';
import { PriceUpperFace } from './price_upper_face';
import { PriceVio } from './price_vio';
import { PriceVioSet } from './price_vio_set';

@Entity('clinic')
export class Clinic {
  @Column('varchar', { primary: true, name: 'id', comment: 'clinicID' })
  id: string;

  @Column('varchar', { name: 'interior', comment: '内装', nullable: true })
  interior: string;

  @Column('text', { name: 'address', comment: 'address' })
  address: string;

  @Column('varchar', { name: 'card_pay', comment: 'card_pay', nullable: true })
  cardPay: string;

  @Column('varchar', {
    name: 'medhical_loan',
    comment: 'medhical_loan',
    nullable: true,
  })
  medhicalLoan: string;

  @Column('varchar', { name: 'name', comment: 'name' })
  name: string;

  @Column('varchar', { name: 'nearest_station', comment: 'nearest_station' })
  nearestStation: string;

  @Column('varchar', { name: 'reserve', comment: 'reserve', nullable: true })
  reserve: string;

  @Column('float', { name: 'review', comment: 'review', nullable: true })
  review: number;

  @Column('varchar', {
    name: 'room_type',
    comment: 'room_type',
    nullable: true,
  })
  roomType: string;

  @Column('integer', {
    name: 'staff_gender',
    comment: '0:不明 1:女性 2:男性 3:女性男性',
    default: 0,
  })
  staffGender: number;

  @Column('varchar', { name: 'tax', comment: 'tax', nullable: true })
  tax: string;

  @Column('varchar', { name: 'tel', comment: 'tel', nullable: true })
  tel: string;

  @Column('varchar', { name: 'url', comment: 'url', nullable: true })
  url: string;

  @Column('varchar', { name: 'area_id', comment: '地区名' })
  areaId: string;

  @Column('varchar', {
    name: 'clinic_group_id',
    comment: 'クリニックグループID',
    nullable: true,
  })
  clinicGroupId: string;

  @Exclude()
  @ManyToOne((type) => ClinicGroup)
  @JoinColumn([{ name: 'clinic_group_id', referencedColumnName: 'id' }])
  clinicGroup: ClinicGroup;

  @Exclude()
  @ManyToOne((type) => ClinicArea)
  @JoinColumn([{ name: 'area_id', referencedColumnName: 'id' }])
  area: ClinicArea;

  @Exclude()
  @ManyToMany((type) => Machine, (machines) => machines.clinics)
  @JoinTable({ name: 'clinics_machines' })
  machines: Machine[];

  @Exclude()
  @OneToMany(
    (type) => ClinicOpeningHours,
    (clinicOpeningHours) => clinicOpeningHours.clinic,
  )
  clinicOpeningHours: ClinicOpeningHours[];

  @Exclude()
  @OneToOne((type) => ClinicOption, (clinicOption) => clinicOption.clinic)
  clinicOption: ClinicOption;

  /*
   * Priceのリレーション
   */

  @Exclude()
  @OneToMany((type) => PriceAllBody, (priceAllBody) => priceAllBody.clinic)
  priceAllBody: PriceAllBody[];

  @Exclude()
  @OneToMany((type) => PriceArm, (priceArm) => priceArm.clinic)
  priceArm: PriceArm[];

  @Exclude()
  @OneToMany((type) => PriceBackBody, (priceBackBody) => priceBackBody.clinic)
  priceBackBody: PriceBackBody[];

  @Exclude()
  @OneToMany((type) => PriceBodySet, (priceBodySet) => priceBodySet.clinic)
  priceBodySet: PriceBodySet[];

  @Exclude()
  @OneToMany((type) => PriceFaceSet, (priceFaceSet) => priceFaceSet.clinic)
  priceFaceSet: PriceFaceSet[];

  @Exclude()
  @OneToMany(
    (type) => PriceFrontBody,
    (priceFrontBody) => priceFrontBody.clinic,
  )
  priceFrontBody: PriceFrontBody[];

  @Exclude()
  @OneToMany((type) => PriceLeg, (priceLeg) => priceLeg.clinic)
  priceLeg: PriceLeg[];

  @Exclude()
  @OneToMany((type) => PriceLimb, (priceLimb) => priceLimb.clinic)
  priceLimb: PriceLimb[];

  @Exclude()
  @OneToMany(
    (type) => PriceLowerBody,
    (priceLowerBody) => priceLowerBody.clinic,
  )
  priceLowerBody: PriceLowerBody[];

  @Exclude()
  @OneToMany(
    (type) => PriceLowerFace,
    (priceLowerFace) => priceLowerFace.clinic,
  )
  priceLowerFace: PriceLowerFace[];

  @Exclude()
  @OneToMany((type) => PriceRange, (priceRange) => priceRange.clinic)
  priceRange: PriceRange[];

  @Exclude()
  @OneToMany((type) => PriceSelect, (priceSelect) => priceSelect.clinic)
  priceSelect: PriceSelect[];

  @Exclude()
  @OneToMany((type) => PriceTime, (priceTime) => priceTime.clinic)
  priceTime: PriceTime[];

  @Exclude()
  @OneToMany(
    (type) => PriceUpperBody,
    (priceUpperBody) => priceUpperBody.clinic,
  )
  priceUpperBody: PriceUpperBody[];

  @Exclude()
  @OneToMany(
    (type) => PriceUpperFace,
    (priceUpperFace) => priceUpperFace.clinic,
  )
  priceUpperFace: PriceUpperFace[];

  @Exclude()
  @OneToMany((type) => PriceVioSet, (priceVioSet) => priceVioSet.clinic)
  priceVioSet: PriceVioSet[];

  @Exclude()
  @OneToMany((type) => PriceVio, (priceVio) => priceVio.clinic)
  priceVio: PriceVio[];
}
