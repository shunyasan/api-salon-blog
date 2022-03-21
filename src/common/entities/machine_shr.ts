import { Entity, Column, OneToMany } from 'typeorm';
import { Machine } from './machine';

@Entity('machine_shr')
export class MachineShr {
  @Column('varchar', { primary: true, name: 'id', comment: 'machineID' })
  id: string;

  @Column('varchar', { name: 'hair_type', comment: '毛の状態' })
  hairType: string;

  @Column('integer', { name: 'pain', comment: '痛み' })
  pain: number;

  @Column('varchar', { name: 'shot_detail', comment: 'ショット詳細' })
  shotDetail: string;

  @Column('varchar', { name: 'shot_type', comment: '照射のタイプ' })
  shotType: string;

  @Column('integer', { name: 'skin_color', comment: '対応可な肌の色' })
  skinColor: number;

  @OneToMany((type) => Machine, (machine) => machine.machineShr)
  machine: Machine[];
}
