import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePhotoDto } from './dto/create-photo.dto';
import { PhotoService } from './photo.service';
import { Photo } from '../database/entities/photo.entity';

@ApiTags('photo')
@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) { }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    await this.photoService.create(createPhotoDto);
  }
}
