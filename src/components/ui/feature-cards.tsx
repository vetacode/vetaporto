import { StaticImageData } from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type FeatureCardsProps = {
  title: string;
  icon?: React.ReactNode;
  description: string;
  className?: string;
  style?: React.CSSProperties;
  imageSrc?: StaticImageData;
};

const FeatureCard: React.FC<FeatureCardsProps> = ({
  title,
  icon,
  description,
  className,
  style,
  imageSrc,
}) => {
  return (
    <div
      className={cn(
        'z-20 rounded-2xl border border-[#FDFDFD]/10 bg-[#282828]/20 p-5 backdrop-blur-md',
        className
      )}
      style={style}
    >
      <h3 className='text-neutral-25'>{title}</h3>
      {icon && <div className='flex-between my-2 h-auto w-full'>{icon}</div>}
      <p className='text-neutral-25 text-sm-medium my-1.5'>{description}</p>
      {imageSrc && (
        <div className='flex-between my-2 h-auto w-full'>
          <Image
            src={imageSrc}
            alt={title}
            width={168}
            height={52}
            className='object-contain'
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
