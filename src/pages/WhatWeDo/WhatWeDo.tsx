import { WhatWeDoHero } from '../../components/whatWeDo/Hero/WhatWeDoHero';
import { ServiceDetailList } from '../../components/whatWeDo/ServiceDetail/ServiceDetailList';
import { WhatWeDoProcess } from '../../components/whatWeDo/Process/WhatWeDoProcess';
import { WhatWeDoTechStack } from '../../components/whatWeDo/TechStack/WhatWeDoTechStack';
import { WhatWeDoCTA } from '../../components/whatWeDo/CTA/WhatWeDoCTA';
import { Seo } from '../../components/seo/Seo';

export function WhatWeDo() {
  return (
    <>
      <Seo page="whatWeDo" />
      <WhatWeDoHero />
      <ServiceDetailList />
      <WhatWeDoProcess />
      <WhatWeDoTechStack />
      <WhatWeDoCTA />
    </>
  );
}
