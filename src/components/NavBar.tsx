import { NavLink } from 'react-router-dom';

import { Socials } from './Socials';

export const NavBar = () => {
  return (
    <header className="container mx-auto flex max-w-[70%] justify-between py-4">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <span className="text-3xl font-bold">{'{696}'}</span>
        <br />
        <span className="text-lg font-bold">bycolour</span>
      </div>
      <nav className="flex flex-row items-center justify-center gap-12">
        <ul className="flex flex-row gap-6">
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
        <Socials />
      </nav>
    </header>
  );
};
