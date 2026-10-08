import { Hero } from '../../components/home/Hero/Hero';
import { LogoMarquee } from '../../components/home/LogoMarquee/LogoMarquee';
import { Stats } from '../../components/home/Stats/Stats';
import { Services } from '../../components/home/Services/Services';
import { TechStack } from '../../components/home/TechStack/TechStack';
import { Projects } from '../../components/home/Projects/Projects';
import { Process } from '../../components/home/Process/Process';
import { Testimonials } from '../../components/home/Testimonials/Testimonials';
import { WhyUs } from '../../components/home/WhyUs/WhyUs';
import { CTA } from '../../components/home/CTA/CTA';
import { Seo } from '../../components/seo/Seo';

export function Home() {
  return (
    <>
      <Seo page="home" />
      <Hero />
      <LogoMarquee />
      <Stats />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <Testimonials />
      <WhyUs />
      <CTA />
    </>
  );
}
