# Tech-stacks used
- NextJs 
- React
- Typescript
- tailwind-css
- prisma
- postgresSQL
- express
- node-js
- edgestore
- next-auth
- recoil




## Getting Started

### Set-up the Environment variables.
1. Make a .env file in the same level as .env.example
2. Go through .env.example
3. In .env file copy all the fields from .env.example
4. In .env file give your own urls.

### Installing dependencies
1. Make dure to install all dependicies.
2. Run
```bash
npm install
```

### Connecting With Database
```bash
//migrate Database
npx prisma migrate dev --name [name_of_migration]

//generate prisma client
npx prisma generate
```


### Running the application
```bash
//In dev mode
npm run dev

## or

//In production mode
npm run build
npm run start
```

### Watching the application running.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.