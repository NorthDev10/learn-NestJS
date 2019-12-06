import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Cats } from './cats.entity';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  @Column()
  age: number;

  @OneToMany(type => Cats, cat => cat.userId)
  cats: Cats[];
}
