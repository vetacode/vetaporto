import { StaticImageData } from 'next/image';

import project1 from '../../public/images/latest-works/project1.jpg';
import project2 from '../../public/images/latest-works/project2.jpg';
import project3 from '../../public/images/latest-works/project3.jpg';
import project4 from '../../public/images/latest-works/project4.jpg';
import project5 from '../../public/images/latest-works/project5.jpg';
import project6 from '../../public/images/latest-works/project6.jpg';

type LatestWorksDataProps = {
  dashboard: string;
  year: string;
  image: StaticImageData;
  title: string;
  visit: string;
  icon: string;
};

export const LatestWorksData: LatestWorksDataProps[] = [
  {
    dashboard: 'Personal Portfolio',
    year: '2025',
    image: project1,
    title: 'Landing Page for Personal Portfolio',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Company Portfolio',
    year: '2025',
    image: project2,
    title: 'Landing Page for Company Portfolio',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Blog',
    year: '2025',
    image: project3,
    title: 'Simple Web Blog',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Call to Action Cards',
    year: '2024',
    image: project4,
    title: 'Payment Options Cards Design',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'Movie of the Year',
    year: '2024',
    image: project5,
    title: 'Favorite Movie Landing Page',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'E-commerce',
    year: '2024',
    image: project6,
    title: 'Simple E-commerce Website',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
];
