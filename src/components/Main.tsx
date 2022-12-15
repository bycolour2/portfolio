import { Route, Routes } from 'react-router-dom';

import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import { Projects } from '../pages/Projects';
import { Technologies } from '../pages/Technologies';
import { Welcome } from '../pages/Welcome';

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/*" element={<Welcome />} />
    </Routes>
  );
};
