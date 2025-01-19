import Logo from '@/assets/logo';
import Navbar from '@/components/navbar/nav-app';
import Preloader from '@/components/preloader';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-primary bg-foreground">
      <Preloader className="flex flex-col items-center">
        <header className="fixed top-0 w-full">
          <div className="relative size-full px-20 py-10">
            <div
              className="absolute left-0 top-0 size-full bg-background"
              style={{
                maskImage: 'linear-gradient(rgb(235, 235, 235), transparent)',
              }}
            ></div>

            <div className="relative z-10 flex items-center justify-between gap-4">
              <Link href="/">
                <Logo className="w-10" />
              </Link>
              <Navbar className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div>
                <button className="rounded-3xl border-2 border-border px-5 py-2 font-medium">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="flex h-dvh min-h-[500px] w-full flex-col items-center justify-center px-20 py-28 max-md:px-7 max-md:py-14">
          <div>
            <h1 className="max-xs:text-[2rem] text-[9.5rem] font-medium leading-tight tracking-tight max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[3rem]">
              Fullstack Dev
            </h1>
            <h2 className="text-muted-foreground text-center text-2xl max-xl:text-xl max-lg:text-lg max-lg:leading-tight max-md:text-sm max-md:leading-tight">
              <span>
                Olá! Me chamo{' '}
                <span className="font-medium text-purple-700">
                  Enrick Santos
                </span>
              </span>{' '}
              <br />
              <span>venha conhecer um pouco de mim</span>
            </h2>
          </div>
        </section>
        <section style={{ height: '9900px' }} className="bg-red-200"></section>
      </Preloader>
    </div>
  );
}
