import { Project } from '../components/Project';
import { projectDetails } from '../Details';

export const Projects = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-700 lg:text-4xl">Projects</h2>
      <p className="mt-4 max-w-3xl text-base text-gray-500 lg:text-lg">
        Things i&apos;ve build so far
      </p>
      <div className="grid-col-1 mt-12 grid gap-16 md:grid-cols-2 xl:grid-cols-3">
        {projectDetails.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </>
  );
};
