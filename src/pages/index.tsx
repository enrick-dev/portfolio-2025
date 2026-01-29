import Header from '@/components/header/header-app';
import MouseCursor from '@/components/mouse-cursor';
import Preloader from '@/components/preloader';
import SecAbout from '@/components/sections/sec-about';
import SecContact from '@/components/sections/sec-contact';
import SecExperience from '@/components/sections/sec-experience';
import SecIndex from '@/components/sections/sec-index';
import SecProjects from '@/components/sections/sec-projects';
import SecSkills from '@/components/sections/sec-skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Enrick Santos</title>
      </Head>
      <MouseCursor />
      <Preloader className="flex flex-col items-center">
        <Header className="fixed top-0 z-20 w-full" />
        <SecIndex />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecProjects />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecAbout />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecExperience />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecSkills />
        <SecContact />
      </Preloader>
    </div>
  );
}
