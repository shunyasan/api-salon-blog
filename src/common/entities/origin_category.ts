import { Entity, Column, OneToMany } from 'typeorm';
import { AboutCategory } from './about_category';

@Entity('origin_category')
export class OriginCategory {
  @Column('varchar', {
    primary: true,
    name: 'id',
    length: 10,
    comment: 'OriginCategoryID',
  })
  id: string;

  @Column('varchar', { name: 'name', length: 20, comment: '広域カテゴリ名' })
  name: string;

  @Column('varchar', {
    name: 'img_url_lady',
    length: 200,
    comment: '女性の画像',
  })
  imgUrlLady: string;

  @Column('varchar', {
    name: 'img_url_men',
    length: 200,
    comment: '男性の画像',
  })
  imgUrlMen: string;

  @OneToMany((type) => AboutCategory, (aboutCategory) => aboutCategory.origin)
  aboutCategory: AboutCategory;
}
