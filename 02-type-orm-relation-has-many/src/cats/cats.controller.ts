import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cats } from '../database/entities/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('createCatDto', createCatDto);
    
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cats[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cats> {
    return await this.catsService.findOne(id);
  }
}
