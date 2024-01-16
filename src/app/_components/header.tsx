import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '~/components/theme-toggle';

function Header() {
  return (
    <div className='sticky inset-x-0 top-4 z-50 flex w-full flex-wrap bg-white text-sm md:flex-nowrap md:justify-start'>
      <header className='z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start'>
        <nav
          className='relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px] border border-gray-200 bg-white px-4 py-3 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto dark:border-gray-700 dark:bg-gray-800'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              HiveMind
            </a>
            <div className='md:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse='#navbar-collapse-with-animation'
                aria-controls='navbar-collapse-with-animation'
                aria-label='Toggle navigation'
              >
                <svg
                  className='hs-collapse-open:hidden h-4 w-4 flex-shrink-0'
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
                  <line x1='3' x2='21' y1='6' y2='6' />
                  <line x1='3' x2='21' y1='12' y2='12' />
                  <line x1='3' x2='21' y1='18' y2='18' />
                </svg>
                <svg
                  className='hs-collapse-open:block hidden h-4 w-4 flex-shrink-0'
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
          <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block'
          >
            <div className='mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7'>
              <Link
                className='font-medium text-blue-600 md:py-6 dark:text-blue-500'
                href='#'
                aria-current='page'
              >
                Home
              </Link>
              <Link
                className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
                href='#'
              >
                Features
              </Link>
              <Link
                className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
                href='#'
              >
                Pricing
              </Link>
              <Link
                className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
                href='#'
              >
                Blog
              </Link>

              <div className='hs-dropdown [--adaptive:none] [--strategy:static] md:py-4 md:[--strategy:fixed] md:[--trigger:hover]'>
                <button
                  type='button'
                  className='flex w-full items-center font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 '
                >
                  Contact
                  <svg
                    className='ms-2 h-4 w-4'
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
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                </button>

                <div className='hs-dropdown-menu hs-dropdown-open:opacity-100 top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full md:w-48 md:border md:shadow-md md:duration-[150ms] dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:dark:border'>
                  <Link
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    About
                  </Link>
                  <div className='hs-dropdown relative [--adaptive:none] [--strategy:static] md:[--trigger:hover] md:[--strategy:absolute]'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    >
                      Hire Us
                      <svg
                        className='ms-2 h-4 w-4 md:-rotate-90'
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
                        <path d='m6 9 6 6 6-6' />
                      </svg>
                    </button>

                    <div className='hs-dropdown-menu hs-dropdown-open:opacity-100 end-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:mt-2 md:w-48 md:border md:shadow-md md:duration-[150ms] dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:dark:border'>
                      <Link
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Advertising
                      </Link>
                      <Link
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Sponsorship
                      </Link>
                      <Link
                        className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        href='#'
                      >
                        Custom Development
                      </Link>
                    </div>
                  </div>

                  <Link
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    GitHub
                  </Link>
                  <a
                    className='flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    href='#'
                  >
                    Roadmap
                  </a>
                </div>
              </div>
              <ModeToggle />
              <Link
                className='flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:my-6 md:border-s md:border-gray-300 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500'
                href='#'
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
                Log in
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;