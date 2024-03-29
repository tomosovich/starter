# Hivemind Developer Productivity Tool for Teams

_Please note that this is under development and is not production ready yet_

### Loading This Project
1. Clone the repo
2. 
```bash
pnpm install
```
3. Setup new project on [Supabase](https://supabase.com)
4. Copy the `.env.local.example` file to `.env.local` and fill in the values
5. Get your IDs and Secrets from the OAuth providers you want to use and fill in the `.env.local` file
6. Update env.js to match the providers you want to use
```bash
npx prisma db push
```

### I've used the [T3 Stack](https://create.t3.gg/) as a start and built from there.
1. Added [supabase](https://supabase.com) for database functionality. 
2. Added GitHub OAuth for authentication as well as finish the config of Discord's


## Technologies Used
- [Next.js](https://nextjs.org) The base of the app
- [NextAuth.js](https://next-auth.js.org) Relatively easy to use authentication
- [Prisma](https://prisma.io) ORM to make database interactions easier
- [Tailwind CSS](https://tailwindcss.com) Easy Styling
- [tRPC](https://trpc.io) Easy API creation and keeping everything typesafe
- [Supabase](https://supabase.com) for database hosting
- [Vercel](https://vercel.com) for deployment


ToDo: 
- [ ] Add Google OAuth as this is a much more common provider
- [ ] Landing Page with Login/Logout