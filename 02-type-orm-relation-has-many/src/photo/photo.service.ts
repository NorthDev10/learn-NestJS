import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../database/entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const photo = new Photo();
    photo.name = createPhotoDto.name;
    photo.description = createPhotoDto.description;
    photo.filename = createPhotoDto.filename;
    photo.views = createPhotoDto.views;
    photo.isPublished = createPhotoDto.isPublished;

    return await photo.save();
  }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
}
