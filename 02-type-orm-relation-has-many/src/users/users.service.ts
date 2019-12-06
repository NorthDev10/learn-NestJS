import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../database/entities/users.entity';
//import { Cat } from '../cats/cat.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const user = new Users();
    user.name = createUserDto.name;
    user.age = createUserDto.age;

    return await user.save();
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return await this.usersRepository.findOne(id);
  }
}
