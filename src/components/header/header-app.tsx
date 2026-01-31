import Logo from '@/assets/logo';
import Magnetic from '@/magnetic';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import HeaderNav from './header-nav';
import MobileMenu from './mobile-menu';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div className="relative size-full px-20 py-10 max-md:px-7 max-md:py-8">
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
          <HeaderNav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden" />
          <div className="max-md:hidden">
            <Magnetic>
              <a
                href="/enrick_santos_fullstack_pleno.pdf"
                download
                style={{ boxShadow: 'inset 0 0 15px rgba(0,0,0,0.3)' }}
                className="stiky-element-hidden group relative rounded-3xl border-2 border-border bg-background px-5 py-2 font-medium transition-all duration-500 ease-out hover:bg-foreground hover:pr-12 hover:text-muted"
              >
                <span className="bounds-4"></span>

                <span>Download CV</span>
                <span className="absolute right-0.5 top-1/2 -translate-y-1/2 scale-0 rounded-full bg-yellow-300 p-2.5 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <FaArrowDown className="size-4 text-primary" />
                </span>
              </a>
            </Magnetic>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
