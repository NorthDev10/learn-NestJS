import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';

import { CreateUserDto } from '../../users/dto/create-user.dto';

import { Cat } from './cat.entity';
import { ENTITIES } from '../../constants';

@Entity(ENTITIES.USERS)
export class User extends BaseEntity {

  constructor(userDto?: CreateUserDto) {
    super();
    if (userDto) {
      this.name = userDto.name;
      this.age = userDto.age;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  @Column()
  age: number;

  @OneToMany(type => Cat, cat => cat.user, {
    cascade: true,
  })
  cats: Cat[];

  @Column("boolean", { default: true })
  active: boolean;
}
