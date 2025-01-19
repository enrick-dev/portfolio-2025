import Header from '@/components/header/header-app';
import Preloader from '@/components/preloader';
import SecIndex from '@/components/sections/sec-index';
import SecProjects from '@/components/sections/sec-projects';

export default function Home() {
  return (
    <div className="text-primary bg-foreground">
      <Preloader className="flex flex-col items-center">
        <Header className="fixed top-0 z-10 w-full" />
        <SecIndex />
        <hr className="bg-muted-foreground/20 h-0.5 w-full" />
        <SecProjects />
      </Preloader>
    </div>
  );
}
