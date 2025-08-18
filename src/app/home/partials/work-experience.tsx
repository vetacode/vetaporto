'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { CompanyCard } from '@/components/work-experience/company-card';
import { CompanyExperience } from '@/components/work-experience/company-experience';

import { cn } from '@/lib/utils';

const WorkExperience = () => {
  return (
    <Section id='experience' title='My Work Experience'>
      <div className='hidden md:block'>
        <CardsExperience>
          <CompanyCard
            icon='/company-logos/Novus.svg'
            company='Novus International'
            year='2020-2023'
          />
          <CompanyExperience
            position='Frontend Developer - UI/UX Engineer'
            jobdesc='Led the front-end architecture of internal dashboard and CRM tools to optimize product sales tracking and distributor engagement using React, TypeScript, and Tailwind CSS. Collaborated with cross-functional teams (technical & commercial) to develop tailored web solutions for major accounts such as DeHeus, Wonokoyo, and Malindo, ensuring high usability and responsive design. Built reusable UI components with strong focus on UX consistency, incorporating feedback from end-users and stakeholders through iterative improvements.'
          />
        </CardsExperience>

        <CardsExperience className='my-16'>
          <CompanyCard
            icon='/company-logos/DSM-Firmenich.svg'
            company='DSM Firmenich'
            year='2017-2020'
          />
          <CompanyExperience
            position='Web Application Developer'
            jobdesc='Developed internal sales and performance tracking web apps using HTML, CSS, and React, supporting account plans and KPI visualization for key partners like JAPFA and Sido Agung. Implemented dynamic dashboards and account profiling tools enabling account managers to benchmark competitors and visualize sales forecasts efficiently. Optimized cross-browser compatibility and performance to ensure smooth client experiences across devices. Took ownership of technical documentation and code refactoring to maintain long-term code health and team scalability.'
          />
        </CardsExperience>

        <CardsExperience>
          <CompanyCard
            icon='/company-logos/Alltech.svg'
            company='Alltech Inc.'
            year='2014-2017'
          />
          <CompanyExperience
            position='Jr. Frontend Developer'
            jobdesc='Contributed to UI/UX design sprints and supported web feature rollouts aligned with product marketing initiatives. Supported collaboration with marketing and technical units to align digital tools with quarterly product campaign goals. Assisted in designing and deploying web-based technical support tools to streamline trial data tracking and poultry farm feedback, maintained and updated web portals used by distributors and internal teams using JavaScript, HTML, and CSS.'
            isLast={true}
          />
        </CardsExperience>
      </div>

      {/* Mobile */}
      <div className='block md:hidden'>
        <div className='relative space-y-6'>
          <div className='absolute left-4' />

          <MobileExperienceItem
            icon='/company-logos/Novus.svg'
            company='Novus International'
            year='2020-2023'
            position='Frontend Developer - UI/UX Engineer'
            jobdesc='Led the front-end architecture of internal dashboard and CRM tools to optimize product sales tracking and distributor engagement using React, TypeScript, and Tailwind CSS. Designed and maintained user-centric interfaces that supported the regional team in trial monitoring and technical support—improving task efficiency by 30%. Collaborated with cross-functional teams (technical & commercial) to develop tailored web solutions for major accounts such as DeHeus, Wonokoyo, and Malindo, ensuring high usability and responsive design. Built reusable UI components with strong focus on UX consistency, incorporating feedback from end-users and stakeholders through iterative improvements. Integrated customer support systems and marketing analytics tools using modern JavaScript frameworks and APIs.'
          />

          <MobileExperienceItem
            icon='/company-logos/DSM-Firmenich.svg'
            company='DSM Firmenich'
            year='2017-2020'
            position='Web Application Developer'
            jobdesc='Developed internal sales and performance tracking web apps using HTML, CSS, and React, supporting account plans and KPI visualization for key partners like JAPFA and Sido Agung. Implemented dynamic dashboards and account profiling tools enabling account managers to benchmark competitors and visualize sales forecasts efficiently. Optimized cross-browser compatibility and performance to ensure smooth client experiences across devices. Took ownership of technical documentation and code refactoring to maintain long-term code health and team scalability.'
          />

          <MobileExperienceItem
            icon='/company-logos/Alltech.svg'
            company='Alltech Inc.'
            year='2014-2017'
            position='Jr. Frontend Developer'
            jobdesc='Contributed to UI/UX design sprints and supported web feature rollouts aligned with product marketing initiatives. Supported collaboration with marketing and technical units to align digital tools with quarterly product campaign goals. Assisted in designing and deploying web-based technical support tools to streamline trial data tracking and poultry farm feedback, maintained and updated web portals used by distributors and internal teams using JavaScript, HTML, and CSS.'
            isLast={true}
          />
        </div>
      </div>
    </Section>
  );
};

export default WorkExperience;

type CardsExperienceProps = {
  children: React.ReactNode;
  className?: string;
};

const CardsExperience: React.FC<CardsExperienceProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn('grid grid-cols-[14.5rem_1.5rem_auto] gap-y-17', className)}
    >
      {children}
    </div>
  );
};

type MobileExperienceItemProps = {
  icon: string;
  company: string;
  year: string;
  position: string;
  jobdesc: string;
  isLast?: boolean;
};

const MobileExperienceItem: React.FC<MobileExperienceItemProps> = ({
  icon,
  company,
  year,
  position,
  jobdesc,
  isLast = false,
}) => {
  return (
    <div className='relative pl-10'>
      <div className='absolute left-1 flex h-6 w-6 items-center justify-center rounded-full border-1 border-dashed border-neutral-400'>
        <motion.div
          className='bg-primary-200 absolute top-1/2 left-1/2 z-10 aspect-square h-[16px] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full'
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </div>

      <div>
        <Image
          src={icon}
          alt={company}
          width={102}
          height={32}
          className='h-8 w-auto transition-all duration-300 ease-in-out hover:scale-110'
        />
        <h3 className='text-md-semibold my-1 text-neutral-950'>{company}</h3>
        <p className='text-sm-regular mb-2 text-neutral-700'>{year}</p>
        <h4 className='text-md-semibold mb-1 text-neutral-950'>{position}</h4>
        <p className='text-sm-regular text-neutral-700'>{jobdesc}</p>
      </div>

      {!isLast && (
        <div className='absolute top-6 left-4 z-0 h-full border-l-1 border-dashed border-neutral-400'></div>
      )}
    </div>
  );
};
