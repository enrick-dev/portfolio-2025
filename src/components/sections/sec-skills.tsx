import EncryptText from '@/components/encrypt-text';
import Marquee from '@/components/marquee';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import Magnetic from '@/magnetic';
import { motion } from 'motion/react';
import React from 'react';
import { IconType } from 'react-icons';
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

type Skill = {
  name: string;
  icon: IconType;
  hoverBg: string;
};

const skills: Skill[] = [
  { name: 'React', icon: SiReact, hoverBg: 'rgba(6,182,212,0.1)' },
  { name: 'Next.js', icon: SiNextdotjs, hoverBg: 'rgba(23,23,23,0.1)' },
  { name: 'TypeScript', icon: SiTypescript, hoverBg: 'rgba(37,99,235,0.1)' },
  { name: 'Node.js', icon: SiNodedotjs, hoverBg: 'rgba(22,163,74,0.1)' },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    hoverBg: 'rgba(20,184,166,0.1)',
  },
  { name: 'PostgreSQL', icon: SiPostgresql, hoverBg: 'rgba(30,64,175,0.1)' },
  { name: 'Docker', icon: SiDocker, hoverBg: 'rgba(59,130,246,0.1)' },
  { name: 'Git', icon: SiGit, hoverBg: 'rgba(234,88,12,0.1)' },
  { name: 'Figma', icon: SiFigma, hoverBg: 'rgba(168,85,247,0.1)' },
  { name: 'Python', icon: SiPython, hoverBg: 'rgba(234,179,8,0.1)' },
  { name: 'MongoDB', icon: SiMongodb, hoverBg: 'rgba(21,128,61,0.1)' },
  { name: 'AWS', icon: FaAws, hoverBg: 'rgba(251,146,60,0.1)' },
];

const firstRow = skills.slice(0, 6);
const secondRow = skills.slice(6);

const MarqueeItem = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-3 rounded-full border border-muted-foreground/20 px-6 py-3 max-md:px-4 max-md:py-2">
      <Icon className="size-6 max-md:size-4" />
      <span className="text-lg font-medium max-md:text-sm">{skill.name}</span>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Magnetic className="stiky-element-default">
      <motion.div
        className="relative flex cursor-default flex-col items-center justify-center gap-3 rounded-lg border border-muted-foreground/20 px-6 py-8 max-md:px-4 max-md:py-6"
        animate={{
          backgroundColor: isHovered ? skill.hoverBg : 'rgba(0,0,0,0)',
          borderColor: isHovered
            ? 'rgba(0,0,0,0)'
            : 'rgba(107,107,107,0.2)',
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="bounds-3"></span>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="size-10 max-md:size-7" />
        </motion.div>
        <EncryptText className="text-sm font-medium tracking-wide">
          {skill.name}
        </EncryptText>
      </motion.div>
    </Magnetic>
  );
};

const SecSkills = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation({ amount: 0.15 });
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh w-full overflow-hidden py-28 max-md:py-14"
    >
      <motion.div
        className="px-20 max-md:px-7"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        <h2 className="stiky-element-move relative text-[9.5rem] font-medium leading-[0.9] tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3.5rem]">
          <span className="bounds-2"></span>
          Tecno-
          <br />
          logias<span className="text-purple-700">.</span>
        </h2>
      </motion.div>

      <div className="mt-16 space-y-4 max-md:mt-10 max-md:space-y-2">
        <Marquee speed={25}>
          {firstRow.map((skill) => (
            <MarqueeItem key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee speed={25} reverse>
          {secondRow.map((skill) => (
            <MarqueeItem key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </div>

      <div
        ref={gridRef}
        className="mt-16 grid grid-cols-4 gap-4 px-20 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3 max-md:px-7"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={gridInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecSkills;
