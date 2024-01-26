import { Op } from 'sequelize';

import { Models } from '../../../models';

export const batchAuthors = async (keys: readonly number[], models: Models) => {
  const posts = await models.Post.findAll({
    where: { author_id: { [Op.in]: keys } },
  });

  return keys.map(key => posts.find(post => post.author_id === key) || new Error(`No result for ${key}`));
};
