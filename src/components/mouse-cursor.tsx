import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { PropsWithChildren } from 'react';

const MouseCursor = ({
  styckyElement,
}: PropsWithChildren<{ styckyElement: React.RefObject<HTMLDivElement> }>) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const element = styckyElement.current;

  const cursorSizeWidth = isHovered ? element.clientWidth : 20;
  const cursorSizeHeight = isHovered ? element.clientHeight : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smothMouse = {
    x: useSpring(mouse.x, { stiffness: 240, damping: 45 }),
    y: useSpring(mouse.y, { stiffness: 240, damping: 45 }),
  };
  const manageMouseMove = (e: globalThis.MouseEvent): void => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      styckyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };
    if (isHovered) {
      mouse.x.set(center.x - cursorSizeWidth / 2);
      mouse.y.set(center.y - cursorSizeHeight / 2);
    } else {
      mouse.x.set(clientX - cursorSizeWidth / 2);
      mouse.y.set(clientY - cursorSizeHeight / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    element?.addEventListener('mouseenter', manageMouseOver);
    element?.addEventListener('mouseleave', manageMouseLeave);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      element?.removeEventListener('mouseenter', manageMouseOver);
      element?.removeEventListener('mouseleave', manageMouseLeave);
    };
  });

  return (
    <motion.div
      className="pointer-events-none absolute z-50 size-5 cursor-pointer rounded-full bg-white mix-blend-difference"
      style={{ left: smothMouse.x, top: smothMouse.y }}
      animate={{ width: cursorSizeWidth, height: cursorSizeHeight }}
    ></motion.div>
  );
};

export default MouseCursor;
