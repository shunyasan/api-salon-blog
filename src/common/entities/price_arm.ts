import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Clinic } from './clinic';
import { Parts } from './parts';

@Entity('price_arm')
export class PriceArm {
  @Column('varchar', { primary: true, name: 'id', comment: 'PartsID' })
  id: string;

  @Column('varchar', { name: 'name', comment: '部位名' })
  name: string;

  @Column('integer', {
    name: 'gender',
    comment: '性別 1:女性 2:男性 3:女性男性',
  })
  gender: number;

  @Column('integer', { name: 'times', comment: '回数 0:年間プラン' })
  times: number;

  @Column('integer', { name: 'price', comment: '総額料金' })
  price: number;

  @Column('integer', { name: 'once_price', comment: '1回料金' })
  once_price: number;

  @Column('varchar', { name: 'description', comment: '備考', nullable: true })
  description: string;

  @Column('varchar', { name: 'parts_id', comment: '部位ID' })
  partsId: string;

  @ManyToOne((type) => Parts)
  @JoinColumn([{ name: 'parts_id', referencedColumnName: 'id' }])
  parts: Parts;

  @Column('varchar', { name: 'clinic_id', comment: 'クリニックID' })
  clinicId: string;

  @ManyToOne((type) => Clinic)
  @JoinColumn([{ name: 'clinic_id', referencedColumnName: 'id' }])
  clinic: Clinic;
}
