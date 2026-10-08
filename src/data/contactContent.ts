import type { Faq, InfoCard } from '../types/contact';

export const serviceChips: string[] = [
  'Custom website',
  'E-commerce / Shopify',
  'Startup / MVP',
  'Management system',
  'CMS / WordPress',
  'API & integrations',
];

export const infoCards: InfoCard[] = [
  { icon: '✉️', title: 'Email us', value: 'support@2xdev.com', href: 'mailto:support@2xdev.com' },
  { icon: '📞', title: 'Call us', value: '+447368165714', href: 'tel:+447368165714' },
  { icon: '📍', title: 'Where we are', value: 'United Kingdom · remote-first', href: '#form' },
  { icon: '🕑', title: 'Office hours', value: 'Mon–Fri, 9:00–18:00 GMT', href: '#form' },
];

export const faqs: Faq[] = [
  {
    q: 'How quickly can you start?',
    a: 'For most projects we can kick off within one to two weeks. Smaller builds and MVPs can often begin sooner — get in touch and we’ll confirm current availability.',
  },
  {
    q: 'How do you price projects?',
    a: 'We scope each project up front and give you a fixed, itemised quote. No hourly surprises — you know the cost and timeline before we write any code.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Angular, React, Laravel and Node on the app side; Shopify, WordPress and Square for stores and CMS; MySQL, MongoDB and Firebase for data. We pick the stack that fits your product.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. After launch we offer maintenance, monitoring and iteration retainers so your product keeps improving — support that outlasts go-live.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We can augment your in-house team, take a project end to end, or anything in between. Weekly demos and direct access to engineers throughout.',
  },
];
