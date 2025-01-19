import { motion } from 'motion/react';
import React, { PropsWithChildren, useRef } from 'react';

interface MagneticProps extends PropsWithChildren {
  className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
