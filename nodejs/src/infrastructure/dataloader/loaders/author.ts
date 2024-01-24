import { Op } from 'sequelize';

import { Models } from '../../../models';

export const batchAuthors = async (keys: readonly number[], models: Models) => {
  const authors = await models.Author.findAll({
    where: { id: { [Op.in]: keys } },
  });

  return keys.map(key => authors.find(author => author.id === key) || new Error(`No result for ${key}`));
};
