import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '0.0.0.0',
        port: 33062,
        username: 'root',
        password: 'secret',
        database: 'testnest',
      });
      sequelize.addModels([Cat, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
