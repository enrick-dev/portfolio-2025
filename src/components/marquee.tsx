import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

type MarqueeProps = PropsWithChildren<{
  speed?: number;
  reverse?: boolean;
  className?: string;
}>;

const Marquee = ({
  children,
  speed = 20,
  reverse = false,
  className,
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex w-fit gap-4"
        animate={{
          x: reverse ? ['0%', '50%'] : ['0%', '-50%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
