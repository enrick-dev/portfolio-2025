import React from 'react';
import { motion, TargetAndTransition } from 'motion/react';
import AnimatedCounter from './animated-counter';

const Preloader = ({ children, className }) => {
  interface Variants {
    [key: string]: TargetAndTransition;
    initial: TargetAndTransition;
    enter: TargetAndTransition;
    exit: TargetAndTransition;
  }

  const delay = 5;

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  });

  const slide: Variants = {
    initial: { translateY: 0 },
    enter: {
      translateY: '100dvh',
      transition: { duration: 0.5, delay: delay, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {},
  };

  const perspective: Variants = {
    initial: {
      scale: 0.9,
      opacity: 0.8,
      borderRadius: '0.75rem',
      pointerEvents: 'none',
    },
    enter: {
      scale: 1,
      opacity: 1,
      borderRadius: 0,
      pointerEvents: 'auto',
      transition: { duration: 0.6, delay: delay + 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {},
  };

  const opacity: Variants = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: delay - 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {},
  };

  const maskText: Variants = {
    initial: { y: 0 },
    enter: {
      y: '-125%',
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: delay - 1.2,
      },
    },
    exit: {},
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        {...anim(slide)}
        className="absolute w-dvw h-dvh bg-foreground z-10 text-background "
      >
        <div className="relative flex items-center justify-center size-full">
          <div className="overflow-hidden flex flex-col gap-4 items-center h-14 text-5xl font-medium max-md:text-3xl">
            <motion.p {...anim(maskText)}>Carregando</motion.p>
            <motion.p {...anim(maskText)}>Seja bem vindo</motion.p>
          </div>

          <motion.div
            className="text-8xl absolute right-2 bottom-2 max-md:text-4xl"
            {...anim(opacity)}
          >
            <AnimatedCounter
              from={0}
              to={100}
              animationOptions={{ duration: delay - 1.2 }}
            />
            {'%'}
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        {...anim(perspective)}
        className="bg-background w-dvw h-dvh overflow-y-scroll"
      >
        <div className={` ${className} `}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Preloader;
