import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home/Home';
import { WhatWeDo } from './pages/WhatWeDo/WhatWeDo';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { ComingSoon } from './pages/ComingSoon/ComingSoon';
import { ServicePage } from './pages/Service/ServicePage';
import { servicePages } from './data/servicePages';
import { BlogIndex } from './pages/Blog/BlogIndex';
import { BlogPostPage } from './pages/Blog/BlogPostPage';
import { CaseStudyPage } from './pages/CaseStudy/CaseStudyPage';
import { blogPosts } from './data/blogPosts';
import { caseStudies } from './data/caseStudies';

/** Route table shared by the browser app (App.tsx) and the build-time prerenderer (entry-server.tsx). */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        {servicePages.map((service) => (
          <Route
            key={service.slug}
            path={`services/${service.slug}`}
            element={<ServicePage key={service.slug} slug={service.slug} />}
          />
        ))}
        {caseStudies.map((study) => (
          <Route
            key={study.slug}
            path={`projects/${study.slug}`}
            element={<CaseStudyPage key={study.slug} slug={study.slug} />}
          />
        ))}
        <Route path="blog" element={<BlogIndex />} />
        {blogPosts.map((post) => (
          <Route key={post.slug} path={`blog/${post.slug}`} element={<BlogPostPage key={post.slug} slug={post.slug} />} />
        ))}
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
