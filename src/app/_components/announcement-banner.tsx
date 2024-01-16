import React from 'react';
import Link from 'next/link';

function AnnouncementBanner() {
  return (
    <div>
      <div
        id='ab-full-width-with-dismiss-button-on-blue-bg'
        className='hs-removing:-translate-y-full justify-center bg-blue-600'
      >
        <div className='mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8'>
          <div className='flex gap-10'>
            <p className='px-10 text-white'>
              Hivemind is coming soon!{' '}
              <Link
                className='px-10 font-medium underline decoration-2 hover:text-white/[.8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='https://dantom.me'
              >
                Learn more...
              </Link>
            </p>

            <div className='ms-auto ps-3'>
              <button
                type='button'
                className='inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600'
                data-hs-remove-element='#ab-full-width-with-dismiss-button-on-blue-bg'
              >
                <span className='sr-only'>Dismiss</span>
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
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBanner;