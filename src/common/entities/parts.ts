import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AboutCategory } from './about_category';
import { ClinicGroup } from './clinic_group';
import { MachineHr } from './machine_hr';
import { MachineShr } from './machine_shr';
import { ManyParts } from './many_parts';

@Entity('parts')
export class Parts {
  @Column('string', { primary: true, name: 'id', comment: 'PartsID' })
  id: string;

  @Column('string', { name: 'name', comment: '部位名' })
  name: string;

  @Column('string', { name: 'description', comment: '備考' })
  description: string;

  @Column('string', { name: 'about_category_id', comment: '詳細カテゴリID' })
  aboutCategoryId: string;

  @ManyToOne((type) => AboutCategory)
  @JoinColumn([{ name: 'about_category_id', referencedColumnName: 'id' }])
  aboutCategory: AboutCategory;

  @ManyToMany((type) => ManyParts, (manyParts) => manyParts.parts)
  @JoinTable()
  manyParts: Parts;
}
