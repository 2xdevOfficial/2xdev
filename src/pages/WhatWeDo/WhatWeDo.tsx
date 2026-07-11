import { WhatWeDoHero } from '../../components/whatWeDo/Hero/WhatWeDoHero';
import { ServiceDetailList } from '../../components/whatWeDo/ServiceDetail/ServiceDetailList';
import { WhatWeDoProcess } from '../../components/whatWeDo/Process/WhatWeDoProcess';
import { WhatWeDoTechStack } from '../../components/whatWeDo/TechStack/WhatWeDoTechStack';
import { WhatWeDoCTA } from '../../components/whatWeDo/CTA/WhatWeDoCTA';

export function WhatWeDo() {
  return (
    <>
      <WhatWeDoHero />
      <ServiceDetailList />
      <WhatWeDoProcess />
      <WhatWeDoTechStack />
      <WhatWeDoCTA />
    </>
  );
}
