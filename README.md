# Visit Card API

GraphQL API for a digital visit card. Stack: **TypeScript**, **Node.js**, **NestJS**, **Prisma**, **GraphQL**, **Docker**, **Git**. Scaffolded with **Claude Code**.

## Architecture

- NestJS + `@nestjs/graphql` (code-first, decorators)
- Prisma → PostgreSQL
- `MeResolver` queries: `me`, `skills`, `projects`, `contacts`, `experiences`
- Content stored in PostgreSQL (Profile and related tables)

## Quick start (Docker)

```bash
docker compose up --build
```

- GraphQL Playground: http://localhost:3000/graphql
- Postgres: `localhost:5432` (user/pass/db: `visitcard`)

Example query:

```graphql
query {
  me {
    fullName
    title
    headline
    bio
    location
    education
    githubUrl
  }
  skills { name category }
  projects { title role company description highlights stack }
  contacts { type label value href }
}
```

## Local development (without Docker for API)

1. Start only DB: `docker compose up db -d`
2. `cp .env.example .env`
3. `npm install`
4. `npx prisma db push` (схема уже применена в вашей БД — шаг опционален)
5. Fill Profile / related tables in the database (DBeaver or SQL)
6. `npm run start:dev`

## Prisma models

`Profile`, `Skill`, `Project`, `Contact`, `Experience` — see `prisma/schema.prisma`. Content lives in PostgreSQL.

## Claude Code

See [CLAUDE.md](./CLAUDE.md).
