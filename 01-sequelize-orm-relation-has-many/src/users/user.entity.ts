import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.CHAR(15),
    allowNull: false
  })
  name: string;

  @Column
  age: number;

  @HasMany(() => Cat, 'userId')
  cats: Cat[];
}
