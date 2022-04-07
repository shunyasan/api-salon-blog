import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { AboutCategory } from './about_category';
import { Parts } from './parts';
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

@Entity('base_parts')
export class BaseParts {
  @Column('varchar', { primary: true, name: 'id', comment: 'PartsID' })
  id: string;

  @Column('varchar', { name: 'name', comment: '部位名' })
  name: string;

  @Column('varchar', { name: 'description', comment: '備考', nullable: true })
  description: string;

  @Column('varchar', { name: 'about_category_id', comment: '詳細カテゴリID' })
  aboutCategoryId: string;

  @Column('integer', {
    name: 'gender',
    comment: '対象の性別 女性:1 男性:2 女性男性:3',
    default: 3,
  })
  gender: number;

  @Exclude()
  @ManyToOne((type) => AboutCategory)
  @JoinColumn([{ name: 'about_category_id', referencedColumnName: 'id' }])
  aboutCategory: AboutCategory;

  @Exclude()
  @ManyToMany((type) => Parts, (Parts) => Parts.baseParts)
  @JoinTable({ name: 'base_parts_parts' })
  parts: Parts[];

  /*
   * Priceのリレーション
   */

  // @Exclude()
  // @OneToMany((type) => PriceAllBody, (priceAllBody) => priceAllBody.parts)
  // priceAllBody: PriceAllBody[];

  // @Exclude()
  // @OneToMany((type) => PriceArm, (priceArm) => priceArm.parts)
  // priceArm: PriceArm[];

  // @Exclude()
  // @OneToMany((type) => PriceBackBody, (priceBackBody) => priceBackBody.parts)
  // priceBackBody: PriceBackBody[];

  // @Exclude()
  // @OneToMany((type) => PriceBodySet, (priceBodySet) => priceBodySet.parts)
  // priceBodySet: PriceBodySet[];

  // @Exclude()
  // @OneToMany((type) => PriceFaceSet, (priceFaceSet) => priceFaceSet.parts)
  // priceFaceSet: PriceFaceSet[];

  // @Exclude()
  // @OneToMany((type) => PriceFrontBody, (priceFrontBody) => priceFrontBody.parts)
  // priceFrontBody: PriceFrontBody[];

  // @Exclude()
  // @OneToMany((type) => PriceLeg, (priceLeg) => priceLeg.parts)
  // priceLeg: PriceLeg[];

  // @Exclude()
  // @OneToMany((type) => PriceLimb, (priceLimb) => priceLimb.parts)
  // priceLimb: PriceLimb[];

  // @Exclude()
  // @OneToMany((type) => PriceLowerBody, (priceLowerBody) => priceLowerBody.parts)
  // priceLowerBody: PriceLowerBody[];

  // @Exclude()
  // @OneToMany((type) => PriceLowerFace, (priceLowerFace) => priceLowerFace.parts)
  // priceLowerFace: PriceLowerFace[];

  // @Exclude()
  // @OneToMany((type) => PriceRange, (priceRange) => priceRange.parts)
  // priceRange: PriceRange[];

  // @Exclude()
  // @OneToMany((type) => PriceSelect, (priceSelect) => priceSelect.parts)
  // priceSelect: PriceSelect[];

  // @Exclude()
  // @OneToMany((type) => PriceTime, (priceTime) => priceTime.parts)
  // priceTime: PriceTime[];

  // @Exclude()
  // @OneToMany((type) => PriceUpperBody, (priceUpperBody) => priceUpperBody.parts)
  // priceUpperBody: PriceUpperBody[];

  // @Exclude()
  // @OneToMany((type) => PriceUpperFace, (priceUpperFace) => priceUpperFace.parts)
  // priceUpperFace: PriceUpperFace[];

  // @Exclude()
  // @OneToMany((type) => PriceVioSet, (priceVioSet) => priceVioSet.parts)
  // priceVioSet: PriceVioSet[];

  // @Exclude()
  // @OneToMany((type) => PriceVio, (priceVio) => priceVio.parts)
  // priceVio: PriceVio[];
}
