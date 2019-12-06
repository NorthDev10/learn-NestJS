import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Users } from './database/entities/users.entity';
import { Photo } from './database/entities/photo.entity';
import { Cats } from './database/entities/cats.entity';

import { PhotoModule } from './photo/photo.module';
import { UserModule } from './users/users.module';
import { CatModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 33062,
      username: 'root',
      password: 'secret',
      database: 'testnest',
      entities: [Users, Photo, Cats],
      synchronize: true,
    }),
    PhotoModule,
    UserModule,
    CatModule
  ],
})
export class AppModule {}
