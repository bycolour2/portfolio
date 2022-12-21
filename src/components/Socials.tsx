import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

import { socialMediaUrl } from '../Details';

interface ISocials {
  size?: number;
}

export const Socials = ({ size = 32 }: ISocials) => {
  return (
    <div className="flex flex-row items-center gap-4 text-gray-500">
      <a
        href={socialMediaUrl.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaGithub size={size} className="hover:drop-shadow-md" />
      </a>
      <a
        href={socialMediaUrl.discord}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaDiscord size={size} className="hover:drop-shadow-md" />
      </a>
      <a
        href={socialMediaUrl.telegram}
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-700"
      >
        <FaTelegram size={size} className="hover:drop-shadow-md" />
      </a>
      {/* <a href={socialMediaUrl.linkdein} target="_blank" rel="noreferrer" className="hover:text-gray-700">
        <FaLinkedin size={size} className="hover:drop-shadow-md" />
      </a> */}
    </div>
  );
};
