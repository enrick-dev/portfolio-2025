import { FaArrowDown } from 'react-icons/fa';

const SecIndex = () => {
  return (
    <section className="relative flex h-dvh min-h-[500px] w-full flex-col items-center justify-center px-20 py-28 max-md:px-7 max-md:py-14">
      <h1 className="max-xs:text-[2rem] text-[9.5rem] font-medium leading-tight tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3rem]">
        Fullstack Dev
      </h1>
      <h2 className="text-muted-foreground text-center text-2xl max-xl:text-xl max-lg:text-lg max-lg:leading-tight max-md:text-sm max-md:leading-tight">
        <span>
          Olá! Me chamo{' '}
          <span className="font-medium text-purple-700">Enrick Santos</span>
        </span>
        <br />
        <span>venha conhecer um pouco de mim</span>
      </h2>
      <article className="absolute bottom-0 flex w-full items-center justify-between px-20 py-10">
        <button className="flex items-center gap-4 font-medium tracking-tight">
          <FaArrowDown className="size-4" />
          <span>Scroll para explorar</span>
        </button>
        <p className="pointer-events-none font-medium">Projetos</p>
      </article>
    </section>
  );
};

export default SecIndex;
