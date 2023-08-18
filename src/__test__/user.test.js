import request from 'supertest';
import { expect } from 'chai';
import { app } from '../../server.mjs';

describe('GraphQL API', () => {
  it('should create a user via the createUser mutation', async () => {
    const mutation = `
      mutation {
        createUser(name: "Test User", email: "test@example.com") {
          id
          name
          email
        }
      }
    `;

    const response = await request(app)
      .post('/graphql') 
      .send({ query: mutation })
      .set('Content-Type', 'application/json');

    const { data } = response.body;
    expect(data.createUser).to.have.property('id').that.is.a('string');
    expect(data.createUser.name).to.equal('Test User');
    expect(data.createUser.email).to.equal('test@example.com');
  });
});