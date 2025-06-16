import { useState } from 'react';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { FloatingNav } from '@/components/ui/floating-nav';
import { Particles } from '@/components/ui/particles';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <ScrollProgress />
          <FloatingNav />
          <Particles />
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
