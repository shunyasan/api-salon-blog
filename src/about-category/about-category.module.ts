import { Module } from '@nestjs/common';
import { AboutCategoryService } from './about-category.service';
import { AboutCategoryController } from './about-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutCategoryRepository } from 'src/common/repository/aboutCategoryRepository';

@Module({
  imports: [TypeOrmModule.forFeature([AboutCategoryRepository])],
  providers: [AboutCategoryService],
  controllers: [AboutCategoryController],
})
export class AboutCategoryModule {}
