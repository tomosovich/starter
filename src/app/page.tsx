import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';

import { CreatePost } from '~/app/_components/create-post';
import { getServerAuthSession } from '~/server/auth';
import { api } from '~/trpc/server';

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: 'from tRPC' });
  const session = await getServerAuthSession();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-background text-foreground dark:bg-background dark:text-foreground'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[5rem]'>
          Hive <span className='text-[hsl(280,100%,70%)]'>Mind</span> App
        </h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
          <Link
            className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20'
            href='https://create.t3.gg/en/usage/first-steps'
            target='_blank'
          >
            <h3 className='text-2xl font-bold'>Team Collaboration →</h3>
            <div className='text-lg'>
              Everything you need to collaborate with your team in one place.
            </div>
          </Link>
          <Link
            className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20'
            href='https://create.t3.gg/en/introduction'
            target='_blank'
          >
            <h3 className='text-2xl font-bold'>Documentation →</h3>
            <div className='text-lg'>
              Learn more about Hive Mind and how to connect all of your data
              sources.
            </div>
          </Link>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-2xl text-white'>
            {hello ? hello.greeting : 'Loading tRPC query...'}
          </p>

          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center text-2xl text-white'>
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? '/api/auth/signout' : '/api/auth/signin'}
              className='rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20'
            >
              {session ? 'Sign out' : 'Sign in'}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className='w-full max-w-xs'>
      {latestPost ? (
        <p className='truncate'>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}