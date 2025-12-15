const baseTransition = {
  type: 'spring',
  stiffness: 150,
  damping: 70,
};

const whileInView = {
  opacity: 1,
  x: 0,
  y: 0,
};

const viewport = {
  once: true,
  amount: 0.1,
};

export const animationProps = {
  left: {
    initial: { x: -150, opacity: 0 },
    whileInView,
    viewport,
    transition: baseTransition,
  },
  right: {
    initial: { x: 150, opacity: 0 },
    whileInView,
    viewport,
    transition: baseTransition,
  },
  bottomRight: {
    initial: { x: 100, y: 100, opacity: 0 },
    whileInView,
    viewport,
    transition: baseTransition,
  },
  top: {
    initial: { y: -150, opacity: 0 },
    whileInView,
    viewport,
    transition: baseTransition,
  },
  scale: {
    animate: {
      scale: [1, 1.3, 1],
    },
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};
