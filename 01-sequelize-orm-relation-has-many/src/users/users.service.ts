import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Cat } from '../cats/cat.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;

    return await user.save();
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>({
      include: [{
        model: Cat, 
      }],
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne<User>({
      where: { id },
      include: [{
        model: Cat, 
      }],
    });
  }
}
