import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginCategoryRepository } from '../common/repository/originCategoryRepository';
import { IdAndNameController } from './id-and-name.controller';
import { IdAndNameService } from './id-and-name.service';

@Module({
  imports: [TypeOrmModule.forFeature([OriginCategoryRepository])],
  providers: [IdAndNameService],
  controllers: [IdAndNameController],
})
export class IdAndNameModule {}
