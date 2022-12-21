import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Socials } from './Socials';

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const clickHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="container mx-auto flex max-w-[80%] justify-between pt-6 pb-2 lg:max-w-[70%]">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <span className="text-xl font-bold lg:text-3xl">{'{696}'}</span>
        <span className="text-sm font-bold lg:text-lg">bycolour</span>
      </div>
      <nav className="flex flex-row items-center justify-center gap-12">
        <section className="MOBILE-MENU flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </button>
          <div
            className={`${
              isNavOpen ? 'translate-y-0' : '-translate-y-full'
            } absolute top-0 left-0 right-0 z-10 border-b border-gray-400 bg-white duration-700 ease-in-out`}
          >
            <button
              type="button"
              className="absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="h-6 w-6 rounded-lg text-gray-600 hover:bg-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="NAVIGATION-MOBILE-OPEN flex min-h-[250px] flex-col items-center justify-between lg:hidden">
              <li className="my-4 border-b border-gray-400 uppercase">
                <NavLink to="/welcome" onClick={clickHandler}>
                  Home
                </NavLink>
              </li>
              <li className="my-4 border-b border-gray-400 uppercase">
                <NavLink to="/about" onClick={clickHandler}>
                  About
                </NavLink>
              </li>
              <li className="my-4 border-b border-gray-400 uppercase">
                <NavLink to="/technologies" onClick={clickHandler}>
                  Tech stack
                </NavLink>
              </li>
              <li className="my-4 border-b border-gray-400 uppercase">
                <NavLink to="/projects" onClick={clickHandler}>
                  Projects
                </NavLink>
              </li>
              <li className="my-4 border-b border-gray-400 uppercase">
                <NavLink to="/contacts" onClick={clickHandler}>
                  Contacts
                </NavLink>
              </li>
              <li className="mt-2 mb-4">
                <Socials size={28} />
              </li>
            </ul>
          </div>
        </section>
        <ul className="hidden flex-row gap-6 lg:flex">
          <li className="p-2 text-lg font-medium text-gray-500 hover:text-gray-700">
            <NavLink to={'/'} className="drop-shadow-md">
              Home
            </NavLink>
          </li>
          <li className="p-2 text-lg font-medium text-gray-500 hover:text-gray-700">
            <NavLink to={'/about'} className="drop-shadow-md">
              About
            </NavLink>
          </li>
          <li className="p-2 text-lg font-medium text-gray-500 hover:text-gray-700">
            <NavLink to={'/technologies'} className="drop-shadow-md">
              Tech stack
            </NavLink>
          </li>
          <li className="p-2 text-lg font-medium text-gray-500 hover:text-gray-700">
            <NavLink to={'/projects'} className="drop-shadow-md">
              Projects
            </NavLink>
          </li>
          <li className="p-2 text-lg font-medium text-gray-500 hover:text-gray-700">
            <NavLink to={'/contacts'} className="drop-shadow-md">
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className="hidden xl:block">
          <Socials />
        </div>
      </nav>
    </header>
  );
};
