import Image from 'next/image';
import React from 'react';

import FeatureCard from '@/components/ui/feature-cards';

const Hero = () => {
  return (
    <section
      className='bg-primary-400 relative overflow-hidden pt-25 md:pt-35'
      style={
        {
          // height: 'clamp(12.19rem, 19.73vw, 15.19rem)',
          // height: 'clamp(43.81rem, 71.91vw, 55.38rem)',
          // paddingTop: 'clamp(6.25rem, 11.69vw, 6.75rem)',
        }
      }
    >
      <div className='relative z-20'>
        <h1
          className='text-neutral-25 flex-center font-extrabold'
          style={{
            fontSize: 'clamp(2.5rem, 10.17vw, 9.38rem)',
            lineHeight: 'clamp(2.13rem, 15.82vw, 12.19rem)',
          }}
        >
          EDWIN ANDERSON
        </h1>
      </div>

      <div
        className='custom-container z-10 mt-125 pb-20'
        style={{
          width: 'clamp(18rem, 90vw, 77rem)',
        }}
      >
        <div className='flex-center relative'>
          <div
            className='absolute rotate-0 rounded-full bg-[#6600EB]/20'
            style={{
              width: 'clamp(50rem, 80vw, 72rem)',
              height: 'clamp(50rem, 80vw, 72rem)',
            }}
          />

          <div
            className='absolute rotate-[10deg] rounded-full bg-[#6600EB]/40'
            style={{
              width: 'clamp(40rem, 65vw, 58rem)',
              height: 'clamp(40rem, 65vw, 58rem)',
            }}
          />

          <div
            className='absolute rotate-[20deg] rounded-full bg-[#6600EB]/60'
            style={{
              width: 'clamp(30rem, 50vw, 43rem)',
              height: 'clamp(30rem, 50vw, 43rem)',
            }}
          />

          <div
            className='absolute rotate-[30deg] rounded-full bg-[#6600EB]/80'
            style={{
              width: 'clamp(20rem, 35vw, 30rem)',
              height: 'clamp(20rem, 35vw, 30rem)',
            }}
          />
        </div>
      </div>

      <div
        className='absolute bottom-0 left-1/2 z-30 -translate-x-1/2 transform md:-bottom-23'
        style={{
          width: 'clamp(26.5rem, 61.95vw, 47.69rem)',
        }}
      >
        <Image
          src='/images/cheerful-asian-mobile.png'
          alt='hero-image'
          // fill
          width={763}
          height={763}
          className='object-contain'
        />
      </div>

      <FeatureCard
        title='5.0'
        icon={
          <Image
            src='/icons/5stars.svg'
            alt='star'
            width={200}
            height={192}
            className='object-contain'
          />
        }
        description='Many Client Trust with me'
        className='display-xl-bold absolute top-[43%] right-1/2 -translate-x-[100%] rotate-[6.73deg] md:rotate-[3.15deg]'
        style={{
          left: 'clamp(10%, 60vw, 38%)',
          top: 'clamp(10%, 45vw, 43%)',
          width: 'clamp(9rem, 60vw, 12.5rem)',
          // borderRadius: 'clamp(0.19rem, 0.32vw, 0.25rem)',
        }}
      />
      <FeatureCard
        title='Frontend Developer'
        description='React Expert'
        className='display-xs-bold absolute top-[74.3%] right-1/2 -translate-x-[70%] -rotate-[3.24deg]'
        style={{
          width: 'clamp(10.38rem, 22.97vw, 18.69rem)',
          // borderRadius: 'clamp(0.19rem, 0.32vw, 0.25rem)',
        }}
      />
      <FeatureCard
        title='50+'
        description='Global Clients'
        className='display-xl-bold absolute top-[66%] left-1/2 translate-x-[130%] rotate-[5.31deg]'
        style={{
          width: 'clamp(9rem, 16.23vw, 12.5rem)',
          // borderRadius: 'clamp(0.19rem, 0.32vw, 0.25rem)',
        }}
        icon={
          <Image
            src='/icons/global-clients.svg'
            alt='clients'
            width={168}
            height={52}
            className='object-contain'
            // style={{
            //   width: 'clamp(2rem, 3.9vw, 3rem)',
            // }}
          />
        }
      />
    </section>
  );
};

export default Hero;
