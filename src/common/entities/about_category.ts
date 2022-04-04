import { Exclude } from 'class-transformer';
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseParts } from './base_parts';
import { OriginCategory } from './origin_category';

@Entity('about_category')
export class AboutCategory {
  @Column('varchar', { primary: true, name: 'id', comment: 'OriginCategoryID' })
  id: string;

  @Column('varchar', { name: 'name', comment: '詳細カテゴリ名' })
  name: string;

  @Column('varchar', { name: 'img_url_lady', comment: '女性の画像' })
  imgUrlLady: string;

  @Column('varchar', { name: 'img_url_men', comment: '男性の画像' })
  imgUrlMen: string;

  @Column('boolean', { name: 'set', comment: 'セットか否か' })
  set: boolean;

  @Column('varchar', { name: 'table_name', comment: '関連するテーブル名' })
  tableName: string;

  @Column('varchar', { name: 'origin_id', comment: '広域カテゴリID' })
  originId: string;

  @Exclude()
  @ManyToOne((type) => OriginCategory)
  @JoinColumn([{ name: 'origin_id', referencedColumnName: 'id' }])
  origin: OriginCategory;

  @Exclude()
  @OneToMany((type) => BaseParts, (baseParts) => baseParts.aboutCategory)
  baseParts: BaseParts[];
}
