import models from './models'

export const resolvers = {
  Query: {
    authors: async () => await models.Author.findAll({ include: { model: models.Post, required: true, as: 'posts' } }),
    posts: async () => await models.Post.findAll(),
  }
}
