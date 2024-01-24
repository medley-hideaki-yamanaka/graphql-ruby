import { IResolvers } from 'apollo-server-express';
import Author from './models/author';
import { ResolverContext } from './typings';
import models from './models'

export const resolvers: IResolvers<Author, ResolverContext> = {
  Query: {
    authors: async (parent, args) => await models.Author.findAll(),
  },

  Author: {
    posts: async (author, args) => 
      models.Post.findAll({
        where: { author_id: author.id }
      })
  }
}
