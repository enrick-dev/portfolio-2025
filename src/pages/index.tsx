import Header from '@/components/header/header-app';
import MouseCursor from '@/components/mouse-cursor';
import Preloader from '@/components/preloader';
import SecIndex from '@/components/sections/sec-index';
import SecProjects from '@/components/sections/sec-projects';

export default function Home() {
  return (
    <div className="relative">
      <MouseCursor />
      <Preloader className="flex flex-col items-center">
        <Header className="fixed top-0 z-20 w-full" />
        <SecIndex />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecProjects />
      </Preloader>
    </div>
  );
}
