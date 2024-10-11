import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { UserButton, SignedIn } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Streamooo logo"
          className='max-sm:w-10'
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Streamooo</p>
      </Link>

      <div className='flex items-center gap-5'>
        {/* Placeholder for user login status and user button */}
        <SignedIn>
          <UserButton />
        </SignedIn>


        {/* Mobile navigation trigger */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
