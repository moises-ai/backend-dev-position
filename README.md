![Moises](https://studio.moises.ai/assets/images/moises-logo-white.svg)

# Backend developer application guide

## Creating a GraphQL API: CRUD, Authentication, and Caching

Welcome to the guide for applying as a backend developer! In this document, you'll find instructions on how to build a GraphQL API with essential features like CRUD operations, authentication middleware, and caching.

### Prerequisites
* Node
* GraphQL (Apollo)
* Use docker and docker compose
* Feel free to use any database / cache management that you master
* Feel free to use any ORM or query builder

### Functional Prerequisites
* Begin by creating a query and mutation for the _User_ type, which should also encompass _Goals, Instruments, and Preferences_ subtypes. Develop the corresponding resolvers for these fields as defined in the schema
  * type _Goals_ can be an array of strings, eg. ['practice', 'teach', 'learn']
  * type _Instruments_ can be an array of skill and inwtruments, eg. [{ instrument: 'guitar', skill: 10 }]
  * type _Preferences_ can be object, eg. { pinnedPlaylists: ['<uuid>'], pushNotification: true }
  * And _User_ contains all this type above and id and email
* Define resolvers for the query and mutation fields specified in the schema
* Implement a middleware function responsible for verifying the validity of authentication tokens present in the request headers
* Set up the server with the necessary middleware components, including the GraphQL endpoint
* Integrate your schema, resolvers, and authentication middleware with Apollo Server
* Implement caching mechanisms to enhance performance. Cache user data upon queries and ensure the cache is invalidated when user updates occur.
* Implement cache middleware in your resolvers to handle caching and cache invalidation.
* Document your work in detail within the README.md file. Explain the setup process for launching your GraphQL API. Provide illustrative examples of sample queries and mutations involving users
* Elaborate on your caching strategy and how it improves query performance.

### How to Share Your Work
When you're ready to share your completed application, follow these steps:

1. Fork and Commit: Fork this repository and commit your developed code to the new forked repository.
2. GitHub Repository: Push your forked repository to your GitHub account.
3. Share the Link: Once your code is on GitHub, share the repository link with us. This will enable us to review your application effectively.

