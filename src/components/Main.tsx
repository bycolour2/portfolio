import { Route, Routes } from 'react-router-dom';

import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import { Projects } from '../pages/Projects';
import { TechStack } from '../pages/TechStack';
import { Welcome } from '../pages/Welcome';

export const Main = () => {
  return (
    <main className="bg-black">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<Welcome />} />
      </Routes>
    </main>
  );
};
