import { NavLink } from 'react-router-dom';

import GitHub from '../assets/svg/GitHub.svg';
import LinkedIn from '../assets/svg/LinkedIn.svg';
import Twitter from '../assets/svg/Twitter.svg';

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="flex w-[70%] flex-row items-center justify-between py-4">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <span className="text-3xl font-bold">{'{696}'}</span>
            <br />
            <span className="text-lg font-bold">bycolour</span>
          </div>
          <div className="flex flex-row items-start justify-center gap-12">
            <div className="flex flex-row gap-6">
              <NavLink
                to={'/'}
                className="p-2 text-lg font-medium text-gray-500 drop-shadow-md hover:text-gray-700"
              >
                Home
              </NavLink>
              <NavLink
                to={'/about'}
                className="p-2 text-lg font-medium text-gray-500 drop-shadow-md hover:text-gray-700"
              >
                About
              </NavLink>
              <NavLink
                to={'/tech'}
                className="p-2 text-lg font-medium text-gray-500 drop-shadow-md hover:text-gray-700"
              >
                TechStack
              </NavLink>
              <NavLink
                to={'/projects'}
                className="p-2 text-lg font-medium text-gray-500 drop-shadow-md hover:text-gray-700"
              >
                Projects
              </NavLink>
              <NavLink
                to={'/contacts'}
                className="p-2 text-lg font-medium text-gray-500 drop-shadow-md hover:text-gray-700"
              >
                Contacts
              </NavLink>
            </div>
            <div className="flex flex-row items-center gap-4">
              <a href="/">
                <img src={GitHub} alt="github" />
              </a>
              <a href="/">
                <img src={Twitter} alt="github" />
              </a>
              <a href="/">
                <img src={LinkedIn} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
