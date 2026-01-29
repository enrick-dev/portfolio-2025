import Logo from '@/assets/logo';
import EncryptText from '@/components/encrypt-text';
import FlipLink from '@/components/flip-link';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import Magnetic from '@/magnetic';
import { motion } from 'motion/react';
import { FaArrowRight } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Email',
    value: 'enrick@email.com',
    href: 'mailto:enrick@email.com',
  },
  {
    label: 'LinkedIn',
    value: '/in/enrick-santos',
    href: 'https://linkedin.com/in/enrick-santos',
  },
  {
    label: 'GitHub',
    value: '/enricksantos',
    href: 'https://github.com/enricksantos',
  },
];

const SecContact = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation({ amount: 0.15 });
  const { ref: formRef, isInView: formInView } = useInViewAnimation({
    amount: 0.3,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-foreground text-background"
    >
      <div className="min-h-dvh px-20 py-28 max-md:px-7 max-md:py-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <h2 className="stiky-element-move relative inline-block text-[9.5rem] font-medium leading-[0.9] tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3rem]">
            <span className="bounds-2"></span>
            Vamos
            <br />
            Conversar<span className="text-purple-700">?</span>
          </h2>
        </motion.div>

        <div className="mt-20 flex gap-20 max-lg:gap-10 max-md:mt-12 max-md:flex-col max-md:gap-12">
          <motion.div
            className="w-1/2 space-y-10 max-md:w-full max-md:space-y-6"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.15,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] opacity-50">
                  {link.label}
                </p>
                <FlipLink
                  href={link.href}
                  className="stiky-element-default text-3xl font-semibold tracking-tight max-lg:text-2xl max-md:text-xl"
                >
                  {link.value}
                </FlipLink>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            ref={formRef}
            className="w-1/2 space-y-6 max-md:w-full"
            initial={{ opacity: 0, x: 60 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.33, 1, 0.68, 1],
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.3em] opacity-50">
                Nome
              </label>
              <input
                type="text"
                className="contact-input w-full border-b border-background/20 bg-transparent py-3 text-lg text-background outline-none transition-colors duration-300 placeholder:text-background/30 focus:border-purple-700"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.3em] opacity-50">
                Email
              </label>
              <input
                type="email"
                className="contact-input w-full border-b border-background/20 bg-transparent py-3 text-lg text-background outline-none transition-colors duration-300 placeholder:text-background/30 focus:border-purple-700"
                placeholder="Seu email"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-[0.3em] opacity-50">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="contact-input w-full resize-none border-b border-background/20 bg-transparent py-3 text-lg text-background outline-none transition-colors duration-300 placeholder:text-background/30 focus:border-purple-700"
                placeholder="Sua mensagem"
              />
            </div>

            <Magnetic>
              <motion.button
                type="submit"
                className="stiky-element-hidden group relative mt-4 flex items-center gap-4 rounded-full border-2 border-background/30 px-8 py-4 font-medium transition-all duration-500 hover:bg-background hover:text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                <span className="bounds-4"></span>
                <span>Enviar mensagem</span>
                <span className="rounded-full bg-purple-700 p-2 transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight className="size-4 text-background" />
                </span>
              </motion.button>
            </Magnetic>
          </motion.form>
        </div>
      </div>

      <footer className="border-t border-background/10 px-20 py-8 max-md:px-7">
        <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:text-center">
          <Logo className="w-8 [&_path]:fill-background" />
          <p className="text-sm opacity-50">
            <EncryptText>
              {`© ${new Date().getFullYear()} Enrick Santos. Todos os direitos reservados.`}
            </EncryptText>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default SecContact;
