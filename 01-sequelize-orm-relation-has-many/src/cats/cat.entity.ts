import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Cat extends Model<Cat> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @Column({
    type: DataType.CHAR(15),
    allowNull: false
  })
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
