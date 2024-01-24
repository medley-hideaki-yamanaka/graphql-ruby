import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('mysql://root:password@db:3306/graphql') 
