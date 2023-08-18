import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';
import resolvers from './src/resolvers.js';
import knex from 'knex';
import knexConfig from './knexfile.js';
import dotenv from 'dotenv';
dotenv.config();
const typeDefs = readFileSync('./schema/schema.graphql', 'utf8');

export const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();

  const db = knex(knexConfig[process.env.NODE_ENV]);

  db.migrate.latest();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/graphql`);
  });
}

startServer();
