# MVST Challenge

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

### What i would improve

Deploy it, i left some machines running on railway and fly.io so i dont have any credits anymore so i just left this part out of the project mainly because it would take more time to reasearch other ones or create new emails and accounts to get this up and running i already have the docker image so it would be really easy to do it, even tho this docker image is not optimized for productionm, keep this in mind in the whole node image on dev and for production we should use some alpine image for size and simplicity.

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

### Finishing the task

1. Create a Pull Request with the coding challenge.
2. Tell MVST HR Team that you are done with it
3. That is it :)

### ⚠️ Rules

1. The codebase provided is there to reduce some decision fatigue so you can focus on the coding. Please keep in mind that the decisions of folder structure, backend layers, architecture and other decisions have to be your own (‼️).
2. Feel free to add any additional JS libraries and tell us in the README file why you chose them.
3. The frontend has to be built with React. Next.js is there to help you have a quick start and focus on the coding. You can replace it with React Vite or similar if you feel like it would be faster.
4. The data MUST be persisted in a database.
5. We love NestJS so we provided some basic backend boilerplate, but it is your choice to use it. You are free to use Next.js as a fullstack framework.
6. Provide a seeding mechanism to populate your DB.
7. Match the design in the Figma file.
8. If you don't feel comfortable using the `app` folder introduced in Next.js 13, you are allowed to use the `page` folder.

### 🔍 What we will check

To be transparent, these are some things we consider important in the challenge:

1. The final outcome. The challenge is completed if the list of items is rendered on the frontend while fetching data from a backend server and we can add items to the list through the form.
2. General skills of programming. Besides checking the outcome of your running project, we will check your code for the following: readability, organization, robustness, layering, reusability, and extensibility.
3. Application of best practices and design patterns.
4. The outcome in comparison with the design.

### Extra Points

So you are finished and feel like showing us some more? Here are a few things that we'd love to see:

1. Testing. Your choice of what to test and how.
2. Add some CSS animations or use Framer Motion
3. If you haven't already, make the frontend SEO friendly
4. Deploy your application

## FAQ

---

- I am not familiar with Next.js and NestJS

  We don't expect you to know all the internals of these frameworks. What we do care about is the quality and the outcome of what you created. For the frontend, focus more on developing a good React application rather than the bells and whistles of Next.js. For the backend part, focus more on qualitative aspects like clean code and architecture and not NestJS specifics. The same applies if you choose to use Next.js as a fullstack framework.

- I don't want to use tailwind

  Feel free to use pure CSS (we love it), styled-components, CSS preprocessors like SASS or any other library that you are comfortable with. Just don't cheat and use a full-on component library like MaterialUI or Bootstrap 😉 We need to know your CSS skills!

- The starter code won't start

  Check that you are using the correct node versions. We have provided an `.nvmrc` file so you can set it to Node 18 if you are using `nvm`. Also, make sure that you have docker installed if you want to use the DB starter script provided by us.

- Some project dependencies are out of date. Can I update them?

  Absolutely! Also ping us and let us know about this.

## Feedback

---

### What would you improve if given more time?

Please fill

### How was your experience doing this challenge?

Please fill

---

Thanks and have a great challenge! 🔥

MVST Team
