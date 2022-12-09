import GitHub from '../assets/svg/GitHub.svg';
import LinkedIn from '../assets/svg/LinkedIn.svg';
import Twitter from '../assets/svg/Twitter.svg';

export const Socials = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <a href="https://github.com/bycolour2" target="_blank" rel="noreferrer">
        <img src={GitHub} alt="github" />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <img src={Twitter} alt="github" />
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <img src={LinkedIn} alt="github" />
      </a>
    </div>
  );
};
