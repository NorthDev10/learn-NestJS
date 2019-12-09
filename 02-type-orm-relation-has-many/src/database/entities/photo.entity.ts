import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';

import { CreatePhotoDto } from '../../photo/dto/create-photo.dto';

import { Cat } from './cat.entity';

import { ENTITIES } from '../../constants';

@Entity(ENTITIES.PHOTOS)
export class Photo extends BaseEntity {


  constructor(photoDto?: CreatePhotoDto) {
    super();
    if (photoDto) {
      this.name = photoDto.name;
      this.description = photoDto.description;
      this.filename = photoDto.filename;
      this.views = photoDto.views;
      this.isPublished = photoDto.isPublished;
    }
  }


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
