import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from '../database/entities/cats.entity';
//import { Users } from '../database/entities/user.entity';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private readonly catsRepository: Repository<Cats>,
  ) { }

  async create(createCatDto: CreateCatDto): Promise<Cats> {
    const cat = new Cats();
    cat.name = createCatDto.name;
    cat.breed = createCatDto.breed;
    cat.age = createCatDto.age;

    return await cat.save();
  }

  async findAll(): Promise<Cats[]> {
    return await this.catsRepository.find();
  }

  async findOne(id: number): Promise<Cats> {
    return await this.catsRepository.findOne();
  }
}
