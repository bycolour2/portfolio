import { motion } from 'framer-motion';

import { personalDetails } from '../Details';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Welcome = () => {
  const isMedium = useMediaQuery('(min-width: 768px)');

  const headings = [
    { title: 'Hi 👋', styles: '' },
    { title: 'My Name is', styles: '' },
    {
      title: personalDetails.name,
      styles:
        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent',
    },
    { title: personalDetails.tagline, styles: '' },
  ];
  const headingVariants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: i * 0.5 },
    }),
    hidden: { x: isMedium ? -200 : 0, opacity: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-white pt-12 md:flex-row md:pt-28 2xl:justify-around">
      <div className="flex flex-col items-start justify-start text-2xl font-semibold lg:text-4xl xl:text-5xl">
        {headings.map(({ title, styles }, i) => (
          <motion.h2
            key={title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={headingVariants}
            className={'mb-1 ' + styles}
          >
            {title}
          </motion.h2>
        ))}
      </div>
      <motion.div
        initial={{ x: isMedium ? 200 : 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="w-[200px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 lg:w-[300px]"
      >
        <img
          src={personalDetails.img}
          alt="Me!"
          className="aspect-square rounded-full object-cover object-right"
        />
      </motion.div>
    </div>
  );
};
