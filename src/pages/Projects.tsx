import projectImage1 from '../assets/projects/project1.jpg';
import projectImage2 from '../assets/projects/project2.jpg';
import projectImage3 from '../assets/projects/project3.jpg';
import projectImage4 from '../assets/projects/project4.jpg';
import projectImage5 from '../assets/projects/project5.jpg';
import projectImage6 from '../assets/projects/project6.jpg';

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

export const Projects = () => {
  return (
    <main className="container mx-auto max-w-[70%] bg-white pb-20">
      <h2 className="text-4xl font-bold text-gray-700">Projects</h2>
      <p className="mt-4 max-w-3xl text-lg text-gray-500">
        Things i&apos;ve build so far
      </p>
    </main>
  );
};
