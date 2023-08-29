# Coffee and Tee List - MVST challenge Backend

## Scripts

The following scripts are here to help you get up and running in a development environment as quickly as possible.

### Installation

To run the backend:

```bash
cd backend && make dev
```

Run the migrations

```bash
npm run migration:run
```

Run the seeds

```bash
npm run seeds:run
```

To run the backend tests:

```bash
cd backend && make test
```

To run the frontend:

```bash
cd frontend && yarn dev
```

To run the frontend tests

```bash
cd frontend && yarn tests
```

### Technical decisions - Frontend

As may notice, i downgraded the `NextJS` version to 12 mainly because im not to the `server components RFC` and it started breaking some libraries that i wanted to use and that are currently support by Next 13 even tho im still using React 18 but only react doenst break most library but Next 13 do.
I choose to use `tailwind` and some components from radix-ui to style the app mainly because i really enjoy the speed, flexibility and maintanibility that tailwind provides and specially it can be really easy to customize to my own needs and add plugins or libraries that can give it superpowers to make reusuable styles with variants like CVA does and i choose Radix UI components because the DX is amazing, it has some really cool built-in features that remove some unnecessary overhead and unnecessary implentation, who wants to create a modal for each app, specially a accessible one? its really hard to get all the edges cases and radix does it for you and comes unstyled so its easy to add your design system and compose the components as you like.
For caching i mainly used `React query` just because i love how it abstracts the main edge cases for promise handling and it works really well to handle and cache api routes and handle the loading, success and error cases easily.
For forms i used `react hook form` because its API is simple and pretty straightforward, works well with `zod` schemas so i can create a bullet proof validation for forms and easily expand it and reuse in other parts of the application, just like a could reuse it to validate the api responses.
And typescript because i love it and cant live without it.

### Technical decisions - Backend

Its been a really long time since i used NestJS, probably two years and i love the flexibility i can give to create a scalable and composable application, i can easily create my modules independent from the framework and later use it to wire everything up just like lego puzzles and thats my point of the architecture that i used, im using hexagonal architecture principles to create my modules independent and testable and plug and play with them, i like to create my plain objects without frameworks attached and for this one i attached with TypeORM anotations mainly because its just metadata and it doenst affect the use of my domain and its not like i have to boostrap the framework to continue using it, it works really without the framework.
I also used CQRS principles to my application module mainly because i like to make my domain to only care about the writes and have a read side which in most application and specially for this one will be the most used one and it should grow separatly and in terms of scalability usually the writes have way less transactions then the read side and while the write side can still do complex queries and transactions on the read we can have a denormalized data without joins and have a performant way to query data. In terms of consistency most of the time the read side will be consistent with the write side and just like we use react query on the front end and can easily fix the edge cases with optimist ui and some revalidations on the background.
This whole backend is just an overengineering app mainly because i want to showcase my skills but if the scope of the project was this small and it was a real world scenario
would just have it as some endpoints in NextJS or a small mvc, my whole domain could be easily replace with some `zod` schema if scalability wasnt a concern.
About the TypeORM, its been a while since i didnt used a js orm so im outdated and need to study the new ones so i choose it because i wanted a ORM with data mapper and repository pattern which i think works really well with this architecture and this was the only one that i know and didnt had much time to research them.

### What i would improve

Deploy it, i left some machines running on railway and fly.io so i dont have any credits anymore so i just left this part out of the project mainly because it would take more time to reasearch other ones or create new emails and accounts to get this up and running i already have the docker image so it would be really easy to do it, even tho this docker image is not optimized for productionm, keep this in mind in the whole node image on dev and for production we should use some alpine image for size and simplicity.
