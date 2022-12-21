import { Route, Routes } from 'react-router-dom';

import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import { Projects } from '../pages/Projects';
import { Technologies } from '../pages/Technologies';
import { Welcome } from '../pages/Welcome';

export const Main = () => {
  return (
    <main className="container mx-auto min-h-[calc(100vh-80px-32px)] max-w-[80%] bg-white pt-12 pb-20 lg:min-h-[calc(100vh-96px-36px)] lg:max-w-[70%] lg:pt-16">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<Welcome />} />
      </Routes>
    </main>
  );
};
