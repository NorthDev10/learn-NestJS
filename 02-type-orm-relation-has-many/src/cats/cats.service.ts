import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from '../database/entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    cat.age = createCatDto.age;

    return await cat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find({ relations: ['user', 'photos'] });
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catsRepository.findOne(id, { relations: ['user', 'photos'] });
  }
}
