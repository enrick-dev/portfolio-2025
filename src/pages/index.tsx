import Logo from '@/assets/logo';
import Navbar from '@/components/navbar/nav-app';
import Preloader from '@/components/preloader';
import TextScramble from '@/components/text-scramble';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-foreground">
      <Preloader className="flex flex-col items-center ">
        <header className="fixed top-0 w-full">
          <div className="relative size-full py-10 px-20">
            <div
              className="absolute bg-background size-full top-0 left-0"
              style={{
                maskImage: 'linear-gradient(rgb(235, 235, 235), transparent)',
              }}
            ></div>

            <div className="flex items-center  justify-between gap-4 z-10 relative">
              <Link href="/">
                <Logo className="w-10" />
              </Link>
              <Navbar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div>
                <button className="rounded-3xl px-5 py-2 font-medium border-2 border-border">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="py-28 px-20">
          <h1 className="text-geist-sans text-4xl ">Hello, World</h1>
        </section>
        <section style={{ height: '9900px' }} className=" bg-red-200"></section>
      </Preloader>
    </div>
  );
}
