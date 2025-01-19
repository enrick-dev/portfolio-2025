import Header from '@/components/header/header-app';
import MouseCursor from '@/components/mouse-cursor';
import Preloader from '@/components/preloader';
import SecIndex from '@/components/sections/sec-index';
import SecProjects from '@/components/sections/sec-projects';

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const translateY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="relative">
      {/* <motion.div style={{ y: translateY, height: '100vh' }}> */}
      <MouseCursor />
      <Preloader className="flex flex-col items-center">
        <Header className="fixed top-0 z-20 w-full" />
        <SecIndex />
        <hr className="h-0.5 w-full bg-muted-foreground/20" />
        <SecProjects />
      </Preloader>
      {/* </motion.div> */}
    </div>
  );
}
