import { useIsMobile } from '@/utils/use-mobile';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Em breve',
    description: 'Em breve será adicionado um projeto aqui',
    tag: '',
    year: '2025',
    image: '',
    link: '',
    background: 'bg-yellow-700',
  },
  {
    id: 2,
    title: 'Em breve',
    description: 'Em breve será adicionado um projeto aqui',
    tag: '',
    year: '',
    image: '',
    link: '',
    background: 'bg-red-700',
  },
  {
    id: 3,
    title: 'Em breve',
    description: 'Em breve será adicionado um projeto aqui',
    tag: '',
    year: '',
    image: '',
    link: '',
    background: 'bg-purple-700',
  },
];
const SecProjects = () => {
  const [activeProject, setActiveProject] = React.useState<number | null>(2);

  const isMobile = useIsMobile();

  const isActiveProject = (id: number) => {
    if (activeProject == id) return;
    setActiveProject(id);
  };

  const isProjectActive = (id: number) => activeProject == id || isMobile;
  return (
    <section className="flex w-full gap-20 px-20 py-28 max-xl:gap-14 max-lg:gap-10 max-md:flex-col max-md:gap-7 max-md:px-7 max-md:py-8">
      {projects.map((project, index) => (
        <motion.article
          key={index}
          initial={{ width: !isMobile ? '22%' : '100%' }}
          animate={{
            width:
              (!isMobile && (isProjectActive(project.id) ? '56%' : '22%')) ||
              '100%',
          }}
        >
          <figure className="relative space-y-5 max-md:space-y-2">
            <div
              className={`relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg px-5 transition-all max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] ${project.background} cursor-pointer`}
              onMouseEnter={() => isActiveProject(project.id)}
              onMouseMove={() => isActiveProject(project.id)}
            >
              <AnimatePresence>
                {isProjectActive(project.id) && project.year ? (
                  <motion.span
                    {...{
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.1, ease: [0.33, 1, 0.68, 1] },
                      },
                      exit: {
                        opacity: 0,
                      },
                    }}
                    className="text-muted absolute left-3 top-3 rounded-lg bg-foreground px-2 py-1 text-xs"
                  >
                    {project.year}
                  </motion.span>
                ) : null}
              </AnimatePresence>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  className="size-full"
                />
              ) : (
                <p className="text-muted text-center font-medium opacity-80">
                  {isProjectActive(project.id) ? project.description : ''}
                </p>
              )}
            </div>
            <AnimatePresence>
              {isProjectActive(project.id) && project.title ? (
                <motion.figcaption
                  className="pointer-events-none flex items-center justify-between gap-3"
                  {...{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
                    },
                    exit: {
                      opacity: 0,
                    },
                  }}
                >
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium">{project.tag}</span>
                </motion.figcaption>
              ) : null}
            </AnimatePresence>
          </figure>
        </motion.article>
      ))}
    </section>
  );
};

export default SecProjects;
