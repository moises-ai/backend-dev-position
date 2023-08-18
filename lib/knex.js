import knex from 'knex';

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});

export default knexInstance;