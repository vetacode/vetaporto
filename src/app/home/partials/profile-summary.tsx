import React from 'react';

const ProfileSummary = () => {
  return (
    <div id='About' className='custom-container mt-13 md:mt-28'>
      <p className='md:text-lg-semibold text-md-semibold text-neutral-950'>
        Hi, I’m Edwin Anderson 👋
      </p>
      <h2 className='md:display-md-semibold text-xl-semibold mt-3 text-neutral-950 md:mt-4'>
        Building digital products with a focus on crafting visually engaging and
        seamless user interfaces using React.js.{' '}
        <span className='text-neutral-400'>
          Prioritizing responsive design, performance optimization, and
          user-centric features to deliver exceptional web experiences.
        </span>
      </h2>
      <SummaryCards>
        <SummaryCard
          title='Why Choose Me'
          description='Delivering excellence with innovative solutions and seamless execution.'
          stats='5.0'
        ></SummaryCard>
      </SummaryCards>
    </div>
  );
};

export default ProfileSummary;

type SummaryCardsProps = {
  children: React.ReactNode;
};

const SummaryCards: React.FC<SummaryCardsProps> = ({ children }) => {
  return <div className=''>{children}</div>;
};

type SummaryCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  stats?: string;
  children?: React.ReactNode;
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  description,
  icon,
  backgroundColor,
  stats,
  children,
}) => {
  return (
    <div className='bg-secondary-300 my-2 mt-6 h-95 w-99 rounded-xl p-6 md:mt-12 md:rounded-2xl'>
      <h3 className='display-md-bold text-base-white'>{title}</h3>
      {icon && <div className='flex-between my-2 h-auto w-full'>{icon}</div>}
      <p className='t ext-md-regular text-base-white my-1.5 mt-2 md:mt-4'>
        {description}
      </p>
      {stats && (
        <p className='text-neutral-25 text-sm-medium my-1.5 mt-6 md:mt-13'>
          {stats}
        </p>
      )}
      {backgroundColor && (
        <div className='rounded-2xl bg-[#282828]/20 p-5'>{children}</div>
      )}
    </div>
  );
};
