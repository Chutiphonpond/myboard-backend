<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Welcome to My Board!

This is a backend application built with [NestJS](https://nestjs.com/) that provides a REST API for managing authentication, posts, comments, and their types. The project is designed to be scalable, modular, and easy to extend.

---

## Features

- **Authentication**: User registration, login, and JWT-based authentication.
- **Post Management**: Add, edit, and delete posts.
- **Comment Management**: Add, edit, and delete comments associated with posts.
- **Type Management**: Assign types to posts for better categorization.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Chutiphonpond/myboard-backend.git
   cd myboard-backend
   ```

## Running the Application

To start the application in development mode:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Technologies Used

- Framework: NestJS
- Database: PostgreSQL
- Authentication: JSON Web Tokens (JWT)
- ORM: Prisma
- Validation: class-validator

## API Endpoints

### Authentication

- GET /users/me - Get me data.
- POST /auth/signup - Register a new user.
- POST /auth/signin - Authenticate a user and return a JWT token.

### Posts

GET /posts - Get all posts.
POST /posts - Create a new post (requires authentication).
PUT /posts/:id - Update a post (requires authentication).
DELETE /posts/:id - Delete a post (requires authentication).

### Comments

GET /comments - Get all comments.
GET /comments/posts/:id - Get a specific comment by ID.
POST /comments - Create a new comment (requires authentication).
PUT /comments/:id - Update a comment (requires authentication).
DELETE /comments/:id - Delete a comment (requires authentication).

### Types

POST /types - Create a new type (requires admin privileges).

## Note from the Developer

Apologies for not completing some API endpoints on time, but I’m working hard to improve and enhance myboard. I hope everyone enjoys using the platform and has a great experience! Thank you for your patience and support ❤️
