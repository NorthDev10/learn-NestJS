import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { Cat } from '../database/entities/cat.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User(createUserDto);

    if (createUserDto.cats && createUserDto.cats.length) {
      user.cats = createUserDto.cats.map(userCat => new Cat(userCat));
    }

    return await user.save();
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    await this.usersRepository.update(id, updateUserDto);
    return await this.usersRepository.findOne(id);
  }

  async delete(id: number): Promise<Boolean> {
    await this.usersRepository.update(id, { active: false });
    return true;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({ relations: ['cats', 'cats.photos'] });
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id, { relations: ['cats', 'cats.photos'] });
  }
}
