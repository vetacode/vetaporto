'use client';

import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';
import {
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(22,1,49,0)', 'rgba(22,1,49,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container md:h-21.3 h-20'>
        <Image
          src='/company-logos/company-logo.svg'
          alt='logo'
          width={141}
          height={32}
          className='cursor-pointer transition-all duration-400 hover:h-10 hover:w-38'
        />
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-8.5'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-md-extrabold p-2 transition-all duration-400'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          asChild
          className='!hidden transition-all duration-400 lg:!flex'
        >
          <Link href='#contact'>
            <Image
              src='/icons/mail-black.svg'
              alt='mail-logo'
              width={17}
              height={13}
              className='mr-2.5'
            />
            Hire Me
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Icon
              icon='ci:menu-alt-01'
              width={24}
              height={24}
              className='cursor-pointer transition-all duration-400 hover:[height:28px] hover:[width:28px] lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className='text-color-neutral-25 py-6'>
              <Image
                src='/company-logos/company-logo-black.svg'
                alt='logo-black'
                width={141}
                height={32}
                className='ml-4 cursor-pointer transition-all duration-400'
              />
            </SheetTitle>
            <nav className='mt-4'>
              <ul className='flex flex-col gap-4 pl-2'>
                {navigationData.map((data) => (
                  <li key={data.label} className='my-2 py-1'>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='text-md-regular hover:text-md-extrabold cursor-pointer text-neutral-950 transition-all duration-300'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              asChild
              variant='secondary'
              className='hover:text-md-regular transition-all duration-400'
            >
              <SheetClose asChild>
                <Link href='#contact'>
                  <Image
                    src='/icons/mail-white.svg'
                    alt='mail-logo'
                    width={17}
                    height={13}
                    className='mr-2.5'
                  />
                  Hire Me
                </Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
