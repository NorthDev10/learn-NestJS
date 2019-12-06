import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { User } from './user.entity';
import { Photo } from './photo.entity';
import { ENTITIES } from '../../constants';

@Entity(ENTITIES.CATS)
export class Cat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
