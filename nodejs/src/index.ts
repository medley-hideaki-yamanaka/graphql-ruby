import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema';
import { resolvers } from './resolver'
import models from './models'

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () => {
  console.log('Apollo Server on http://localhost:4000/graphql');
});

export default server;
