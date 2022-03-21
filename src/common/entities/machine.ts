import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Clinic } from './clinic';
import { MachineHr } from './machine_hr';
import { MachineShr } from './machine_shr';

@Entity('machine')
export class Machine {
  @Column('varchar', { primary: true, name: 'id', comment: 'machineID' })
  id: string;

  @Column('varchar', { name: 'machine_name', comment: '機器名' })
  machineName: string;

  @Column('varchar', {
    name: 'machine_hr_id',
    comment: 'HR機器ID',
    nullable: true,
  })
  machineHrId: string;

  @ManyToOne((type) => MachineHr)
  @JoinColumn([{ name: 'machine_hr_id', referencedColumnName: 'id' }])
  machineHr: MachineHr;

  @Column('varchar', {
    name: 'machine_shr_id',
    comment: 'SHR機器ID',
    nullable: true,
  })
  machineShrId: string;

  @ManyToOne((type) => MachineShr)
  @JoinColumn([{ name: 'machine_shr_id', referencedColumnName: 'id' }])
  machineShr: MachineShr;

  @ManyToMany((type) => Clinic, (clinics) => clinics.machines)
  clinics: Clinic[];
}
