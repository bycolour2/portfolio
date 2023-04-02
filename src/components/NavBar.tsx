import { useEffect, useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { Socials } from './Socials';

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isLarge = useMediaQuery('(min-width: 1024px)');

  const clickHandler = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isLarge) setIsNavOpen(false);
  }, [isLarge]);

  return (
    <header className="sticky top-0 z-30 flex justify-between border-b border-gray-200 bg-white py-4 px-10 lg:container lg:mx-auto lg:max-w-[80%]">
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
            <RxHamburgerMenu className="h-8 w-8 text-gray-600" />
          </button>
          <div
            className={`${
              isNavOpen ? 'translate-y-0' : '-translate-y-full'
            } absolute top-0 left-0 right-0 w-full border-b border-gray-400 bg-white duration-700 ease-in-out`}
          >
            <button
              type="button"
              className="absolute top-3 right-4 rounded-lg border border-gray-200 p-1 hover:bg-gray-100"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <RxCross2 className="h-6 w-6 text-gray-600" />
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
                <Socials size={28} socialColorClass="text-gray-700" />
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
