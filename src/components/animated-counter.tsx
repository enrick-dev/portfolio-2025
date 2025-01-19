import { animate, ValueAnimationTransition } from 'motion';
import { useIsomorphicLayoutEffect } from 'motion/react';
import React from 'react';

type propsType = {
  from: number;
  to: number;
  animationOptions?: ValueAnimationTransition;
  className?: string;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
  className,
}: propsType) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;

    element.textContent = String(from);

    animate(from, to, {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
      ...animationOptions,
      onUpdate: (value) => {
        element.textContent = String(Math.round(value));
      },
    });
  }, [ref]);

  return <span ref={ref} className={className} />;
};

export default AnimatedCounter;
