import { ContactHero } from '../../components/contact/Hero/ContactHero';
import { FormSection } from '../../components/contact/FormSection/FormSection';
import { Faq } from '../../components/contact/Faq/Faq';
import { Seo } from '../../components/seo/Seo';

export function Contact() {
  return (
    <>
      <Seo page="contact" />
      <ContactHero />
      <FormSection />
      <Faq />
    </>
  );
}
