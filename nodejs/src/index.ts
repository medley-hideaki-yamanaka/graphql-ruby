import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolver'
import models, { sequelize } from './models';
import http from 'http';
import DataLoader from 'dataloader';
import loaders from './infrastructure/dataloader/loaders';
import Author from './models/author'

const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) return { models };

    // if (req) {
    //   return {
    //     models,
    //     loaders: {
    //       user: new DataLoader<number, Author>(keys => loaders.author.batchAuthors(keys, models)),
    //     },
    //   };
    // }
},
});

await server.start();
server.applyMiddleware({ app, path: '/graphql' });


const httpServer = http.createServer(app);

httpServer.listen({ port: 4000 }, () => {
  console.log(`Apollo Server on http://localhost:4000/graphql`);
});
