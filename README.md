# Challenge

[Frontend](https://clone-coffee-challenge.vercel.app)
[Backend](https://coffee-backend-2.onrender.comes)

## Endpoints available:

# GET

```bash
curl --location --request GET 'https://coffee-backend-2.onrender.com/coffee'
```

To search by name:

```bash
curl --location --request GET 'https://coffee-backend-2.onrender.com/coffee?name=BrenoIsAGoodHire'
```

To search by coffee type(Arabic or Robusta):

```bash
curl --location --request GET 'https://coffee-backend-2.onrender.com/coffee?type=Hired'
```

# POST

```bash
curl --location --request POST 'https://coffee-backend-2.onrender.comes/coffee' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "Capuccino",
"description": "Great coffee",
"price": 12,
"type": "Arabic",
"image": "https://url.com"
}'
```

### Installation

To run the backend:

```bash
cd backend && make dev
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

We're thrilled that you've made it to our MVST coding challenge! We are rooting for your success and hope to meet you in the challenge review! 🚀 If you have anything that we can help you with, just open an issue in the Github repo that was provided to you.

## How to get started

To get started with the challenge, first read this README carefully. Then you can go on and
read the READMEs inside the frontend and backend folders.

[Backend README](https://github.com/mvst-h/mvst-coffee-tea-challenge-new/blob/master/backend/README.md)

[Frontend README](https://github.com/mvst-h/mvst-coffee-tea-challenge-new/blob/master/frontend/README.md)

## Introduction

This code challenge is a project that already contains a very basic backend and frontend structure.

The backend and frontend are not connected at the beginning of the challenge.

Your task will be to implement some requirements using this repository, but you ultimately own the code. Don't feel like you need to stick to the structure provided, so feel free to refactor, readjust and improve it. Also, update this README if you want to describe your tech stack, give us instructions on how to run it, etc.

## Task Description

---

### Task 1 - Check the design

Our designers have provided us a Figma file:
https://www.figma.com/file/C4n0EqxCqKuu6Or4okx7qO/Coding-Challenge-2.0

They expect us to build a fullstack web app that accurately follows their UI/UX requirements.

### Task 2 - Coffee list :coffee:

After running the frontend. You will see a list of items at "localhost:3000". This list is currently static on the frontend. The first task is to setup a database and connect the backend and the frontend to properly render the list with the data coming from the backend.

### Task 3 - Adding a :coffee:

Following the design, create a new page and place a form to add a new coffee.
You should be able to add a new coffee using the same structure/type (id, name, description, type, price and image url).
Don't worry about uploading the image, get a URL from Google, an image repository, or serve it as a static asset. You can prefill the image url input and set it to readonly if you like. However, the field needs to be submitted to the backend.

**⚠️ IMPORTANT ⚠️**

Before adding a new Coffee, you should validate if an existing record with the same `name` already exists.
