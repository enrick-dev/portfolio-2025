import Magnetic from '@/magnetic';
import { FaArrowDown } from 'react-icons/fa';
import EncryptText from '../encrypt-text';

const SecIndex = () => {
  return (
    <section className="relative z-10 flex h-dvh min-h-[500px] w-full flex-col items-center justify-center px-20 py-28 max-md:px-7 max-md:py-14">
      <h1 className="max-xs:text-[2rem] stiky-element-move relative text-[9.5rem] font-medium leading-tight tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3rem]">
        <span className="bounds-2"></span>
        Fullstack Dev
      </h1>
      <h2 className="text-center text-2xl text-muted-foreground max-xl:text-xl max-lg:text-lg max-lg:leading-tight max-md:text-sm max-md:leading-tight">
        <span>
          Olá! Me chamo{' '}
          <EncryptText className="font-medium text-purple-700">
            Enrick Santos
          </EncryptText>
        </span>
        <br />
        <span>venha conhecer um pouco de mim</span>
      </h2>
      <article className="absolute bottom-0 flex w-full items-center justify-between px-20 py-10 max-md:px-7 max-md:py-8 max-md:text-sm">
        <Magnetic className="stiky-element-default">
          <div className="relative flex cursor-pointer items-center gap-4 px-4 py-2 font-medium tracking-tight">
            <span className="bounds-4"></span>
            <div className="size-fit">
              <FaArrowDown className="size-4" />
            </div>
            <span>Scroll para explorar</span>
          </div>
        </Magnetic>

        <p className="pointer-events-none font-medium">Projetos</p>
      </article>
    </section>
  );
};

export default SecIndex;
