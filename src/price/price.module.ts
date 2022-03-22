import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceAllBody } from 'src/common/entities/price_all_body';
import { PriceArm } from 'src/common/entities/price_arm';
import { PriceBackBody } from 'src/common/entities/price_back_body';
import { PriceBodySet } from 'src/common/entities/price_body_set';
import { PriceFaceSet } from 'src/common/entities/price_face_set';
import { PriceFrontBody } from 'src/common/entities/price_front_body';
import { PriceLeg } from 'src/common/entities/price_leg';
import { PriceLimb } from 'src/common/entities/price_limb';
import { PriceLowerBody } from 'src/common/entities/price_lower_body';
import { PriceLowerFace } from 'src/common/entities/price_lower_face';
import { PriceRange } from 'src/common/entities/price_range';
import { PriceSelect } from 'src/common/entities/price_select';
import { PriceTime } from 'src/common/entities/price_time';
import { PriceUpperBody } from 'src/common/entities/price_upper_body';
import { PriceUpperFace } from 'src/common/entities/price_upper_face';
import { PriceVio } from 'src/common/entities/price_vio';
import { PriceVioSet } from 'src/common/entities/price_vio_set';
import { AboutCategoryRepository } from 'src/common/repository/aboutCategoryRepository';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PriceAllBody,
      PriceArm,
      PriceBackBody,
      PriceBodySet,
      PriceFaceSet,
      PriceFrontBody,
      PriceLeg,
      PriceLimb,
      PriceLowerBody,
      PriceLowerFace,
      PriceRange,
      PriceSelect,
      PriceTime,
      PriceUpperBody,
      PriceUpperFace,
      PriceVioSet,
      PriceVio,
      AboutCategoryRepository,
    ]),
  ],
  providers: [PriceService],
  controllers: [PriceController],
})
export class PriceModule {}
