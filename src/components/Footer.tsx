import { NavLink } from 'react-router-dom';

import { contactDetails, footerDetails, socialMediaUrl } from '../Details';
import { Socials } from './Socials';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-center">
      {!footerDetails.withNav ? (
        <div className="mx-auto max-w-[80%] lg:max-w-[70%]">
          <div className="flex flex-row items-center justify-center py-2 text-center text-xs md:text-left lg:text-sm">
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
        </div>
      ) : (
        <div className="mx-auto w-[70%]">
          <div className="mb-4 flex flex-row items-center justify-end border-b-2 border-gray-300 pt-4 pb-6">
            {/* <div className="flex flex-col items-center justify-center text-slate-700 opacity-90">
            <span className="text-2xl font-bold">{'{696}'}</span>
            <span className="text-md font-bold">bycolour</span>
          </div> */}
            <div className="flex flex-row items-center justify-center gap-12">
              <div className="flex flex-row items-center justify-center gap-6">
                <div className="p-2 text-base font-medium text-blue-500 drop-shadow-md">
                  Telegram:{' '}
                  <a href={socialMediaUrl.telegram} className="hover:text-blue-900">
                    {contactDetails.telegram}
                  </a>
                </div>
                <a
                  href="mailto:ruskir7@gmail.com"
                  className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
                >
                  {contactDetails.email}
                </a>
              </div>
              <Socials />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <nav className="flex flex-row gap-6">
              <NavLink
                to={'/'}
                className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
              >
                Home
              </NavLink>
              <NavLink
                to={'/about'}
                className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
              >
                About
              </NavLink>
              <NavLink
                to={'/tech'}
                className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
              >
                Tech stack
              </NavLink>
              <NavLink
                to={'/projects'}
                className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
              >
                Projects
              </NavLink>
              <NavLink
                to={'/contacts'}
                className="p-2 text-base font-medium text-blue-500 drop-shadow-md hover:text-blue-900"
              >
                Contacts
              </NavLink>
            </nav>
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
          </div>
        </div>
      )}
    </footer>
  );
};
