/* eslint-disable simple-import-sort/imports */
// Enter all your detials in this file
// Logo images
// import logogradient from './assets/logo.svg';
// import logo from './assets/logo2.svg';
// Profile Image
import profile from './assets/images/Me.jpg';
// Tech stack images
import HTML5 from './assets/images/HTML5-logo.png';
import CSS3 from './assets/images/CSS3-logo.png';
import JavaScript from './assets/images/JavaScript-logo.png';
import React from './assets/images/React-logo.png';
import Typescript from './assets/images/Typescript_logo.svg';
import Redux from './assets/images/redux-logo.png';
import Tailwind from './assets/images/Tailwind_CSS-logo.png';
import HelloPangea from './assets/images/hello-pangea_dnd-logo.png';
import CRA from './assets/images/CRA-logo.png';
import Vite from './assets/images/vite-logo.png';
import RHF from './assets/images/rhf-logo.png';
import Effector from './assets/images/effector-logo.png';
import FramerMotion from './assets/images/framer-motion-logo.png';
// Tools
import VSCode from './assets/images/VSCode-logo.png';
import Git from './assets/images/Git-logo.png';
import GitHub from './assets/images/github-logo.png';
import Npm from './assets/images/Npm-logo.png';
import Postman from './assets/images/postman-logo.png';
// Porject Images
import projectImage1 from './assets/projects/convertingInput.png';
import projectImage2 from './assets/projects/rocket-pma.png';
import projectImage3 from './assets/projects/dartsGames.png';
// import projectImage4 from './assets/projects/project4.jpg';
// import projectImage5 from './assets/projects/project5.jpg';
// import projectImage6 from './assets/projects/project6.jpg';
// Certificates
import RSSReactQ3Cert from './assets/pdfs/RSS React 2022 Q3 Cert.pdf';

// Logos
// export const logos = {
//   logogradient: logogradient,
//   logo: logo,
// };

// Enter your Personal Details here
export const personalDetails = {
  name: 'Rustam',
  tagline: 'I build things for web',
  img: profile,
  about: `I'm an enthusiastic and detail-oriented Frontend developer, highly motivated to writing clear, concise, robust code that works. I have passion for both personal growth and for software development.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  github: 'https://www.github.com/bycolour2',
  discord: 'https://discordapp.com/users/135416426369515520',
  telegram: 'https://t.me/bycolour',
  linkdein: '',
};

// Enter your Work Experience here
export const workDetails = [
  {
    position:
      'Head of the development and maintenance group of internal information systems of the development and implementation department of the IMS',
    company: `Gazprom Procurement LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Oct 2023 - Present',
  },
  {
    position: 'Senior Specialist of the IMS Development and Implementation Department',
    company: `Gazprom Procurement LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Feb 2023 - Sep 2023',
  },
  {
    position:
      'Senior specialist of User Support Department at Information Management Systems Directorate',
    company: `Gazprom Procurement LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Aug 2020 - Jan 2023',
  },
  {
    position: 'Technical Support Engineer 2nd and 3rd line ',
    company: `Radario LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Sep 2016 - Apr 2017',
  },
  {
    position: 'Intern in IT department',
    company: `Gazprom Procurement LLC`,
    location: 'Moscow',
    type: 'Internship',
    duration: 'Jul 2016 - Jul 2016',
  },
];

// Enter your Education Details here
export const educationDetails = [
  {
    position: 'Courses: React 2022 Q3',
    company: 'RS School',
    location: 'Online',
    type: 'Full Time',
    duration: 'Sep 2022 - Dec 2022',
    certificate: RSSReactQ3Cert,
  },
  {
    position: "Master's Degree in Web Development (Faculty of Software Engineering)",
    company: `ITMO University`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Sep 2019 - Jul 2021',
    certificate: '',
  },
  {
    position:
      "Bachelor's Degree in Applied Informatics in Economics (Faculty of Information Technology and Programming)",
    company: `ITMO University`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Sep 2015 - Aug 2017',
    certificate: '',
  },
];

// Tech Stack
export const techStackDetails = {
  html: HTML5,
  css: CSS3,
  js: JavaScript,
  react: React,
  typescript: Typescript,
  redux: Redux,
  tailwind: Tailwind,
  helloPangea: HelloPangea,
  cra: CRA,
  vite: Vite,
  RHF: RHF,
  effector: Effector,
  framerMotion: FramerMotion,
};

// Tools
export const toolsDetails = {
  vscode: VSCode,
  git: Git,
  github: GitHub,
  npm: Npm,
  postman: Postman,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: 'Converting input',
    image: projectImage1,
    description: `Converting input that could be toggled from metric to imperial system.
      Example of use: server main system is metric but users across the globe and for some users
      imperial is thier main system.`,
    techstack: 'React, TypeScript, Vite, Tailwindcss',
    previewLink: 'https://bycolour2.github.io/convertingInput/',
    githubLink: 'https://github.com/bycolour2/convertingInput/',
  },
  {
    title: 'Rocket project management app',
    image: projectImage2,
    description: `Project management system created as final task for RSSchool course. Application uses React-router-dom, redux, websocket, drag and drop and other simplier technologies.`,
    techstack:
      'React, TypeScript, CRA, Tailwindcss, Redux, RTK, Websocket, Pangea-DnD (ex. Beautiful DnD), react-router-dom, Flowbite',
    previewLink: 'https://rocket-pma.onrender.com/',
    githubLink: 'https://github.com/bycolour2/project-management-app',
  },
  {
    title: 'Darts games',
    image: projectImage3,
    description: `🚧 Work in progress 🚧. Project created as Darts lover to record some game data.`,
    techstack:
      'React, TypeScript, Vite, Tailwindcss, Framer Motion, effector, shadcn, FSD',
    previewLink: 'https://dartsgames.onrender.com/',
    githubLink: 'https://github.com/bycolour2/darts-games/tree/main',
  },
  //   {
  //     title: 'Project title 4',
  //     image: projectImage4,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: 'HTML/CSS, JavaScript',
  //     previewLink: 'https://google.com',
  //     githubLink: 'https://github.com',
  //   },
  //   {
  //     title: 'Project title 5',
  //     image: projectImage5,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: 'HTML/CSS, JavaScript',
  //     previewLink: 'https://google.com',
  //     githubLink: 'https://github.com',
  //   },
  //   {
  //     title: 'Project title 6',
  //     image: projectImage6,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content. This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content. This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: 'HTML/CSS, JavaScript',
  //     previewLink: 'https://google.com',
  //     githubLink: 'https://github.com',
  //   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: 'ruskir7@gmail.com',
  telegram: '@bycolour',
  phone: '',
};

// Enter Footer type here
export const footerDetails = {
  withNav: false,
};
