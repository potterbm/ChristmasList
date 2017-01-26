import { Sequelize } from 'sequelize';

import connection from './connection';

export const Users = connection.define('User',
    {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        nickName: Sequelize.STRING,
    },
    {
        timestamps: true,
    }
);

export const Ideas = connection.define('Idea',
    {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
    }
);

Ideas.belongsTo(Users, { as: 'ideaFor' });
Ideas.belongsTo(Users, { as: 'ideaBy' });
Ideas.belongsTo(Users, { as: 'claimedBy' });

connection.sync({ force: true }).then(async () => {
    const andy = await Users.create({
        firstName: 'Andrew',
        lastName: 'Potter',
        nickName: 'Andy'
    });

    const bryan = await Users.create({
        firstName: 'Bryan',
        lastName: 'Potter',
        nickName: 'Bry'
    });

    const dad = await Users.create({
        firstName: 'Bruce',
        lastName: 'Potter',
        nickName: 'Dad'
    });

    const meaghan = await Users.create({
        firstName: 'Meaghan',
        lastName: 'Potter',
        nickName: 'Megs'
    });

    await Promise.all([
        Ideas.create({
            name: 'New Shoes',
            description: 'He really needs them',
            ideaForId: dad.id,
            ideaById: bryan.id,
            claimedById: andy.id
        }),
        Ideas.create({
            name: 'Puppy Pal for Kai',
            description: 'Kai could use a friend!',
            ideaForId: andy.id,
            ideaById: meaghan.id,
        }),
    ]);
});
