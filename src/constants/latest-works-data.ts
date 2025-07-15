import { StaticImageData } from 'next/image';

import project2 from '../../public/images/latest-works/CompanyPortfolio.svg';
import project6 from '../../public/images/latest-works/ecommerce.svg';
import project5 from '../../public/images/latest-works/MovieExplorer.svg';
import project4 from '../../public/images/latest-works/Pokedex.svg';
import project1 from '../../public/images/latest-works/PrivatePortfolio.svg';
import project3 from '../../public/images/latest-works/TodoList.svg';

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
    dashboard: 'Todo List',
    year: '2025',
    image: project3,
    title: 'Simple Todo List Application',
    visit: 'Visit Website',
    icon: '/icons/arrow-right.svg',
  },
  {
    dashboard: 'PokeDex',
    year: '2025',
    image: project4,
    title: 'Pokemon Application',
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
