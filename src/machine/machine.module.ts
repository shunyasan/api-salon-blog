import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineRepository } from '../common/repository/machineRepository';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

@Module({
  imports: [TypeOrmModule.forFeature([MachineRepository])],
  controllers: [MachineController],
  providers: [MachineService],
  exports: [MachineService],
})
export class MachineModule {}
