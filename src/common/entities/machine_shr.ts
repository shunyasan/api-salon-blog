import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClinicGroup } from './clinic_group';

@Entity('machine_shr')
export class MachineShr {
  @Column('string', { primary: true, name: 'id', comment: 'machineID' })
  id: string;

  @Column('string', { name: 'hair_type', comment: '毛の状態' })
  hairType: string;

  @Column('integer', { name: 'pain', comment: '痛み' })
  pain: number;

  @Column('string', { name: 'shot_detail', comment: 'ショット詳細' })
  shotDetail: string;

  @Column('string', { name: 'shot_type', comment: '照射のタイプ' })
  shotType: string;

  @Column('integer', { name: 'skin_color', comment: '対応可な肌の色' })
  skinColor: number;
}
