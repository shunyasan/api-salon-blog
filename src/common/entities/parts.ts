import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseParts } from './base_parts';

@Entity('parts')
export class Parts {
  @Column('varchar', { primary: true, name: 'id', comment: 'PartsID' })
  id: string;

  @Column('varchar', { name: 'name', comment: '部位名' })
  name: string;

  @Column('integer', { name: 'places', comment: '箇所数' })
  places: number;

  @ManyToMany((type) => BaseParts, (baseParts) => baseParts.parts)
  baseParts: BaseParts[];
}
