import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Users } from '../database/entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto) {
    console.log('CreateUserDto', CreateUserDto);
    
    await this.usersService.create(CreateUserDto);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Users> {
    return await this.usersService.findOne(id);
  }
}
