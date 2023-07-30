import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('stream', 'root', '123', {// process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: 'localhost',// process.env.DB_HOST,
  dialect: 'mysql',
});

export { sequelize };
