import CRA from '../assets/images/CRA-logo.png';
import CSS3 from '../assets/images/CSS3-logo.png';
import Git from '../assets/images/Git-logo.png';
import GitHub from '../assets/images/github-logo.png';
import HelloPangea from '../assets/images/hello-pangea_dnd-logo.png';
import HTML5 from '../assets/images/HTML5-logo.png';
import JavaScript from '../assets/images/JavaScript-logo.png';
import Npm from '../assets/images/Npm-logo.png';
import Postman from '../assets/images/postman-logo.png';
import React from '../assets/images/React-logo.png';
import Redux from '../assets/images/redux-logo.png';
import Tailwind from '../assets/images/Tailwind_CSS-logo.png';
import Typescript from '../assets/images/Typescript_logo.svg';
import Vite from '../assets/images/vite-logo.png';
import VSCode from '../assets/images/VSCode-logo.png';

export const Technologies = () => {
  return (
    <>
      <main className="container mx-auto max-w-[70%] bg-white pt-16 pb-20">
        <section>
          <h2 className="text-4xl font-bold text-gray-700">Tech stack</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-500">
            Technologies i&apos;ve been working with recently
          </p>
          <div className="mt-12 mb-8 grid grid-cols-6 gap-8">
            <a href="/" className="w-32 p-2">
              <img src={HTML5} alt="HTML5" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={CSS3} alt="CSS3" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={JavaScript}
                alt="JavaScript"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={React} alt="React" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={Typescript}
                alt="Typescript"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={Redux} alt="Redux" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={Tailwind}
                alt="Tailwind"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={HelloPangea}
                alt="HelloPangea"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={CRA} alt="CRA" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={Vite} alt="Vite" className="aspect-square object-scale-down" />
            </a>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold text-gray-700">Tools</h2>
          <div className="mt-8 grid grid-cols-6 gap-8">
            <a href="/" className="w-32 p-2">
              <img
                src={VSCode}
                alt="VSCode"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={Git} alt="Git" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={GitHub}
                alt="GitHub"
                className="aspect-square object-scale-down"
              />
            </a>
            <a href="/" className="w-32 p-2">
              <img src={Npm} alt="Npm" className="aspect-square object-scale-down" />
            </a>
            <a href="/" className="w-32 p-2">
              <img
                src={Postman}
                alt="Postman"
                className="aspect-square object-scale-down"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
