import { StaticImageData } from 'next/image';

import iconGithub from '../../public/icons/socmed-github.svg';
import iconInstagram from '../../public/icons/socmed-instagram.svg';
import iconLinkedin from '../../public/icons/socmed-linkedin.svg';

type SocialMediaDataProps = {
  href: string;
  target: string;
  icon: StaticImageData;
  alt: string;
};

export const SocialMediaData: SocialMediaDataProps[] = [
  {
    icon: iconGithub,
    href: 'https://github.com/vetacode',
    target: '_blank',
    alt: 'github',
  },
  {
    icon: iconInstagram,
    href: 'https://www.instagram.com/vicvetacode/',
    target: '_blank',
    alt: 'instagram',
  },
  {
    icon: iconLinkedin,
    href: 'https://www.linkedin.com/in/fiqrie-rahman-b0426b34b/',
    target: '_blank',
    alt: 'linkedin',
  },
];
