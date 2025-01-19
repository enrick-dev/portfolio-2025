import Logo from '@/assets/logo';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import HeaderNav from './header-nav';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
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
          <HeaderNav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div>
            <button
              style={{ boxShadow: 'inset 0 0 15px rgba(0,0,0,0.3)' }}
              className="rounded-3xl border-2 border-border px-5 py-2 font-medium"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
