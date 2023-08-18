import userOperations from '../data/user.mjs';

const resolvers = {
  Query: {
    user: async (parent, { id }) => {
      return await userOperations.getUserById(id);
    },
  },
  Mutation: {
    createUser: async (parent, { name, email }) => {
      return await userOperations.createUser(name, email);
    },
  },
};

export default resolvers;
