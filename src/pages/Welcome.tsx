import { useEffect, useState } from 'react';

import SimpleAvatar from './../assets/images/SimpleAvatar.png';

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
    <main className="container mx-auto flex min-h-[calc(100vh-96px)] max-w-[70%] flex-row items-center justify-between bg-white pb-20">
      <div className="flex flex-col items-start justify-start text-5xl font-bold">
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
          Rustam
        </h1>
        <h1
          className={`mb-2 ${
            !pageLoaded ? '-translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
          } delay-[1400ms] duration-1000 ease-in-out`}
        >
          I build things for web
        </h1>
      </div>
      <div
        className={`w-[250px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 ${
          !pageLoaded ? 'translate-x-72 opacity-0' : 'translate-x-0 opacity-100'
        } duration-[2000ms] ease-in-out`}
      >
        <img src={SimpleAvatar} alt="Me!" className="rounded-full bg-white" />
      </div>
    </main>
  );
};
