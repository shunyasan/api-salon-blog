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
import { Parts } from './parts';

@Entity('many_parts')
export class ManyParts {
  @Column('string', { primary: true, name: 'id', comment: 'PartsID' })
  id: string;

  @Column('string', { name: 'name', comment: '部位名' })
  name: string;

  @Column('string', { name: 'about_category_id', comment: '詳細カテゴリID' })
  aboutCategoryId: string;

  @ManyToMany((type) => Parts, (parts) => parts.manyParts)
  @JoinTable()
  parts: Parts;
}
