import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(type => Users, user => user.id)
  user: Users;

  @Column({ length: 15 })
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
