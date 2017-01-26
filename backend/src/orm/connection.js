import { Sequelize } from 'sequelize';

export default new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: `${__dirname}/database.sqlite`,
});
