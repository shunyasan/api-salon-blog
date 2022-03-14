import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClinicGroup } from './clinic_group';
import { MachineHr } from './machine_hr';
import { MachineShr } from './machine_shr';

@Entity('origin_category')
export class OriginCategory {
  @Column('string', { primary: true, name: 'id', comment: 'OriginCategoryID' })
  id: string;

  @Column('string', { name: 'name', comment: '広域カテゴリ名' })
  name: string;

  @Column('string', { name: 'img_url_lady', comment: '女性の画像' })
  imgUrlLady: string;

  @Column('string', { name: 'img_url_men', comment: '男性の画像' })
  imgUrlMen: string;
}
