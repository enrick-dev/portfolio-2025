import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const navLinks = [
  { title: 'Index', href: '/' },
  { title: 'Projetos', href: '#projects' },
  { title: 'Sobre mim', href: '#about' },
  { title: 'Me contate', href: '#contact' },
];

const socialLinks = [
  { title: 'LinkedIn', href: 'https://linkedin.com/in/enrick-santos' },
  { title: 'GitHub', href: 'https://github.com/enricksantos' },
];

const menuVariants = {
  open: {
    width: '320px',
    height: '420px',
    top: '-12px',
    right: '-12px',
    transition: {
      duration: 0.75,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: '80px',
    height: '36px',
    top: '0px',
    right: '0px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'linear',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative hidden max-md:block">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-foreground"
        variants={menuVariants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav closeMenu={() => setIsActive(false)} />}
        </AnimatePresence>
      </motion.div>

      <button
        className="absolute right-0 top-0 z-10 flex h-9 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-2xl"
        onClick={() => setIsActive(!isActive)}
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ top: isActive ? '-100%' : '0%' }}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="flex h-full w-full items-center justify-center bg-foreground text-xs font-medium uppercase text-background">
            Menu
          </div>
          <div className="flex h-full w-full items-center justify-center bg-purple-700 text-xs font-medium uppercase text-background">
            Fechar
          </div>
        </motion.div>
      </button>
    </div>
  );
};

const Nav = ({ closeMenu }: { closeMenu: () => void }) => {
  const handleClick = (href: string) => {
    closeMenu();
    if (href.startsWith('#')) {
      setTimeout(() => {
        document.getElementById(href.slice(1))?.scrollIntoView();
      }, 800);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between px-8 pb-8 pt-16">
      <div className="flex flex-col gap-2">
        {navLinks.map((link, i) => (
          <div
            key={`nav_${i}`}
            style={{ perspective: '120px', perspectiveOrigin: 'bottom' }}
          >
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="block text-4xl font-medium tracking-tight text-background"
              >
                {link.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {socialLinks.map((link, i) => (
          <motion.a
            key={`social_${i}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-sm font-medium text-background/50 transition-colors hover:text-background"
          >
            {link.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
