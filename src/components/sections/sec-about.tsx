import AnimatedCounter from '@/components/animated-counter';
import EncryptText from '@/components/encrypt-text';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { motion } from 'motion/react';

const stats = [
  { value: 3, suffix: '+', label: 'anos de experiência' },
  // { value: 15, suffix: '+', label: 'projetos concluídos' },
  { value: 10, suffix: '+', label: 'tecnologias dominadas' },
];

const SecAbout = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation({ amount: 0.2 });
  const { ref: statsRef, isInView: statsInView } = useInViewAnimation({
    amount: 0.5,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-dvh w-full px-20 py-28 max-md:px-7 max-md:py-14"
    >
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        <h2 className="stiky-element-move relative text-right text-[9.5rem] font-medium leading-[0.9] tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3.5rem]">
          <span className="bounds-2"></span>
          Sobre
          <br />
          Mim<span className="text-purple-700">.</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex gap-20 max-lg:gap-10 max-md:mt-10 max-md:flex-col max-md:gap-8">
        <motion.div
          className="w-[55%] max-md:w-full"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="text-xl leading-relaxed text-muted-foreground max-lg:text-lg max-md:text-base">
            Sou um desenvolvedor{' '}
            <EncryptText className="font-medium text-purple-700">
              Fullstack
            </EncryptText>{' '}
            apaixonado por criar experiências digitais que combinam design e
            performance. Trabalho com{' '}
            <EncryptText className="font-medium text-foreground">
              React
            </EncryptText>
            ,{' '}
            <EncryptText className="font-medium text-foreground">
              Next.js
            </EncryptText>
            ,{' '}
            <EncryptText className="font-medium text-foreground">
              Node.js
            </EncryptText>{' '}
            e diversas outras tecnologias para transformar ideias em produtos
            reais. Acredito que o código deve ser tão elegante quanto a
            interface que ele cria.
          </p>

          <motion.blockquote
            className="mt-12 border-l-2 border-purple-700 pl-6 text-2xl font-light italic leading-snug tracking-tight max-md:mt-8 max-md:text-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            &quot;Transformo ideias em código que importa.&quot;
          </motion.blockquote>
        </motion.div>

        <div
          ref={statsRef}
          className="flex w-[40%] flex-col justify-center gap-10 max-md:w-full max-md:flex-row max-md:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stiky-element-default relative cursor-default w-fit"
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <span className="bounds-3"></span>
              <div className="text-[5rem] font-bold leading-none tracking-tighter max-xl:text-[4rem] max-lg:text-[3rem] max-md:text-[2.5rem]">
                {statsInView ? (
                  <AnimatedCounter from={0} to={stat.value} />
                ) : (
                  '0'
                )}
                <span className="text-purple-700">{stat.suffix}</span>
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-muted-foreground max-md:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecAbout;
