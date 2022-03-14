import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClinicGroup } from './clinic_group';
import { MachineHr } from './machine_hr';
import { MachineShr } from './machine_shr';
import { OriginCategory } from './origin_category';

@Entity('about_category')
export class AboutCategory {
  @Column('string', { primary: true, name: 'id', comment: 'OriginCategoryID' })
  id: string;

  @Column('string', { name: 'name', comment: '詳細カテゴリ名' })
  name: string;

  @Column('string', { name: 'img_url_lady', comment: '女性の画像' })
  imgUrlLady: string;

  @Column('string', { name: 'img_url_men', comment: '男性の画像' })
  imgUrlMen: string;

  @Column('boolean', { name: 'set', comment: 'セットか否か' })
  set: boolean;

  @Column('string', { name: 'table_name', comment: '関連するテーブル名' })
  tableName: string;

  @Column('string', { name: 'origin_id', comment: '広域カテゴリID' })
  originId: string;

  @ManyToOne((type) => OriginCategory)
  @JoinColumn([{ name: 'origin_id', referencedColumnName: 'id' }])
  origin: OriginCategory;
}
