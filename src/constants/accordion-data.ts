type AccordionDataProps = {
  id: string;
  title: string;
  description: string;
};

export const accordionData: AccordionDataProps[] = [
  {
    id: '1',
    title: 'What’s your approach to front-end development?',
    description:
      'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
  },
  {
    id: '2',
    title: 'How do you ensure websites load quickly and efficiently?',
    description:
      'Performance is always a priority. I optimize assets by compressing images, minifying CSS/JS, and implementing lazy loading where needed. I also leverage browser caching, code splitting (especially with React/Vite), and use performance monitoring tools like Lighthouse and WebPageTest. I believe fast UX is a form of respect to the user.',
  },
  {
    id: '3',
    title: 'What kind of projects do you specialize in?',
    description:
      'I focus on building responsive, accessible, and modern web applications, mainly dashboards, landing pages, and interactive UI systems. I enjoy turning complex interfaces into intuitive experiences, and I often collaborate with designers and back-end developers to deliver cohesive, high-performing apps.',
  },
  {
    id: '4',
    title: 'How do you handle project deadlines?',
    description:
      'I approach deadlines with realistic planning and strong communication. I break down work into manageable milestones, track progress, and adapt quickly when priorities shift. While I value shipping on time, I also advocate for quality. it`s about delivering value, not just speed.',
  },
  {
    id: '5',
    title: 'What technologies do you use?',
    description:
      'I primarily work with React (or Next.js), Tailwind CSS, and TypeScript. For animations and rich UI, I use Framer Motion or GSAP. I also use tools like Figma for handoff, Git/GitHub for version control, and Vite for builds. I stay curious and constantly test emerging tools to keep my workflow sharp.',
  },
];
