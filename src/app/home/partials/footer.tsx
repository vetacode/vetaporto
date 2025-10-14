'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SocialMediaData } from '@/constants/social-media-data';

const Footer = () => {
  return (
    <div className='bg-primary-400'>
      <footer className='custom-container flex w-auto flex-col justify-between gap-5 py-10 md:flex-row md:py-6'>
        <div className='flex flex-col gap-5 md:flex-row md:items-center md:gap-4'>
          <Link href='#home'>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.8, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className='z-50'
            >
              <Image
                src='/company-logos/PerfectPixelCapsule.svg'
                alt='logo'
                width={141}
                height={32}
                className='cursor-pointer transition-all duration-300'
              />
            </motion.div>
          </Link>
          <p className='md:text-md-regular text-xs-regular text-neutral-25 md:pt-1'>
            © {new Date().getFullYear()} Fiqrie Rahman. All rights reserved.
          </p>
        </div>
        <div className='flex gap-4'>
          {SocialMediaData.map((item) => (
            <Link href={item.href} key={item.alt} target={item.target}>
              <Image
                src={item.icon}
                alt={item.alt}
                width={48}
                height={48}
                className='cursor-pointer transition-all duration-300 hover:scale-115'
              />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
