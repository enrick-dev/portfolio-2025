import { useIsMobile } from '@/utils/use-mobile';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React from 'react';

type CursorSizeType = {
  width: number;
  height: number;
  hidden?: boolean;
  move?: boolean;
};

type StikyElementType =
  | 'stiky-element-default'
  | 'stiky-element-hidden'
  | 'stiky-element-move';

const MouseCursor = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultCursorSize: CursorSizeType = { width: 15, height: 15 };
  const [cursorSize, setCursorSize] = React.useState(defaultCursorSize);

  const isMobile = useIsMobile();

  const element = React.useRef<HTMLElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smothMouse = {
    x: useSpring(mouse.x, { stiffness: 240, damping: 30 }),
    y: useSpring(mouse.y, { stiffness: 240, damping: 30 }),
  };
  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;

    if (isHovered && element.current != null && !cursorSize.move) {
      const { left, top, width, height } =
        element.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };
      const distance = { x: clientX - center.x, y: clientY - center.y };

      mouse.x.set(center.x - cursorSize.width / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize.height / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize.width / 2);
      mouse.y.set(clientY - cursorSize.height / 2);
    }
  };

  const manageMouseOver = (
    newElement: HTMLElement,
    StikyElementType?: StikyElementType,
  ) => {
    setIsHovered(true);

    if (newElement != null) {
      const cursorWidthAttribute = newElement.getAttribute('cursor-width');
      const cursorHeightAttribute = newElement.getAttribute('cursor-height');

      const width = cursorWidthAttribute
        ? parseInt(cursorWidthAttribute)
        : newElement.clientWidth;
      const height = cursorHeightAttribute
        ? parseInt(cursorHeightAttribute)
        : newElement.clientHeight;

      if (StikyElementType == 'stiky-element-default') {
        element.current = newElement;
        setCursorSize({
          width,
          height,
        });
      }

      if (StikyElementType == 'stiky-element-move') {
        element.current = newElement;
        setCursorSize({
          width: cursorWidthAttribute ? parseInt(cursorWidthAttribute) : 500,
          height: cursorHeightAttribute ? parseInt(cursorHeightAttribute) : 500,
          move: true,
        });
      }
    }

    if (StikyElementType == 'stiky-element-hidden') {
      element.current = null;
      setCursorSize({
        width: 20,
        height: 20,
        hidden: true,
      });
    }
  };

  const manageMouseLeave = (newElement: HTMLElement) => {
    setIsHovered(false);
    element.current = newElement;
    setCursorSize(defaultCursorSize);
  };

  React.useEffect(() => {
    const elementsDefault = document.querySelectorAll<HTMLElement>(
      '.stiky-element-default',
    );
    const elementsHidden = document.querySelectorAll<HTMLElement>(
      '.stiky-element-hidden',
    );
    const elementsMove = document.querySelectorAll<HTMLElement>(
      '.stiky-element-move',
    );

    function evenAction(eventName: 'mouseenter' | 'mouseleave') {
      const f = {
        mouseenter: manageMouseOver,
        mouseleave: manageMouseLeave,
      };
      return f[eventName];
    }

    const addEvent = (
      event: 'mouseenter' | 'mouseleave',
      element: HTMLElement,
      StikyElementType: StikyElementType,
    ) => {
      const manageMouse = evenAction(event);
      element.addEventListener(event, () =>
        manageMouse(element, StikyElementType),
      );
    };

    const removeEvent = (
      event: 'mouseenter' | 'mouseleave',
      element: HTMLElement,
    ) => {
      const manageMouse = evenAction(event);

      element.removeEventListener(event, () => manageMouse(element));
    };

    elementsDefault.forEach((element) => {
      addEvent('mouseenter', element, 'stiky-element-default');
      addEvent('mouseleave', element, 'stiky-element-default');
    });

    elementsHidden.forEach((element) => {
      addEvent('mouseenter', element, 'stiky-element-hidden');
      addEvent('mouseleave', element, 'stiky-element-hidden');
    });

    elementsMove.forEach((element) => {
      addEvent('mouseenter', element, 'stiky-element-move');
      addEvent('mouseleave', element, 'stiky-element-move');
    });

    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);

      elementsDefault.forEach((element) => {
        removeEvent('mouseenter', element);
        removeEvent('mouseleave', element);
      });

      elementsHidden.forEach((element) => {
        removeEvent('mouseenter', element);
        removeEvent('mouseleave', element);
      });

      elementsMove.forEach((element) => {
        removeEvent('mouseenter', element);
        removeEvent('mouseleave', element);
      });
    };
  });

  return (
    <AnimatePresence>
      {!cursorSize.hidden && !isMobile ? (
        <motion.div
          className="pointer-events-none absolute z-50 size-5 cursor-pointer rounded-full bg-white mix-blend-difference"
          style={{ left: smothMouse.x, top: smothMouse.y }}
          initial={{
            width: 40,
            height: 40,
            opacity: 0,
            filter: 'blur(10px)',
          }}
          animate={{
            width: cursorSize.width,
            height: cursorSize.height,
            opacity: 1,
            filter: cursorSize.move ? 'blur(5px)' : 'blur(0px)',
          }}
          exit={{
            width: 40,
            height: 40,
            opacity: 0,
            filter: 'blur(10px)',
            transition: { duration: 0.5 },
          }}
        ></motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default MouseCursor;
