import { StaticImageData } from 'next/image';

// import Star4edge from '@/public/icons/star-4edge.svg';

import Star4edge from '../../public/icons/star-4edge.svg';

type BlackBandProps = {
  icon?: StaticImageData;
  text?: string;
};

export const blackBandData: BlackBandProps[] = [
  {
    text: 'Frontend Developer',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Expert React',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Programmers',
  },
  {
    icon: Star4edge,
  },
  {
    text: 'Mobile Developers',
  },
  {
    icon: Star4edge,
  },
];

// export const blackBandData: BlackBandProps[] = [
//   {
//     text: 'FRONT END DEVELOPER',
//   },

//   {
//     text: 'EXPERT REACT',
//   },

//   {
//     text: 'PROGRAMMERS',
//   },

//   {
//     text: 'MOBILE DEVELOPER',
//   },
// ];

// export const blackBandData: BlackBandProps[] = [
//   {
//     text: 'FRONT END DEVELOPER',
//   },
//   {
//     src: Star4edge,
//   },
//   {
//     text: 'EXPERT REACT',
//   },
//   {
//     src: Star4edge,
//   },
//   {
//     text: 'PROGRAMMERS',
//   },
//   {
//     src: Star4edge,
//   },
//   {
//     text: 'MOBILE DEVELOPER',
//   },
//   {
//     src: Star4edge,
//   },
// ];
