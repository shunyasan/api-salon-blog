import { Module } from '@nestjs/common';
import { BasePartsService } from './base-parts.service';
import { BasePartsController } from './base-parts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasePartsRepository } from 'src/common/repository/basePartsRepository';

@Module({
  imports: [TypeOrmModule.forFeature([BasePartsRepository])],
  providers: [BasePartsService],
  controllers: [BasePartsController],
})
export class BasePartsModule {}
