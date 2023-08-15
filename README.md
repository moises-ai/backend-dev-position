![Moises](https://studio.moises.ai/assets/images/moises-logo-white.svg)

# Backend developer application guide

## Build a GraphQL API: CRUD and Caching

Welcome to the guide for applying as a backend developer! In this document, you'll find instructions on how to build a GraphQL API with essential features like CRUD operations and caching.

### Prerequisites
* Node
* GraphQL (Apollo)
* Use docker and docker compose
* Feel free to use any database / cache management that you master
* Feel free to use any ORM or query builder

### Functional Prerequisites
* Begin by creating a query and mutation for the _User_ type, which should also contain _Instruments_ subtypes. Develop the corresponding resolvers for these fields as defined in the schema
  * type _Instruments_ can be an array of skills and instruments, e.g. _[{ instrument: 'guitar', skill: 10 }]_
  * And _User_ contain Instruments type, id, and email
* Define resolvers for the query and mutation fields specified in the schema
* Set up the server with Apollo Server
* Implement cache middleware in your resolvers to handle caching and cache invalidation
* Implement caching mechanisms to enhance performance. Cache user data upon queries and ensure the cache is invalidated when user updates occur.
* Document your work, and explain the setup process for launching your GraphQL API. Provide examples of sample queries and mutations involving users

### How to Share Your Work
When you're ready to share your completed application, follow these steps:

1. Fork and Commit: Fork this repository and commit your developed code to the new forked repository.
2. GitHub Repository: Push your forked repository to your GitHub account.
3. Share the Link: Once your code is on GitHub, share the repository link with us. This will enable us to review your application effectively.

