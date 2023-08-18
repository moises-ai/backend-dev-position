![Moises](https://studio.moises.ai/assets/images/moises-logo-white.svg)

# Backend developer application guide

## Build a GraphQL API: CRUD and Caching

Welcome to the guide for applying as a backend developer! In this document, you'll find instructions on how to build a GraphQL API with essential features like CRUD operations and caching.

### Get started

Run 
```sh 
npm i
docker compose up
```

### Prerequisites

- Use knex to query builder
- Use **Redis** for caching (add to docker-compose)
- Use Apollo sandbox to run queries (leave queries organized so maybe we can run them live)

### Functional Prerequisites

1. We expect all resolvers to be implemented (use pre-defined types on **schema.graphql** to guide)
    - Define resolvers to query for user (sorted playlists by name)
    - Define resolvers to query for songs (sorted by name)
    - Define resolvers to query for playlists (sorted by name)
    - Define mutation to add/remove song
    - Define mutation to add/remove playlist
    - Define mutation to add/remove song from playlist
    - Define mutation to add/remove playlist from user
    
2. Implement a **Cache-Aside strategy**
   * Lazy Loading: The query User should be fully cached through Lazy Loading (Implement availability with _cache hit_ and _cache miss_)
      - Ensure the cache invalidation when changes occur in user email only
      - E.g., query User
        
      ```
      query Query($userId: ID!) {
        user(id: $userId) {
          id
          email
          name
          playlists {
            id
            name
            songs {
              id
              name
            }
          }
          songs {
            id
            name
          }
        }
      }
      ```

   * Write Through - reverse the order of how the cache is populated (only after lazy loading)
      + Should change the cache first and then the Postgres, apply on the following mutations:
          - add / remove songs for a user
          - add / remove playlists for a user
      + Keep cache lists sorted
      
3. PLUS: Write integration tests


### How to Share Your Work
When you're ready to share your completed application, follow these steps:

1. Fork and Commit: Fork this repository and commit your developed code to the new forked repository.
2. GitHub Repository: Push your forked repository to your GitHub account.
3. Share the Link: Once your code is on GitHub, share the repository link with us. This will enable us to review your application effectively.

