import React from 'react';
import Link from 'next/link';
import { getServerAuthSession } from '~/server/auth';

export default async function UserButton() {
  const session = await getServerAuthSession();
  return (
    <button className='btn'>
      <Link href={session ? '/api/auth/signout' : '/api/auth/signin'}>
        {session ? 'Sign out' : 'Sign in'}
      </Link>
    </button>
  );
}

// {session && <span>Logged in as {session.user?.name}</span>}
// <Link
//   href={session ? '/api/auth/signout' : '/api/auth/signin'}
//   className='rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20'
// >
//   {session ? 'Sign out' : 'Sign in'}
// </Link>