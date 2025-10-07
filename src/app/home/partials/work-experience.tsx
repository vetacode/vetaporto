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
        <CardsExperience className='my-16'>
          <CompanyCard
            icon='/company-logos/Sybexcrop.png'
            company='Sybex Animal Health & Nutrition'
            year='2024-present'
          />
          <CompanyExperience
            position='Managing Director'
            jobdesc='Lead digital transformation initiatives to enhance data visibility, workflow efficiency, and cross-functional collaboration. Translate customer requirements into actionable, solution-oriented plans, experience directly aligned with user-centered design and front-end development. Collaborate with global teams using digital platforms for coordination and data-driven decision-making, developing remote and agile communication skills.'
          />
        </CardsExperience>

        <CardsExperience>
          <CompanyCard
            icon='/company-logos/Novus.svg'
            company='Novus International'
            year='2020-2023'
          />
          <CompanyExperience
            position='Customer Relationship Manager'
            jobdesc='Applied data analysis to monitor performance metrics and optimize decision-making, a foundation for dashboard design and data visualization. Managed customer solution projects using iterative feedback loops, similar to agile development and UX improvement cycles. Utilized CRM and digital reporting tools to streamline operations, building familiarity with structured data systems and digital workflows.'
          />
        </CardsExperience>

        <CardsExperience className='my-16'>
          <CompanyCard
            icon='/company-logos/DSM-Firmenich.svg'
            company='DSM Firmenich'
            year='2017-2020'
          />
          <CompanyExperience
            position='Account Manager'
            jobdesc='Integrated digital reporting and analytics in account plans, early application of structured, data-driven workflows. Translated technical information into clear, user-oriented presentations, transferable to UI design and communication in tech projects. Analyzed market and competitor data to drive strategy, sharpening analytical and visualization skills essential for front-end and AI applications.'
          />
        </CardsExperience>

        <CardsExperience>
          <CompanyCard
            icon='/company-logos/Alltech.svg'
            company='Alltech Inc.'
            year='2014-2017'
          />
          <CompanyExperience
            position='Technical Sales Manager'
            jobdesc='Developed data-based reports and dashboards to visualize performance trends, precursor to UI and front-end data presentation. Worked with marketing and technical teams to design digital materials, the foundation for visual storytelling and interface design. Coordinated technical solutions for clients, aligning functional requirements with practical implementation—mirrors front-end collaboration workflows.'
            isLast={true}
          />
        </CardsExperience>
      </div>

      {/* Mobile */}
      <div className='block md:hidden'>
        <div className='relative space-y-6'>
          <div className='absolute left-4' />

          <MobileExperienceItem
            icon='/company-logos/Sybexcrop.png'
            company='Sybex Animal Health & Nutrition'
            year='2024-present'
            position='Managing Director'
            jobdesc='Lead digital transformation initiatives to enhance data visibility, workflow efficiency, and cross-functional collaboration. Translate customer requirements into actionable, solution-oriented plans, experience directly aligned with user-centered design and front-end development. Collaborate with global teams using digital platforms for coordination and data-driven decision-making, developing remote and agile communication skills.'
          />

          <MobileExperienceItem
            icon='/company-logos/Novus.svg'
            company='Novus International'
            year='2020-2023'
            position='Customer Relationship Manager'
            jobdesc='Applied data analysis to monitor performance metrics and optimize decision-making, a foundation for dashboard design and data visualization. Managed customer solution projects using iterative feedback loops, similar to agile development and UX improvement cycles. Utilized CRM and digital reporting tools to streamline operations, building familiarity with structured data systems and digital workflows.'
          />

          <MobileExperienceItem
            icon='/company-logos/DSM-Firmenich.svg'
            company='DSM Firmenich'
            year='2017-2020'
            position='Account Manager'
            jobdesc='Integrated digital reporting and analytics in account plans—early application of structured, data-driven workflows. Translated technical information into clear, user-oriented presentations, transferable to UI design and communication in tech projects. Analyzed market and competitor data to drive strategy, sharpening analytical and visualization skills essential for front-end and AI applications.'
          />

          <MobileExperienceItem
            icon='/company-logos/Alltech.svg'
            company='Alltech Inc.'
            year='2014-2017'
            position='Technical Sales Manager'
            jobdesc='Developed data-based reports and dashboards to visualize performance trends, precursor to UI and front-end data presentation. Worked with marketing and technical teams to design digital materials, the foundation for visual storytelling and interface design. Coordinated technical solutions for clients, aligning functional requirements with practical implementation—mirrors front-end collaboration workflows.'
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
          width={120}
          height={32}
          className='object-cover transition-all duration-300 ease-in-out hover:scale-110'
          // className='h-8 w-auto transition-all duration-300 ease-in-out hover:scale-110'
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
