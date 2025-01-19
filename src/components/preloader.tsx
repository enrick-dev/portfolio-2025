import { motion, TargetAndTransition } from 'motion/react';
import React from 'react';
import AnimatedCounter from './animated-counter';
import EncryptText from './encrypt-text';

interface PreloaderProps {
  children: React.ReactNode;
  className?: string;
}

const Preloader: React.FC<PreloaderProps> = ({ children, className }) => {
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
      opacity: 0.6,
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
        className="absolute z-10 h-dvh w-dvw bg-foreground text-background"
      >
        <div className="relative flex size-full items-center justify-center">
          <div className="flex h-14 flex-col items-center gap-4 overflow-hidden text-5xl font-medium max-md:text-3xl">
            <EncryptText {...anim(maskText)}>Carregando</EncryptText>
            <EncryptText {...anim(maskText)}>Seja bem vindo</EncryptText>
          </div>

          <motion.div
            className="absolute bottom-12 right-12 text-8xl max-md:text-4xl"
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
        className="h-dvh w-dvw overflow-y-scroll bg-background"
      >
        <div className={` ${className} overflow-hidden`}>{children}</div>
      </motion.div>
    </div>
  );
};

export default Preloader;
