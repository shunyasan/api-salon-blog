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

  @ManyToOne((type) => AboutCategory)
  @JoinColumn([{ name: 'about_category_id', referencedColumnName: 'id' }])
  aboutCategory: AboutCategory;

  @ManyToMany((type) => Parts, (Parts) => Parts.baseParts)
  @JoinTable({ name: 'base_parts_parts' })
  parts: Parts[];

  /*
   * Priceのリレーション
   */

  @OneToMany((type) => PriceAllBody, (priceAllBody) => priceAllBody.parts)
  priceAllBody: PriceAllBody[];

  @OneToMany((type) => PriceArm, (priceArm) => priceArm.parts)
  priceArm: PriceArm[];

  @OneToMany((type) => PriceBackBody, (priceBackBody) => priceBackBody.parts)
  priceBackBody: PriceBackBody[];

  @OneToMany((type) => PriceBodySet, (priceBodySet) => priceBodySet.parts)
  priceBodySet: PriceBodySet[];

  @OneToMany((type) => PriceFaceSet, (priceFaceSet) => priceFaceSet.parts)
  priceFaceSet: PriceFaceSet[];

  @OneToMany((type) => PriceFrontBody, (priceFrontBody) => priceFrontBody.parts)
  priceFrontBody: PriceFrontBody[];

  @OneToMany((type) => PriceLeg, (priceLeg) => priceLeg.parts)
  priceLeg: PriceLeg[];

  @OneToMany((type) => PriceLimb, (priceLimb) => priceLimb.parts)
  priceLimb: PriceLimb[];

  @OneToMany((type) => PriceLowerBody, (priceLowerBody) => priceLowerBody.parts)
  priceLowerBody: PriceLowerBody[];

  @OneToMany((type) => PriceLowerFace, (priceLowerFace) => priceLowerFace.parts)
  priceLowerFace: PriceLowerFace[];

  @OneToMany((type) => PriceRange, (priceRange) => priceRange.parts)
  priceRange: PriceRange[];

  @OneToMany((type) => PriceSelect, (priceSelect) => priceSelect.parts)
  priceSelect: PriceSelect[];

  @OneToMany((type) => PriceTime, (priceTime) => priceTime.parts)
  priceTime: PriceTime[];

  @OneToMany((type) => PriceUpperBody, (priceUpperBody) => priceUpperBody.parts)
  priceUpperBody: PriceUpperBody[];

  @OneToMany((type) => PriceUpperFace, (priceUpperFace) => priceUpperFace.parts)
  priceUpperFace: PriceUpperFace[];

  @OneToMany((type) => PriceVioSet, (priceVioSet) => priceVioSet.parts)
  priceVioSet: PriceVioSet[];

  @OneToMany((type) => PriceVio, (priceVio) => priceVio.parts)
  priceVio: PriceVio[];
}
