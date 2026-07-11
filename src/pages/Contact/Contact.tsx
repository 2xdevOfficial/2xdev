import { ContactHero } from '../../components/contact/Hero/ContactHero';
import { FormSection } from '../../components/contact/FormSection/FormSection';
import { Faq } from '../../components/contact/Faq/Faq';

export function Contact() {
  return (
    <>
      <ContactHero />
      <FormSection />
      <Faq />
    </>
  );
}
