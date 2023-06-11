# next-js-test
Testing some next-js + react with typescript?

## How to:

```bash
npm run dev
```

## Todo:

- [x] Create new prject
- [x] Create fist static site with content from Starwars API (https://swapi.dev/api/people/1/)
- [x] Create postgres database with prisma and tablename=starwars (Small guide - https://vercel.com/guides/nextjs-prisma-postgres) 
- [x] Create static content in mysql database (to show on a page when we connect to database<br>
```bash
npx prisma studio
```
- [ ] Connect to mysql/postgres database and show content on page (Connect to existing mysql database: https://www.prisma.io/docs/concepts/database-connectors/mysql, https://www.youtube.com/watch?v=CQcaeIhVB8c)
- [ ] Create route to add to mysql (name)
- [ ] Create route to PUT/change mysql (name) 
- [ ] Create route to delete (name)

Done

### *Extra*

- [ ] Backend with FastAPI


### Prixma

```bash
npx prisma init
```
```bash
npx prisma generate
```
```bash
npx prisma migrate dev
```