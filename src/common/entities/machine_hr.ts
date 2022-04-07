import { Exclude } from 'class-transformer';
import { Entity, Column, OneToMany } from 'typeorm';
import { Machine } from './machine';

@Entity('machine_hr')
export class MachineHr {
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

  @Column('integer', {
    name: 'skin_color',
    comment: '対応可能な肌の色 1: 白色のみOK 2:薄茶色までOK 3:色黒までOK',
  })
  skinColor: number;

  @Exclude()
  @OneToMany((type) => Machine, (machine) => machine.machineHr)
  machine: Machine[];
}
