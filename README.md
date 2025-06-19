for prisma setup:
- npm install prisma @prisma/client
- npx prisma init (It will create prisma/schema.prisma file)
- Next steps: (extra info)
1. Run `prisma dev` to start a local Prisma Postgres server.
2. Define models in the `schema.prisma` file.
3. Run `prisma migrate dev` to migrate your local Prisma Postgres database.
4. Tip: Explore how you can extend the `ORM` with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm


- now start writing the models in prisma/schema.prisma
- npx prisma migrate dev --name init (It will create migrations folder in prisma folder)
- npx prisma generate (It will create generated/prisma file in app folder)