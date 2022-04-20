import { Module } from '@nestjs/common';
import { ClinicModule } from './clinic/clinic.module';
import { MachineModule } from './machine/machine.module';
import { PriceModule } from './price/price.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutCategoryModule } from './about-category/about-category.module';
import { BasePartsModule } from './base-parts/base-parts.module';
import { OriginCategoryModule } from './origin-category/origin-category.module';
import { ClinicAreaController } from './clinic-area/clinic-area.controller';
import { ClinicAreaModule } from './clinic-area/clinic-area.module';
import { FeatureModule } from './feature/feature.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    ClinicModule,
    MachineModule,
    PriceModule,
    AboutCategoryModule,
    BasePartsModule,
    OriginCategoryModule,
    ClinicAreaModule,
    FeatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
