import { Sequelize } from "sequelize";

export const employeeConnection = async () => {
    const sequelize = new Sequelize('clean_architeture', 'kevin', '12345', {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

    







