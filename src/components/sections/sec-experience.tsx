import EncryptText from '@/components/encrypt-text';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { motion } from 'motion/react';

type Role = {
  title: string;
  period: string;
  description: string[];
};

type Experience = {
  company: string;
  type: string;
  location: string;
  roles: Role[];
};

const experiences: Experience[] = [
  {
    company: 'MASP',
    type: 'Tempo integral',
    location: 'São Paulo, SP · Híbrida',
    roles: [
      {
        title: 'Desenvolvedor Full Stack Pleno',
        period: 'mar 2025 — presente',
        description: [
          'Contribuo no desenvolvimento da bilheteria MASP com AWS Lambda e Serverless Framework',
          'Adição de soluções de cache com Redis como Rate Limiter, filas com SQS e Lambda, banco de dados PostgreSQL e gestão de usuários com Cognito',
          'Aplicativo de checkin com React Native CLI, filas offiline com sqlite, geração de bundles e lançamento na Google Play Store',
          "Criação de login com Whatsapp Business API (API oficial)",
          "Manutenção de pinpad (maquininha de pagamentos do Itaú) e integrado ao sistema do MASP"
        ],
      },
    ],
  },
  {
    company: 'Corelab',
    type: 'Autônomo',
    location: 'Remota',
    roles: [
      {
        title: 'Desenvolvedor Full Stack Pleno',
        period: 'ago 2025 — out 2025',
        description: [
          'Atuei no MVP de um projeto utilizando AdonisJS, Docker, AWS S3, Sass, React e Redux',
          'Criação de integração multi plataforma',
          'Integração com Jitsi Meet para ligações ao vivo',
        ],
      },
    ],
  },
  {
    company: 'Make Acelerador de Vendas',
    type: 'Tempo integral',
    location: 'São Bernardo do Campo, SP · Presencial',
    roles: [
      {
        title: 'Desenvolvedor Full Stack Pleno',
        period: 'jan 2024 — fev 2025',
        description: [
          'Arquitetura e desenvolvimento de CRM com dados em tempo real usando WebSockets e NestJS',
          'Implantação de pipelines CI/CD e deploy utilizando containers Docker no Google Cloud Platform (GCP)',
          'Refatoração de sistema legado para TypeScript, melhorando performance e manutenção',
          'Integração de APIs RESTful e otimização de queries em PostgreSQL para consultas de alta demanda',
        ],
      },
      {
        title: 'Desenvolvedor Front-end Junior',
        period: 'jul 2023 — dez 2023',
        description: [
          'Concepção e implementação de landing pages responsivas a partir de protótipos UI/UX, com foco em SEO e performance',
          'Aumento da taxa de conversão por meio de otimizações de JavaScript, Bootstrap e HTML/CSS',
          'Desenvolvimento e manutenção de sites institucionais e blogs, garantindo padrões de acessibilidade',
        ],
      },
    ],
  },
  {
    company: 'Autônomo',
    type: 'Freelancer',
    location: 'Remota',
    roles: [
      {
        title: 'Desenvolvedor Full Stack Junior',
        period: 'jan 2023 — jun 2023',
        description: [
          'Manutenção de sistemas, implementação de novas funcionalidades e ajuste de bugs para melhorar performance e experiência do usuário',
          'Projeto de cardápio digital — manutenção no site e desenvolvimento de novas funcionalidades garantindo escalabilidade e eficiência',
        ],
      },
    ],
  },
];

const SecExperience = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation({ amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh w-full px-20 py-28 max-md:px-7 max-md:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        <h2 className="stiky-element-move relative text-[9.5rem] font-medium leading-[0.9] tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3.5rem]">
          <span className="bounds-2"></span>
          Experiência<span className="text-purple-700">.</span>
        </h2>
      </motion.div>

      <div className="mt-20 max-md:mt-10">
        {experiences.map((exp, expIndex) => (
          <ExperienceCard key={expIndex} experience={exp} index={expIndex} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const { ref, isInView } = useInViewAnimation({ amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="group/exp border-t border-muted-foreground/20 py-12 max-md:py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      <div className="flex gap-20 max-lg:gap-10 max-md:flex-col max-md:gap-4">
        <div className="w-[35%] shrink-0 max-md:w-full">
          <h3 className="stiky-element-default relative text-3xl font-semibold tracking-tight max-lg:text-2xl max-md:text-xl">
            <span className="bounds-3"></span>
            <EncryptText>{experience.company}</EncryptText>
          </h3>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {experience.type}
          </p>
          <p className="text-sm text-muted-foreground">{experience.location}</p>
        </div>

        <div className="flex-1 space-y-8 max-md:space-y-6">
          {experience.roles.map((role, roleIndex) => (
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + roleIndex * 0.15,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <div className="flex items-baseline justify-between gap-4 max-md:flex-col max-md:gap-1">
                <h4 className="text-xl font-semibold tracking-tight max-md:text-lg">
                  {role.title}
                </h4>
                <span className="shrink-0 text-sm font-medium tracking-wide text-purple-700 max-md:text-xs">
                  {role.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {role.description.map((desc, descIndex) => (
                  <motion.li
                    key={descIndex}
                    className="flex gap-3 text-base leading-relaxed text-muted-foreground max-md:text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + roleIndex * 0.15 + descIndex * 0.08,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-purple-700" />
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SecExperience;
