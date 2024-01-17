import React from 'react';
import Link from 'next/link';
import { getServerAuthSession } from '~/server/auth';

export default async function UserButton() {
  const session = await getServerAuthSession();
  return (
    <Link
      className='flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 md:my-6 md:border-s md:border-gray-300 md:ps-6'
      href={session ? '/api/auth/signout' : '/api/auth/signin'}
    >
      <svg
        className='h-4 w-4 flex-shrink-0'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
        <circle cx='12' cy='7' r='4' />
      </svg>
      {session ? 'Sign out' : 'Sign in'}
    </Link>
  );
}

// {session && <span>Logged in as {session.user?.name}</span>}
// <Link
//   href={session ? '/api/auth/signout' : '/api/auth/signin'}
//   className='rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20'
// >
//   {session ? 'Sign out' : 'Sign in'}
// </Link>