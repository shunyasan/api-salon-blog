import {
  Controller,
  Get,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { IdAndNameService } from './id-and-name.service';

@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('id-and-name')
@Controller('id-and-name')
export class IdAndNameController {
  constructor(private readonly idAndNameService: IdAndNameService) {}

  @Get('origin-category')
  @ApiOperation({
    operationId: 'getAllOriginCategory',
    summary: 'OriginCategoryを全件取得',
    description: 'OriginCategoryを全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: IdAndNameDto,
  })
  async getAllOriginCategory(): Promise<IdAndNameDto[]> {
    return this.idAndNameService.getAllOriginCategory();
  }
}
