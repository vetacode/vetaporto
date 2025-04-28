// import Image from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

import { blackBandData } from '@/constants/black-band-data';

export const BlackBandMarquee = () => {
  return (
    <div className='flex-center relative z-30 -mt-4 h-21 rotate-[358.11deg] bg-neutral-950 md:-mt-7 md:h-35'>
      <div
        className='w-full overflow-hidden'
        style={{
          width: 'clamp(66.88rem, 158.44vw, 122rem)',
          // height: 'clamp(5.25rem, 11.36vw, 8.75rem)',
        }}
      >
        <Marquee className='py-4'>
          {blackBandData.map((item, index) => (
            <div
              key={index}
              className='display-xs-bold md:display-2xl-bold text-neutral-25 -mx-3 flex h-full w-auto items-center object-contain select-none'
            >
              {item.text && <span>{item.text}</span>}
              {item.icon && (
                <Image
                  src={item.icon}
                  alt='icon'
                  width={48}
                  height={52.5}
                  className=''
                  style={{
                    width: 'clamp(2rem, 3.9vw, 3rem)',
                  }}
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
