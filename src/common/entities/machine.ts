import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClinicGroup } from './clinic_group';
import { MachineHr } from './machine_hr';
import { MachineShr } from './machine_shr';

@Entity('machine')
export class Machine {
  @Column('string', { primary: true, name: 'id', comment: 'machineID' })
  id: string;

  @Column('string', { name: 'machine_name', comment: '機器名' })
  machineName: string;

  @Column('string', { name: 'machine_hr_id', comment: 'HR機器ID' })
  machineHrId: string;

  @ManyToOne((type) => MachineHr)
  @JoinColumn([{ name: 'machine_hr_id', referencedColumnName: 'id' }])
  machineHr: MachineHr;

  @Column('string', { name: 'machine_shr_id', comment: 'SHR機器ID' })
  machineShrId: string;

  @ManyToOne((type) => MachineShr)
  @JoinColumn([{ name: 'machine_shr_id', referencedColumnName: 'id' }])
  machineShr: MachineShr;
}
