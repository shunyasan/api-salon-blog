import { MigrationInterface, QueryRunner } from 'typeorm';

export class first1647821996106 implements MigrationInterface {
  name = 'first1647821996106';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "origin_category" ("id" character varying(10) NOT NULL, "name" character varying(20) NOT NULL, "img_url_lady" character varying(200) NOT NULL, "img_url_men" character varying(200) NOT NULL, CONSTRAINT "PK_8e323436402d3d83e767cfadb85" PRIMARY KEY ("id")); COMMENT ON COLUMN "origin_category"."id" IS 'OriginCategoryID'; COMMENT ON COLUMN "origin_category"."name" IS '広域カテゴリ名'; COMMENT ON COLUMN "origin_category"."img_url_lady" IS '女性の画像'; COMMENT ON COLUMN "origin_category"."img_url_men" IS '男性の画像'`,
    );
    await queryRunner.query(
      `CREATE TABLE "about_category" ("id" character varying NOT NULL, "name" character varying NOT NULL, "img_url_lady" character varying NOT NULL, "img_url_men" character varying NOT NULL, "set" boolean NOT NULL, "table_name" character varying NOT NULL, "origin_id" character varying NOT NULL, CONSTRAINT "PK_3c4383152c07ae33533638bd239" PRIMARY KEY ("id")); COMMENT ON COLUMN "about_category"."id" IS 'OriginCategoryID'; COMMENT ON COLUMN "about_category"."name" IS '詳細カテゴリ名'; COMMENT ON COLUMN "about_category"."img_url_lady" IS '女性の画像'; COMMENT ON COLUMN "about_category"."img_url_men" IS '男性の画像'; COMMENT ON COLUMN "about_category"."set" IS 'セットか否か'; COMMENT ON COLUMN "about_category"."table_name" IS '関連するテーブル名'; COMMENT ON COLUMN "about_category"."origin_id" IS '広域カテゴリID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "parts" ("id" character varying NOT NULL, "name" character varying NOT NULL, "places" integer NOT NULL, CONSTRAINT "PK_daa5595bb8933f49ac00c9ebc79" PRIMARY KEY ("id")); COMMENT ON COLUMN "parts"."id" IS 'PartsID'; COMMENT ON COLUMN "parts"."name" IS '部位名'; COMMENT ON COLUMN "parts"."places" IS '箇所数'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinic_area" ("id" character varying NOT NULL, "area" character varying NOT NULL, CONSTRAINT "PK_f63d00758b4ce9d155e48cc709b" PRIMARY KEY ("id")); COMMENT ON COLUMN "clinic_area"."id" IS 'areaID'; COMMENT ON COLUMN "clinic_area"."area" IS '地区'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinic_group" ("id" character varying NOT NULL, "example_clinic" character varying NOT NULL, "group_name" character varying NOT NULL, CONSTRAINT "PK_d4a7972590edeaaaf5bff351b96" PRIMARY KEY ("id")); COMMENT ON COLUMN "clinic_group"."id" IS 'clinicGroupID'; COMMENT ON COLUMN "clinic_group"."example_clinic" IS 'クリニック例'; COMMENT ON COLUMN "clinic_group"."group_name" IS 'group_name'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinic_opening_hours" ("id" character varying NOT NULL, "start_hours" character varying NOT NULL, "end_hours" character varying NOT NULL, "description" character varying, "mon" boolean NOT NULL, "thu" boolean NOT NULL, "wed" boolean NOT NULL, "thir" boolean NOT NULL, "fri" boolean NOT NULL, "sat" boolean NOT NULL, "sun" boolean NOT NULL, "hol" boolean NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_6b2d5bc4773d5c2c1cae8211e5e" PRIMARY KEY ("id")); COMMENT ON COLUMN "clinic_opening_hours"."id" IS 'clinicOptionID'; COMMENT ON COLUMN "clinic_opening_hours"."start_hours" IS '開始時間'; COMMENT ON COLUMN "clinic_opening_hours"."end_hours" IS '終了時間'; COMMENT ON COLUMN "clinic_opening_hours"."description" IS '備考'; COMMENT ON COLUMN "clinic_opening_hours"."clinic_id" IS 'clinicId'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinic_option" ("id" character varying NOT NULL, "irradiation_leakage" character varying, "aftercare" character varying, "anesthesia" character varying, "campaign" character varying, "contract_cancellation" character varying, "first_visit_fees" character varying, "subsequent_visit_fees" character varying, "shaving" character varying, "student_discount" character varying, "trouble_treatment" character varying, "clinic_id" character varying NOT NULL, CONSTRAINT "REL_9b8129f1e986894bce92f54241" UNIQUE ("clinic_id"), CONSTRAINT "PK_3e990707a77fef8aba27176aa04" PRIMARY KEY ("id")); COMMENT ON COLUMN "clinic_option"."id" IS 'clinicOptionID'; COMMENT ON COLUMN "clinic_option"."irradiation_leakage" IS '照射漏れ'; COMMENT ON COLUMN "clinic_option"."aftercare" IS 'アフターケア'; COMMENT ON COLUMN "clinic_option"."anesthesia" IS '麻酔'; COMMENT ON COLUMN "clinic_option"."campaign" IS 'キャンペーン'; COMMENT ON COLUMN "clinic_option"."contract_cancellation" IS '途中解約'; COMMENT ON COLUMN "clinic_option"."first_visit_fees" IS '初診料'; COMMENT ON COLUMN "clinic_option"."subsequent_visit_fees" IS '再診料'; COMMENT ON COLUMN "clinic_option"."shaving" IS '剃毛料'; COMMENT ON COLUMN "clinic_option"."student_discount" IS '学割'; COMMENT ON COLUMN "clinic_option"."trouble_treatment" IS 'トラブル対応'; COMMENT ON COLUMN "clinic_option"."clinic_id" IS 'clinicId'`,
    );
    await queryRunner.query(
      `CREATE TABLE "machine_hr" ("id" character varying NOT NULL, "hair_type" character varying NOT NULL, "pain" integer NOT NULL, "shot_detail" character varying NOT NULL, "shot_type" character varying NOT NULL, "skin_color" integer NOT NULL, CONSTRAINT "PK_4e8cc2d829490715c82eda529b8" PRIMARY KEY ("id")); COMMENT ON COLUMN "machine_hr"."id" IS 'machineID'; COMMENT ON COLUMN "machine_hr"."hair_type" IS '毛の状態'; COMMENT ON COLUMN "machine_hr"."pain" IS '痛み'; COMMENT ON COLUMN "machine_hr"."shot_detail" IS 'ショット詳細'; COMMENT ON COLUMN "machine_hr"."shot_type" IS '照射のタイプ'; COMMENT ON COLUMN "machine_hr"."skin_color" IS '対応可な肌の色'`,
    );
    await queryRunner.query(
      `CREATE TABLE "machine_shr" ("id" character varying NOT NULL, "hair_type" character varying NOT NULL, "pain" integer NOT NULL, "shot_detail" character varying NOT NULL, "shot_type" character varying NOT NULL, "skin_color" integer NOT NULL, CONSTRAINT "PK_8b68520c84ae8aad78dea7dded9" PRIMARY KEY ("id")); COMMENT ON COLUMN "machine_shr"."id" IS 'machineID'; COMMENT ON COLUMN "machine_shr"."hair_type" IS '毛の状態'; COMMENT ON COLUMN "machine_shr"."pain" IS '痛み'; COMMENT ON COLUMN "machine_shr"."shot_detail" IS 'ショット詳細'; COMMENT ON COLUMN "machine_shr"."shot_type" IS '照射のタイプ'; COMMENT ON COLUMN "machine_shr"."skin_color" IS '対応可な肌の色'`,
    );
    await queryRunner.query(
      `CREATE TABLE "machine" ("id" character varying NOT NULL, "machine_name" character varying NOT NULL, "machine_hr_id" character varying, "machine_shr_id" character varying, CONSTRAINT "PK_acc588900ffa841d96eb5fd566c" PRIMARY KEY ("id")); COMMENT ON COLUMN "machine"."id" IS 'machineID'; COMMENT ON COLUMN "machine"."machine_name" IS '機器名'; COMMENT ON COLUMN "machine"."machine_hr_id" IS 'HR機器ID'; COMMENT ON COLUMN "machine"."machine_shr_id" IS 'SHR機器ID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_arm" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_e603ff75e081368b2f5c60e2dbc" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_arm"."id" IS 'PartsID'; COMMENT ON COLUMN "price_arm"."name" IS '部位名'; COMMENT ON COLUMN "price_arm"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_arm"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_arm"."price" IS '総額料金'; COMMENT ON COLUMN "price_arm"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_arm"."description" IS '備考'; COMMENT ON COLUMN "price_arm"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_arm"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_back_body" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_67609d2313eb60350d64f96169b" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_back_body"."id" IS 'PartsID'; COMMENT ON COLUMN "price_back_body"."name" IS '部位名'; COMMENT ON COLUMN "price_back_body"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_back_body"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_back_body"."price" IS '総額料金'; COMMENT ON COLUMN "price_back_body"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_back_body"."description" IS '備考'; COMMENT ON COLUMN "price_back_body"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_back_body"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_body_set" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_e03ee9a64629279ee70582690b6" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_body_set"."id" IS 'PartsID'; COMMENT ON COLUMN "price_body_set"."name" IS '部位名'; COMMENT ON COLUMN "price_body_set"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_body_set"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_body_set"."price" IS '総額料金'; COMMENT ON COLUMN "price_body_set"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_body_set"."description" IS '備考'; COMMENT ON COLUMN "price_body_set"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_body_set"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_face_set" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_3ed61b51642ce238304e6052a5d" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_face_set"."id" IS 'PartsID'; COMMENT ON COLUMN "price_face_set"."name" IS '部位名'; COMMENT ON COLUMN "price_face_set"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_face_set"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_face_set"."price" IS '総額料金'; COMMENT ON COLUMN "price_face_set"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_face_set"."description" IS '備考'; COMMENT ON COLUMN "price_face_set"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_face_set"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_front_body" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_0e8a1700642618d825ae80c9eb9" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_front_body"."id" IS 'PartsID'; COMMENT ON COLUMN "price_front_body"."name" IS '部位名'; COMMENT ON COLUMN "price_front_body"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_front_body"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_front_body"."price" IS '総額料金'; COMMENT ON COLUMN "price_front_body"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_front_body"."description" IS '備考'; COMMENT ON COLUMN "price_front_body"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_front_body"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_leg" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_fbbe03bd90f41ad6a1ef43ec915" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_leg"."id" IS 'PartsID'; COMMENT ON COLUMN "price_leg"."name" IS '部位名'; COMMENT ON COLUMN "price_leg"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_leg"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_leg"."price" IS '総額料金'; COMMENT ON COLUMN "price_leg"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_leg"."description" IS '備考'; COMMENT ON COLUMN "price_leg"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_leg"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_limb" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_77234f4e5a479be65da47992e09" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_limb"."id" IS 'PartsID'; COMMENT ON COLUMN "price_limb"."name" IS '部位名'; COMMENT ON COLUMN "price_limb"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_limb"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_limb"."price" IS '総額料金'; COMMENT ON COLUMN "price_limb"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_limb"."description" IS '備考'; COMMENT ON COLUMN "price_limb"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_limb"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_lower_body" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_cbeb9fed9dc40c075152759f8ec" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_lower_body"."id" IS 'PartsID'; COMMENT ON COLUMN "price_lower_body"."name" IS '部位名'; COMMENT ON COLUMN "price_lower_body"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_lower_body"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_lower_body"."price" IS '総額料金'; COMMENT ON COLUMN "price_lower_body"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_lower_body"."description" IS '備考'; COMMENT ON COLUMN "price_lower_body"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_lower_body"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_lower_face" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_8ecd8416e06b759c0098e1918a7" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_lower_face"."id" IS 'PartsID'; COMMENT ON COLUMN "price_lower_face"."name" IS '部位名'; COMMENT ON COLUMN "price_lower_face"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_lower_face"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_lower_face"."price" IS '総額料金'; COMMENT ON COLUMN "price_lower_face"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_lower_face"."description" IS '備考'; COMMENT ON COLUMN "price_lower_face"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_lower_face"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_range" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_2d8515c0bc473a37b8f235df731" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_range"."id" IS 'PartsID'; COMMENT ON COLUMN "price_range"."name" IS '部位名'; COMMENT ON COLUMN "price_range"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_range"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_range"."price" IS '総額料金'; COMMENT ON COLUMN "price_range"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_range"."description" IS '備考'; COMMENT ON COLUMN "price_range"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_range"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_select" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_963faaeebdfc93cc5b9991626e0" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_select"."id" IS 'PartsID'; COMMENT ON COLUMN "price_select"."name" IS '部位名'; COMMENT ON COLUMN "price_select"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_select"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_select"."price" IS '総額料金'; COMMENT ON COLUMN "price_select"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_select"."description" IS '備考'; COMMENT ON COLUMN "price_select"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_select"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_time" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_c3ca4cee819a805a519426dbd24" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_time"."id" IS 'PartsID'; COMMENT ON COLUMN "price_time"."name" IS '部位名'; COMMENT ON COLUMN "price_time"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_time"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_time"."price" IS '総額料金'; COMMENT ON COLUMN "price_time"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_time"."description" IS '備考'; COMMENT ON COLUMN "price_time"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_time"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_upper_body" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_cd58093724474ca6cded931b31c" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_upper_body"."id" IS 'PartsID'; COMMENT ON COLUMN "price_upper_body"."name" IS '部位名'; COMMENT ON COLUMN "price_upper_body"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_upper_body"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_upper_body"."price" IS '総額料金'; COMMENT ON COLUMN "price_upper_body"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_upper_body"."description" IS '備考'; COMMENT ON COLUMN "price_upper_body"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_upper_body"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_upper_face" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_12969c86e0984dc8f89bea84984" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_upper_face"."id" IS 'PartsID'; COMMENT ON COLUMN "price_upper_face"."name" IS '部位名'; COMMENT ON COLUMN "price_upper_face"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_upper_face"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_upper_face"."price" IS '総額料金'; COMMENT ON COLUMN "price_upper_face"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_upper_face"."description" IS '備考'; COMMENT ON COLUMN "price_upper_face"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_upper_face"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_vio" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_f1705b1ec69c16e1fd6e892d6b0" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_vio"."id" IS 'PartsID'; COMMENT ON COLUMN "price_vio"."name" IS '部位名'; COMMENT ON COLUMN "price_vio"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_vio"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_vio"."price" IS '総額料金'; COMMENT ON COLUMN "price_vio"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_vio"."description" IS '備考'; COMMENT ON COLUMN "price_vio"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_vio"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_vio_set" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_a3866ee19ff7a21b5a880198495" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_vio_set"."id" IS 'PartsID'; COMMENT ON COLUMN "price_vio_set"."name" IS '部位名'; COMMENT ON COLUMN "price_vio_set"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_vio_set"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_vio_set"."price" IS '総額料金'; COMMENT ON COLUMN "price_vio_set"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_vio_set"."description" IS '備考'; COMMENT ON COLUMN "price_vio_set"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_vio_set"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinic" ("id" character varying NOT NULL, "interior" character varying, "address" text NOT NULL, "card_pay" character varying, "medhical_loan" character varying, "name" character varying NOT NULL, "nearest_station" character varying NOT NULL, "reserve" character varying, "review" double precision, "room_type" character varying, "staff_gender" integer NOT NULL DEFAULT '0', "tax" character varying, "tel" character varying, "url" character varying, "area_id" character varying NOT NULL, "clinic_group_id" character varying, CONSTRAINT "PK_8e97c18debc9c7f7606e311d763" PRIMARY KEY ("id")); COMMENT ON COLUMN "clinic"."id" IS 'clinicID'; COMMENT ON COLUMN "clinic"."interior" IS '内装'; COMMENT ON COLUMN "clinic"."address" IS 'address'; COMMENT ON COLUMN "clinic"."card_pay" IS 'card_pay'; COMMENT ON COLUMN "clinic"."medhical_loan" IS 'medhical_loan'; COMMENT ON COLUMN "clinic"."name" IS 'name'; COMMENT ON COLUMN "clinic"."nearest_station" IS 'nearest_station'; COMMENT ON COLUMN "clinic"."reserve" IS 'reserve'; COMMENT ON COLUMN "clinic"."review" IS 'review'; COMMENT ON COLUMN "clinic"."room_type" IS 'room_type'; COMMENT ON COLUMN "clinic"."staff_gender" IS '0:不明 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "clinic"."tax" IS 'tax'; COMMENT ON COLUMN "clinic"."tel" IS 'tel'; COMMENT ON COLUMN "clinic"."url" IS 'url'; COMMENT ON COLUMN "clinic"."area_id" IS '地区名'; COMMENT ON COLUMN "clinic"."clinic_group_id" IS 'クリニックグループID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "price_all_body" ("id" character varying NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "times" integer NOT NULL, "price" integer NOT NULL, "once_price" integer NOT NULL, "description" character varying, "parts_id" character varying NOT NULL, "clinic_id" character varying NOT NULL, CONSTRAINT "PK_cdc717fc81d8d3693c3db45c1db" PRIMARY KEY ("id")); COMMENT ON COLUMN "price_all_body"."id" IS 'PartsID'; COMMENT ON COLUMN "price_all_body"."name" IS '部位名'; COMMENT ON COLUMN "price_all_body"."gender" IS '性別 1:女性 2:男性 3:女性男性'; COMMENT ON COLUMN "price_all_body"."times" IS '回数 0:年間プラン'; COMMENT ON COLUMN "price_all_body"."price" IS '総額料金'; COMMENT ON COLUMN "price_all_body"."once_price" IS '1回料金'; COMMENT ON COLUMN "price_all_body"."description" IS '備考'; COMMENT ON COLUMN "price_all_body"."parts_id" IS '部位ID'; COMMENT ON COLUMN "price_all_body"."clinic_id" IS 'クリニックID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "base_parts" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, "about_category_id" character varying NOT NULL, CONSTRAINT "PK_8ab4230944b5ff3172f02b4a888" PRIMARY KEY ("id")); COMMENT ON COLUMN "base_parts"."id" IS 'PartsID'; COMMENT ON COLUMN "base_parts"."name" IS '部位名'; COMMENT ON COLUMN "base_parts"."description" IS '備考'; COMMENT ON COLUMN "base_parts"."about_category_id" IS '詳細カテゴリID'`,
    );
    await queryRunner.query(
      `CREATE TABLE "clinics_machines" ("clinicId" character varying NOT NULL, "machineId" character varying NOT NULL, CONSTRAINT "PK_e85f91fd238b4e6dbd021836f9f" PRIMARY KEY ("clinicId", "machineId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3949cee95f2aaaf176a1d7f862" ON "clinics_machines" ("clinicId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_221dd1d87edf9a7911eaadab3c" ON "clinics_machines" ("machineId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "base_parts_parts" ("basePartsId" character varying NOT NULL, "partsId" character varying NOT NULL, CONSTRAINT "PK_1b30a9a6e5dd085ef0f089b15ab" PRIMARY KEY ("basePartsId", "partsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ac4bf2a2817fca32731fee0c15" ON "base_parts_parts" ("basePartsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7693d4151c60aa7115c97a3104" ON "base_parts_parts" ("partsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "about_category" ADD CONSTRAINT "FK_61287c8e7e1d050bf4caea9237f" FOREIGN KEY ("origin_id") REFERENCES "origin_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic_opening_hours" ADD CONSTRAINT "FK_2f7f851eff7ed2b27d6aca07b11" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic_option" ADD CONSTRAINT "FK_9b8129f1e986894bce92f542416" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "machine" ADD CONSTRAINT "FK_cebb12f83e34a59e5fbaf939ad0" FOREIGN KEY ("machine_hr_id") REFERENCES "machine_hr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "machine" ADD CONSTRAINT "FK_43acd1f7cb7c024a9cdfc72882e" FOREIGN KEY ("machine_shr_id") REFERENCES "machine_shr"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_arm" ADD CONSTRAINT "FK_6f9455fecb8ca47502a06188814" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_arm" ADD CONSTRAINT "FK_8cde12b62b2528a00d380714417" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_back_body" ADD CONSTRAINT "FK_1c7bad64dadb361d8af101a94d5" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_back_body" ADD CONSTRAINT "FK_46fab81f57daaa90955d2183036" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_body_set" ADD CONSTRAINT "FK_b4add8cf3c669d0c241a2a3559c" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_body_set" ADD CONSTRAINT "FK_22ce9a8e9a1a5d7fb14e3170675" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_face_set" ADD CONSTRAINT "FK_f4986e7730ef6c5ea05bcdad623" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_face_set" ADD CONSTRAINT "FK_6bfad9aa808f3140fa3f62a047a" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_front_body" ADD CONSTRAINT "FK_3386fe60d375f0ee7aed1acaca6" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_front_body" ADD CONSTRAINT "FK_d5d6d696b5d4956ebd9de1baca9" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_leg" ADD CONSTRAINT "FK_776f3bfd3aeab45f10e4206b1d4" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_leg" ADD CONSTRAINT "FK_7d03a27b86d6bc7ec1dcf6ab6c5" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_limb" ADD CONSTRAINT "FK_5115cc9c78e3fdc8da1ffe85a0d" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_limb" ADD CONSTRAINT "FK_786248bb46201b82ef58bf67835" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_body" ADD CONSTRAINT "FK_d75a8243dbdb17535e341dc7488" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_body" ADD CONSTRAINT "FK_23ed4d4261d0e452193e466635d" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_face" ADD CONSTRAINT "FK_c6907ca2a106dfdc02743aff1ba" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_face" ADD CONSTRAINT "FK_61fe56326983d5acad08356db14" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_range" ADD CONSTRAINT "FK_1d515220b0c287af518d5b6d94e" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_range" ADD CONSTRAINT "FK_8a5f87d02db45a0e675c2bf249f" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_select" ADD CONSTRAINT "FK_9f454831a77d3beb71df0cd80a7" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_select" ADD CONSTRAINT "FK_e15606d26c8a22db4cd8fc52953" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_time" ADD CONSTRAINT "FK_2db14036f2cdf377012cc5d151a" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_time" ADD CONSTRAINT "FK_c77e3aa3f5028279ade32ebd4cb" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_body" ADD CONSTRAINT "FK_e28e67ee9aa37108b809ffd95ce" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_body" ADD CONSTRAINT "FK_2614d86647fbb4f498f8ea857bf" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_face" ADD CONSTRAINT "FK_e9e6b5ee9665f18ba2fc58f248a" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_face" ADD CONSTRAINT "FK_209a94c49af35cee4d2feef0b67" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio" ADD CONSTRAINT "FK_cd97e74bbb9480c2b74b869f4f8" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio" ADD CONSTRAINT "FK_36535b7adea061c21e4af26eb12" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio_set" ADD CONSTRAINT "FK_82e669915afcdb252b2b8bdf33c" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio_set" ADD CONSTRAINT "FK_649c83d094e1d9c9e12795a0f91" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic" ADD CONSTRAINT "FK_75d1a294af50c929b2036fc68ad" FOREIGN KEY ("clinic_group_id") REFERENCES "clinic_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic" ADD CONSTRAINT "FK_f63d00758b4ce9d155e48cc709b" FOREIGN KEY ("area_id") REFERENCES "clinic_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_all_body" ADD CONSTRAINT "FK_f2299f7c5e2f3db40c8c9d39568" FOREIGN KEY ("parts_id") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_all_body" ADD CONSTRAINT "FK_af31ae74945ffaf951be6f6e6c1" FOREIGN KEY ("clinic_id") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "base_parts" ADD CONSTRAINT "FK_963f292c4835e8c43786903c6af" FOREIGN KEY ("about_category_id") REFERENCES "about_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinics_machines" ADD CONSTRAINT "FK_3949cee95f2aaaf176a1d7f8621" FOREIGN KEY ("clinicId") REFERENCES "clinic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinics_machines" ADD CONSTRAINT "FK_221dd1d87edf9a7911eaadab3c4" FOREIGN KEY ("machineId") REFERENCES "machine"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "base_parts_parts" ADD CONSTRAINT "FK_ac4bf2a2817fca32731fee0c151" FOREIGN KEY ("basePartsId") REFERENCES "base_parts"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "base_parts_parts" ADD CONSTRAINT "FK_7693d4151c60aa7115c97a3104d" FOREIGN KEY ("partsId") REFERENCES "parts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "base_parts_parts" DROP CONSTRAINT "FK_7693d4151c60aa7115c97a3104d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "base_parts_parts" DROP CONSTRAINT "FK_ac4bf2a2817fca32731fee0c151"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinics_machines" DROP CONSTRAINT "FK_221dd1d87edf9a7911eaadab3c4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinics_machines" DROP CONSTRAINT "FK_3949cee95f2aaaf176a1d7f8621"`,
    );
    await queryRunner.query(
      `ALTER TABLE "base_parts" DROP CONSTRAINT "FK_963f292c4835e8c43786903c6af"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_all_body" DROP CONSTRAINT "FK_af31ae74945ffaf951be6f6e6c1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_all_body" DROP CONSTRAINT "FK_f2299f7c5e2f3db40c8c9d39568"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic" DROP CONSTRAINT "FK_f63d00758b4ce9d155e48cc709b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic" DROP CONSTRAINT "FK_75d1a294af50c929b2036fc68ad"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio_set" DROP CONSTRAINT "FK_649c83d094e1d9c9e12795a0f91"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio_set" DROP CONSTRAINT "FK_82e669915afcdb252b2b8bdf33c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio" DROP CONSTRAINT "FK_36535b7adea061c21e4af26eb12"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_vio" DROP CONSTRAINT "FK_cd97e74bbb9480c2b74b869f4f8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_face" DROP CONSTRAINT "FK_209a94c49af35cee4d2feef0b67"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_face" DROP CONSTRAINT "FK_e9e6b5ee9665f18ba2fc58f248a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_body" DROP CONSTRAINT "FK_2614d86647fbb4f498f8ea857bf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_upper_body" DROP CONSTRAINT "FK_e28e67ee9aa37108b809ffd95ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_time" DROP CONSTRAINT "FK_c77e3aa3f5028279ade32ebd4cb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_time" DROP CONSTRAINT "FK_2db14036f2cdf377012cc5d151a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_select" DROP CONSTRAINT "FK_e15606d26c8a22db4cd8fc52953"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_select" DROP CONSTRAINT "FK_9f454831a77d3beb71df0cd80a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_range" DROP CONSTRAINT "FK_8a5f87d02db45a0e675c2bf249f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_range" DROP CONSTRAINT "FK_1d515220b0c287af518d5b6d94e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_face" DROP CONSTRAINT "FK_61fe56326983d5acad08356db14"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_face" DROP CONSTRAINT "FK_c6907ca2a106dfdc02743aff1ba"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_body" DROP CONSTRAINT "FK_23ed4d4261d0e452193e466635d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_lower_body" DROP CONSTRAINT "FK_d75a8243dbdb17535e341dc7488"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_limb" DROP CONSTRAINT "FK_786248bb46201b82ef58bf67835"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_limb" DROP CONSTRAINT "FK_5115cc9c78e3fdc8da1ffe85a0d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_leg" DROP CONSTRAINT "FK_7d03a27b86d6bc7ec1dcf6ab6c5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_leg" DROP CONSTRAINT "FK_776f3bfd3aeab45f10e4206b1d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_front_body" DROP CONSTRAINT "FK_d5d6d696b5d4956ebd9de1baca9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_front_body" DROP CONSTRAINT "FK_3386fe60d375f0ee7aed1acaca6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_face_set" DROP CONSTRAINT "FK_6bfad9aa808f3140fa3f62a047a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_face_set" DROP CONSTRAINT "FK_f4986e7730ef6c5ea05bcdad623"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_body_set" DROP CONSTRAINT "FK_22ce9a8e9a1a5d7fb14e3170675"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_body_set" DROP CONSTRAINT "FK_b4add8cf3c669d0c241a2a3559c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_back_body" DROP CONSTRAINT "FK_46fab81f57daaa90955d2183036"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_back_body" DROP CONSTRAINT "FK_1c7bad64dadb361d8af101a94d5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_arm" DROP CONSTRAINT "FK_8cde12b62b2528a00d380714417"`,
    );
    await queryRunner.query(
      `ALTER TABLE "price_arm" DROP CONSTRAINT "FK_6f9455fecb8ca47502a06188814"`,
    );
    await queryRunner.query(
      `ALTER TABLE "machine" DROP CONSTRAINT "FK_43acd1f7cb7c024a9cdfc72882e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "machine" DROP CONSTRAINT "FK_cebb12f83e34a59e5fbaf939ad0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic_option" DROP CONSTRAINT "FK_9b8129f1e986894bce92f542416"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clinic_opening_hours" DROP CONSTRAINT "FK_2f7f851eff7ed2b27d6aca07b11"`,
    );
    await queryRunner.query(
      `ALTER TABLE "about_category" DROP CONSTRAINT "FK_61287c8e7e1d050bf4caea9237f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7693d4151c60aa7115c97a3104"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ac4bf2a2817fca32731fee0c15"`,
    );
    await queryRunner.query(`DROP TABLE "base_parts_parts"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_221dd1d87edf9a7911eaadab3c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3949cee95f2aaaf176a1d7f862"`,
    );
    await queryRunner.query(`DROP TABLE "clinics_machines"`);
    await queryRunner.query(`DROP TABLE "base_parts"`);
    await queryRunner.query(`DROP TABLE "price_all_body"`);
    await queryRunner.query(`DROP TABLE "clinic"`);
    await queryRunner.query(`DROP TABLE "price_vio_set"`);
    await queryRunner.query(`DROP TABLE "price_vio"`);
    await queryRunner.query(`DROP TABLE "price_upper_face"`);
    await queryRunner.query(`DROP TABLE "price_upper_body"`);
    await queryRunner.query(`DROP TABLE "price_time"`);
    await queryRunner.query(`DROP TABLE "price_select"`);
    await queryRunner.query(`DROP TABLE "price_range"`);
    await queryRunner.query(`DROP TABLE "price_lower_face"`);
    await queryRunner.query(`DROP TABLE "price_lower_body"`);
    await queryRunner.query(`DROP TABLE "price_limb"`);
    await queryRunner.query(`DROP TABLE "price_leg"`);
    await queryRunner.query(`DROP TABLE "price_front_body"`);
    await queryRunner.query(`DROP TABLE "price_face_set"`);
    await queryRunner.query(`DROP TABLE "price_body_set"`);
    await queryRunner.query(`DROP TABLE "price_back_body"`);
    await queryRunner.query(`DROP TABLE "price_arm"`);
    await queryRunner.query(`DROP TABLE "machine"`);
    await queryRunner.query(`DROP TABLE "machine_shr"`);
    await queryRunner.query(`DROP TABLE "machine_hr"`);
    await queryRunner.query(`DROP TABLE "clinic_option"`);
    await queryRunner.query(`DROP TABLE "clinic_opening_hours"`);
    await queryRunner.query(`DROP TABLE "clinic_group"`);
    await queryRunner.query(`DROP TABLE "clinic_area"`);
    await queryRunner.query(`DROP TABLE "parts"`);
    await queryRunner.query(`DROP TABLE "about_category"`);
    await queryRunner.query(`DROP TABLE "origin_category"`);
  }
}
