import { useEffect, useState } from 'react';

import { personalDetails } from '../Details';

export const Welcome = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPageLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-between gap-12 bg-white pt-12 md:flex-row md:pt-28 2xl:justify-around">
      <div className="flex flex-col items-start justify-start text-2xl font-bold lg:text-4xl xl:text-5xl">
        <h1
          className={`mb-2 ${
            !pageLoaded ? '-translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
          } duration-1000 ease-in-out`}
        >
          Hi 👋
        </h1>
        <h1
          className={`mb-2 ${
            !pageLoaded ? '-translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
          } delay-700 duration-1000 ease-in-out`}
        >
          My Name is
        </h1>
        <h1
          className={`mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
            !pageLoaded ? '-translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
          } delay-700 duration-1000 ease-in-out`}
        >
          {personalDetails.name}
        </h1>
        <h1
          className={`mb-2 ${
            !pageLoaded ? '-translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
          } delay-[1400ms] duration-1000 ease-in-out`}
        >
          {personalDetails.tagline}
        </h1>
      </div>
      <div
        className={`w-[200px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 lg:w-[250px] ${
          !pageLoaded ? 'translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
        } duration-[2000ms] ease-in-out`}
      >
        <img
          src={personalDetails.img}
          alt="Me!"
          className="aspect-square rounded-full object-cover object-right"
        />
      </div>
    </div>
  );
};
