import { Module } from '@nestjs/common';
import { OriginCategoryService } from './origin-category.service';
import { OriginCategoryController } from './origin-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginCategoryRepository } from 'src/common/repository/originCategoryRepository';

@Module({
  imports: [TypeOrmModule.forFeature([OriginCategoryRepository])],
  providers: [OriginCategoryService],
  controllers: [OriginCategoryController],
})
export class OriginCategoryModule {}
