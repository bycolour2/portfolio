/* eslint-disable simple-import-sort/imports */
// Enter all your detials in this file
// Logo images
// import logogradient from './assets/logo.svg';
// import logo from './assets/logo2.svg';
// Profile Image
import profile from './assets/images/SimpleAvatar.png';
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
// Tools
import VSCode from './assets/images/VSCode-logo.png';
import Git from './assets/images/Git-logo.png';
import GitHub from './assets/images/github-logo.png';
import Npm from './assets/images/Npm-logo.png';
import Postman from './assets/images/postman-logo.png';
// Porject Images
import projectImage1 from './assets/projects/project1.jpg';
import projectImage2 from './assets/projects/project2.jpg';
import projectImage3 from './assets/projects/project3.jpg';
import projectImage4 from './assets/projects/project4.jpg';
import projectImage5 from './assets/projects/project5.jpg';
import projectImage6 from './assets/projects/project6.jpg';
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
      'Senior specialist of User Support Department at Information Management Systems Directorate',
    company: `Gazprom Procurement LLC`,
    location: 'St. Petersburg',
    type: 'Full Time',
    duration: 'Aug 2020 - Present',
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
    title: 'Project title 1',
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Project title 2',
    image: projectImage2,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Project title 3',
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Project title 4',
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Project title 5',
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Project title 6',
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://google.com',
    githubLink: 'https://github.com',
  },
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
