import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home/Home';
import { WhatWeDo } from './pages/WhatWeDo/WhatWeDo';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { ComingSoon } from './pages/ComingSoon/ComingSoon';

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
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
