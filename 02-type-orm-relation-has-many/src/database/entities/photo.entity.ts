import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Cat } from './cat.entity';

import { ENTITIES } from '../../constants';

@Entity(ENTITIES.PHOTOS)
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Cat, cat => cat.user)
  cat: Cat;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
