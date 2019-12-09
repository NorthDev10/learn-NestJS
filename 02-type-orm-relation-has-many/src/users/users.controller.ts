import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from '../database/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto) {
    await this.usersService.create(CreateUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.usersService.delete(id);
  }
}
