import type { StaticImageData } from 'next/image';

import lina from '../../public/images/lina-circle.png';
import priskilla from '../../public/images/priskilla-circle.png';
import tassya from '../../public/images/tassya-circle.png';

type SuccessStoriesDataProps = {
  logo: StaticImageData;
  description: string;
  rating: number;
  personName: string;
  personPosition: string;
};

export const SuccessStoriesData: SuccessStoriesDataProps[] = [
  {
    logo: lina,
    description:
      'I strongly recommended my colleague-Fiqrie as a good manager. He is consistently pleasant, and takes on all assignments with enthusiasm and dedication. I have had the pleasure of working with him for almost 2 years (for the project of poultry on farm) and he was highly committed with a great responsibility.',
    rating: 5,
    personName: 'Lina Maryana',
    personPosition: 'Marketing Manager, DSM Firmenich',
  },
  {
    logo: priskilla,
    description:
      'It`s been a great pleasure working with Fiqrie for the past 2 years. Fiqrie is an energetic and a very analytic person which always brings new ideas to the table. We have worked together on some projects and I found him a very dedicated professional. He always sets strategic directions and accomplishes every project very well.',
    rating: 4,
    personName: 'Priskilla Sophia',
    personPosition: 'Technical Specialist, Novus International',
  },
  {
    logo: tassya,
    description:
      'Fiqrie is a hard working and committed person. He is very detailed and determined to reach his goals. Fiqrie will always provide the best contribution to the organisation. He works well with his fellow team and shows good cooperation with the office and support team.',
    rating: 5,
    personName: 'Natassya Paramita',
    personPosition: 'Office Manager, Alltech Inc.',
  },
  {
    logo: tassya,
    description:
      'Fiqrie is a hard working and committed person. He is very detailed and determined to reach his goals. Fiqrie will always provide the best contribution to the organisation. He works well with his fellow team and shows good cooperation with the office and support team.',
    rating: 5,
    personName: 'Natassya Paramita',
    personPosition: 'Office Manager, Alltech Inc.',
  },
  {
    logo: lina,
    description:
      'I strongly recommended my colleague-Fiqrie as a good manager. He is consistently pleasant, and takes on all assignments with enthusiasm and dedication. I have had the pleasure of working with him for almost 2 years (for the project of poultry on farm) and he was highly committed with a great responsibility.',
    rating: 5,
    personName: 'Lina Maryana',
    personPosition: 'Marketing Manager, DSM Firmenich',
  },
  {
    logo: priskilla,
    description:
      'It`s been a great pleasure working with Fiqrie for the past 2 years. Fiqrie is an energetic and a very analytic person which always brings new ideas to the table. We have worked together on some projects and I found him a very dedicated professional. He always sets strategic directions and accomplishes every project very well.',
    rating: 4,
    personName: 'Priskilla Sophia',
    personPosition: 'Technical Specialist, Novus International',
  },
  {
    logo: priskilla,
    description:
      'It`s been a great pleasure working with Fiqrie for the past 2 years. Fiqrie is an energetic and a very analytic person which always brings new ideas to the table. We have worked together on some projects and I found him a very dedicated professional. He always sets strategic directions and accomplishes every project very well.',
    rating: 4,
    personName: 'Priskilla Sophia',
    personPosition: 'Technical Specialist, Novus International',
  },
  {
    logo: tassya,
    description:
      'Fiqrie is a hard working and committed person. He is very detailed and determined to reach his goals. Fiqrie will always provide the best contribution to the organisation. He works well with his fellow team and shows good cooperation with the office and support team.',
    rating: 5,
    personName: 'Natassya Paramita',
    personPosition: 'Office Manager, Alltech Inc.',
  },
  {
    logo: lina,
    description:
      'I strongly recommended my colleague-Fiqrie as a good manager. He is consistently pleasant, and takes on all assignments with enthusiasm and dedication. I have had the pleasure of working with him for almost 2 years (for the project of poultry on farm) and he was highly committed with a great responsibility.',
    rating: 5,
    personName: 'Lina Maryana',
    personPosition: 'Marketing Manager, DSM Firmenich',
  },
];
