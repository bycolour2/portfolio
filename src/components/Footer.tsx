import { NavLink } from 'react-router-dom';

import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-white">
      <div className="mx-auto w-[70%]">
        <div className="mb-4 flex flex-row items-center justify-end border-b-2 border-gray-300 pt-4 pb-6">
          {/* <div className="text-slate-700 opacity-90">
            <span className="text-2xl font-bold">{'{696}'}</span>
            <br />
            <span className="text-md font-bold">bycolour</span>
          </div> */}
          <div className="flex flex-row items-center justify-center gap-12">
            <div className="flex flex-row items-center justify-center gap-6">
              <p className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700">
                Telegram: @bycolour
              </p>
              <p className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700">
                ruskir7@gmail.com
              </p>
            </div>
            <Socials />
          </div>
        </div>
        <nav className="flex flex-row items-center justify-between pb-4">
          <div className="flex flex-row gap-6">
            <NavLink
              to={'/'}
              className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700"
            >
              Home
            </NavLink>
            <NavLink
              to={'/about'}
              className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700"
            >
              About
            </NavLink>
            <NavLink
              to={'/tech'}
              className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700"
            >
              Tech stack
            </NavLink>
            <NavLink
              to={'/projects'}
              className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700"
            >
              Projects
            </NavLink>
            <NavLink
              to={'/contacts'}
              className="p-2 text-base font-medium text-blue-900 drop-shadow-md hover:text-blue-700"
            >
              Contacts
            </NavLink>
          </div>
          <div className="flex flex-col">
            <p>
              Designed by{' '}
              <a
                href="https://github.com/pavanmg007"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Pavan MG
              </a>{' '}
              builded by{' '}
              <a
                href="https://github.com/bycolour2"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                bycolour
              </a>
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};
