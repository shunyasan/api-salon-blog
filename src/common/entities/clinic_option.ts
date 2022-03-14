import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Clinic } from './clinic';
import { ClinicGroup } from './clinic_group';

@Entity('clinic_option')
export class ClinicOption {
  @Column('string', { primary: true, name: 'id', comment: 'clinicOptionID' })
  id: string;

  @Column('string', { name: 'irradiation_leakage', comment: '照射漏れ' })
  irradiationLeakage: string;

  @Column('string', { name: 'aftercare', comment: 'アフターケア' })
  aftercare: string;

  @Column('string', { name: 'anesthesia', comment: '麻酔' })
  anesthesia: string;

  @Column('string', { name: 'campaign', comment: 'キャンペーン' })
  campaign: string;

  @Column('string', { name: 'clinic_id', comment: 'clinicId' })
  clinicId: string;

  @OneToOne((type) => Clinic)
  @JoinColumn([{ name: 'clinic_id', referencedColumnName: 'id' }])
  clinic: Clinic;

  @Column('string', { name: 'contract_cancellation', comment: '途中解約' })
  contractCancellation: string;

  @Column('string', { name: 'first_visit_fees', comment: '初診料' })
  firstVisitFees: string;

  @Column('string', { name: 'subsequent_visit_fees', comment: '再診料' })
  subsequentVisitFees: string;

  @Column('string', { name: 'shaving', comment: '剃毛料' })
  shaving: string;

  @Column('string', { name: 'student_discount', comment: '学割' })
  studentDiscount: string;

  @Column('string', { name: 'trouble_treatment', comment: 'トラブル対応' })
  troubleTreatment: string;
}
