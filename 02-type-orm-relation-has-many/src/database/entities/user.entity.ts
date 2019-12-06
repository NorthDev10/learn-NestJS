import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Cat } from './cat.entity';
import { ENTITIES } from '../../constants';

@Entity(ENTITIES.USERS)
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  @Column()
  age: number;

  @OneToMany(type => Cat, cat => cat.user)
  cats: Cat[];
}
