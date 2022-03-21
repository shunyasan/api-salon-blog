import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Clinic } from './clinic';

@Entity('clinic_option')
export class ClinicOption {
  @Column('varchar', { primary: true, name: 'id', comment: 'clinicOptionID' })
  id: string;

  @Column('varchar', {
    name: 'irradiation_leakage',
    comment: '照射漏れ',
    nullable: true,
  })
  irradiationLeakage: string;

  @Column('varchar', {
    name: 'aftercare',
    comment: 'アフターケア',
    nullable: true,
  })
  aftercare: string;

  @Column('varchar', { name: 'anesthesia', comment: '麻酔', nullable: true })
  anesthesia: string;

  @Column('varchar', {
    name: 'campaign',
    comment: 'キャンペーン',
    nullable: true,
  })
  campaign: string;

  @Column('varchar', {
    name: 'contract_cancellation',
    comment: '途中解約',
    nullable: true,
  })
  contractCancellation: string;

  @Column('varchar', {
    name: 'first_visit_fees',
    comment: '初診料',
    nullable: true,
  })
  firstVisitFees: string;

  @Column('varchar', {
    name: 'subsequent_visit_fees',
    comment: '再診料',
    nullable: true,
  })
  subsequentVisitFees: string;

  @Column('varchar', { name: 'shaving', comment: '剃毛料', nullable: true })
  shaving: string;

  @Column('varchar', {
    name: 'student_discount',
    comment: '学割',
    nullable: true,
  })
  studentDiscount: string;

  @Column('varchar', {
    name: 'trouble_treatment',
    comment: 'トラブル対応',
    nullable: true,
  })
  troubleTreatment: string;

  @Column('varchar', { name: 'clinic_id', comment: 'clinicId' })
  clinicId: string;

  @OneToOne((type) => Clinic)
  @JoinColumn([{ name: 'clinic_id', referencedColumnName: 'id' }])
  clinic: Clinic;
}
