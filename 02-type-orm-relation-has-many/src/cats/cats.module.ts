import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from '../database/entities/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatModule {}
