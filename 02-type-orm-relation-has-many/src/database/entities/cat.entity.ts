import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';

import { CreateCatDto } from '../../cats/dto/create-cat.dto';

import { User } from './user.entity';
import { Photo } from './photo.entity';
import { ENTITIES } from '../../constants';

@Entity(ENTITIES.CATS)
export class Cat extends BaseEntity {

  constructor(catDto?: CreateCatDto) {
    super();
    if (catDto) {
      this.name = catDto.name;
      this.breed = catDto.breed;
      this.age = catDto.age;
      this.userId = catDto.userId;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(type => User, user => user.cats)
  user: User;

  @OneToMany(type => Photo, photo => photo.cat)
  photos: Photo[];

  @Column({ length: 15 })
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
