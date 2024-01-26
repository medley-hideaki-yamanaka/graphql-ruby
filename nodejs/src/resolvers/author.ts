import Author from '../models/author';
import { IResolvers } from 'apollo-server-express';
import { ResolverContext } from '../typings';
import models from '../models'

const resolvers: IResolvers<Author, ResolverContext> = {
    Query: {
      authors: async (parent, args) => await models.Author.findAll(),
    },
  
    Author: {
      posts: async (author, args, {loaders}) => await loaders.author.load(author.id)
    },
  };

  export default resolvers;
  