import Link from 'next/link';
import UserButton from '~/components/ui/user-button';

import ThemeSwitch from '~/components/ui/theme-switcher';

function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          {/*Mobile Menu*/}
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link href={'/'}>Features</Link>
            </li>
            <li>
              <Link href={'/'}>About</Link>
              <ul className='p-2'>
                <li>
                  <a>Roadmap</a>
                </li>
                <li>
                  <Link href={'/'}>Pricing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/'}>Blog</Link>
            </li>
          </ul>
          {/*End Mobile Menu*/}
        </div>
        {/*Logo / Branding*/}
        <Link href={'/'} className='btn btn-ghost text-xl'>
          HiveMind
        </Link>
      </div>
      {/*Desktop Menu*/}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href={'/'}>Features</Link>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <ul className='p-2'>
                <li>
                  <Link href={'/'}>Roadmap</Link>
                </li>
                <li>
                  <Link href={'/'}>Pricing</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={'/'}>Blog</Link>
          </li>
        </ul>

        {/*End Desktop Menu*/}
      </div>
      <div className='navbar-end gap-2'>
        <ThemeSwitch />
        <UserButton />
      </div>
    </div>
  );
}

export default Header;