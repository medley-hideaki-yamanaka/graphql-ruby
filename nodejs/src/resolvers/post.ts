import Post from '../models/post';
import { IResolvers } from 'apollo-server-express';
import { ResolverContext } from '../typings';
import models from '../models'

const resolvers: IResolvers<Post, ResolverContext> = {
    Query: {
      posts: async (parent, args) => await models.Post.findAll(),
    },
  
    Post: {
      author: async (post, args, {loaders}) => await loaders.post.load(post.author_id)
    }
  };

  export default resolvers;
  