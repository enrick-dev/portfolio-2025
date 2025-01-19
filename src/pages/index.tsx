import Header from '@/components/header/header-app';
import MouseCursor from '@/components/mouse-cursor';
import Preloader from '@/components/preloader';
import SecIndex from '@/components/sections/sec-index';
import SecProjects from '@/components/sections/sec-projects';
import { useRef } from 'react';

export default function Home() {
  const styckyElement = useRef<HTMLDivElement>(null!);
  return (
    <div className="text-primary bg-foreground">
      <MouseCursor styckyElement={styckyElement} />
      <Preloader className="flex flex-col items-center">
        <Header className="fixed top-0 z-10 w-full" />
        <SecIndex ref={styckyElement} />
        <hr className="bg-muted-foreground/20 h-0.5 w-full" />
        <SecProjects />
      </Preloader>
    </div>
  );
}
