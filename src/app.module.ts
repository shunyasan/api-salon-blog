import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicModule } from './clinic/clinic.module';
import { PartsController } from './parts/parts.controller';
import { PartsModule } from './parts/parts.module';
import { MachineService } from './machine/machine.service';
import { MachineModule } from './machine/machine.module';
import { PriceModule } from './price/price.module';
import { PriceService } from './price/price.service';
import { PriceController } from './price/price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    ClinicModule,
    PartsModule,
    MachineModule,
    PriceModule,
  ],
  controllers: [AppController, PartsController, PriceController],
  providers: [AppService, MachineService, PriceService],
})
export class AppModule {}
