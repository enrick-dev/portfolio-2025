import Magnetic from '@/magnetic';
import { motion } from 'motion/react';
import React from 'react';
import {
  FaCode,
  FaGraduationCap,
  FaHeart,
  FaLocationArrow,
} from 'react-icons/fa';
import EncryptText from '../encrypt-text';

const skills = [
  { name: 'React/Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 95 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'MongoDB', level: 80 },
];

const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Fullstack',
    company: 'Empresa Atual',
    period: '2023 - Presente',
    description:
      'Desenvolvimento de aplicações web completas usando React, Next.js e Node.js',
    icon: <FaCode className="size-5" />,
  },
  {
    id: 2,
    role: 'Formação Acadêmica',
    company: 'Universidade/Curso',
    period: '2020 - 2023',
    description: 'Graduação em área relacionada à tecnologia',
    icon: <FaGraduationCap className="size-5" />,
  },
];

const SecAbout = () => {
  const [activeSkill, setActiveSkill] = React.useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.5,
      },
    }),
  };

  return (
    <section className="w-full px-20 py-28 max-md:px-7 max-md:py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        {/* Header */}
        <motion.header
          variants={itemVariants}
          className="mb-16 text-center max-md:mb-12"
        >
          <h2 className="mb-4 text-6xl font-semibold tracking-tight text-purple-700 max-xl:text-5xl max-lg:text-4xl max-md:text-3xl">
            <EncryptText>Quem sou eu</EncryptText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground max-md:text-base">
            Desenvolvedor apaixonado por criar experiências digitais incríveis
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-16 max-md:gap-12 lg:grid-cols-2">
          {/* Informações pessoais */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold tracking-tight max-md:text-xl">
              <EncryptText className="text-purple-700">Quem sou eu</EncryptText>
            </h3>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground max-md:text-base">
                Sou um desenvolvedor fullstack com paixão por criar soluções
                inovadoras e funcionais. Tenho experiência em desenvolvimento
                web moderno, sempre buscando as melhores práticas e tecnologias
                mais recentes.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground max-md:text-base">
                Minha jornada na programação começou com curiosidade e se
                transformou em uma carreira dedicada a resolver problemas
                complexos através do código.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Magnetic>
                  <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-muted px-4 py-2 font-medium transition-colors hover:bg-purple-700 hover:text-white">
                    <FaLocationArrow className="size-4" />
                    <span>Brasil</span>
                  </div>
                </Magnetic>

                <Magnetic>
                  <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-muted px-4 py-2 font-medium transition-colors hover:bg-purple-700 hover:text-white">
                    <FaHeart className="size-4" />
                    <span>Disponível para projetos</span>
                  </div>
                </Magnetic>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold tracking-tight max-md:text-xl">
              <EncryptText className="text-purple-700">Habilidades</EncryptText>
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-2"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full bg-purple-700 transition-all duration-300"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillBarVariants}
                      custom={skill.level}
                      style={{
                        filter:
                          activeSkill === index
                            ? 'brightness(1.2)'
                            : 'brightness(1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experiências */}
        <motion.div variants={itemVariants} className="mt-20 max-md:mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold tracking-tight max-md:text-xl">
            <EncryptText className="text-purple-700">Experiência</EncryptText>
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {experiences.map((exp) => (
              <Magnetic key={exp.id}>
                <motion.article
                  variants={itemVariants}
                  className="group cursor-pointer rounded-lg border border-muted bg-background p-6 transition-all hover:border-purple-700 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-purple-700 text-white transition-colors group-hover:bg-purple-600">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="mb-3 text-sm font-medium text-purple-700">
                    {exp.period}
                  </p>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </motion.article>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecAbout;
