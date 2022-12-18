import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';

import GitHub from '../assets/svg/GitHub.svg';
import LinkedIn from '../assets/svg/LinkedIn.svg';
import Twitter from '../assets/svg/Twitter.svg';
import { socialMediaUrl } from '../Details';

export const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-4 text-gray-500">
      <a
        href={socialMediaUrl.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaGithub size={32} className="hover:drop-shadow-md" />
      </a>
      <a
        href={socialMediaUrl.discord}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaDiscord size={32} className="hover:drop-shadow-md" />
      </a>
      <a
        href={socialMediaUrl.telegram}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaTelegram size={32} className="hover:drop-shadow-md" />
      </a>
      {/* <a href={socialMediaUrl.linkdein} target="_blank" rel="noreferrer" className="hover:text-gray-700">
        <FaLinkedin size={32} className="hover:drop-shadow-md" />
      </a> */}
    </div>
  );
};
