import { Entity, Column } from 'typeorm';

@Entity('clinic_area')
export class ClinicArea {
  @Column('string', { primary: true, name: 'id', comment: 'areaID' })
  id: string;

  @Column('string', { name: 'area', comment: '地区' })
  area: string;
}
