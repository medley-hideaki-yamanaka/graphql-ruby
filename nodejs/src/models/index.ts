import { sequelize } from '../infrastructure/sequelize';
import Author from './author';
import Post from './post';

export { sequelize }

const models = {
  Author,
  Post,
};

export type Models = typeof models;

export default models;
