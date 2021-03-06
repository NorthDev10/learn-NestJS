import { Controller, Get, Post, Body, Param, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import NotFoundInterceptor from '../Interceptors/NotFoundInterceptor';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../database/entities/cat.entity';

@ApiTags('cats')
@UseInterceptors(NotFoundInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    return await this.catsService.findOne(id);
  }
}
