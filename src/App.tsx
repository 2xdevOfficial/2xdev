import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home/Home';
import { WhatWeDo } from './pages/WhatWeDo/WhatWeDo';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { ComingSoon } from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
