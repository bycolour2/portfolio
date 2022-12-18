import { Project } from '../components/Project';
import { projectDetails } from '../Details';

export const Projects = () => {
  return (
    <main className="container mx-auto max-w-[70%] bg-white pt-16 pb-20">
      <h2 className="text-4xl font-bold text-gray-700">Projects</h2>
      <p className="mt-4 max-w-3xl text-lg text-gray-500">
        Things i&apos;ve build so far
      </p>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {projectDetails.map((project, index) => {
          return (
            <Project key={index} {...project} />
            // <article
            //   key={index}
            //   className="overflow-hidden rounded-xl shadow-xl shadow-slate-300"
            // >
            //   <div className="h-56">
            //     <img src={image} alt={title} loading="lazy" />
            //   </div>
            //   <div className="p-4">
            //     <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            //     <p className="pt-2 text-sm font-light text-gray-500">{description}</p>
            //     <p className="pt-4 font-semibold">
            //       Tech stack:{' '}
            //       <span className="pt-2 text-base font-light text-gray-500">
            //         {techstack}
            //       </span>
            //     </p>
            //     <div className="flex flex-row items-center justify-between pt-4">
            //       <div className="flex flex-row items-center gap-2 text-gray-700">
            //         <FaLink />
            //         <a
            //           href={previewLink}
            //           target="_blank"
            //           rel="noreferrer"
            //           className="text-sm font-light text-gray-500 hover:text-gray-900 hover:underline"
            //         >
            //           Live preview
            //         </a>
            //       </div>
            //       <div className="flex flex-row items-center gap-2 text-gray-700">
            //         <FaGithub />
            //         <a
            //           href={githubLink}
            //           target="_blank"
            //           rel="noreferrer"
            //           className="text-sm font-light text-gray-500 hover:text-gray-900 hover:underline"
            //         >
            //           View code
            //         </a>
            //       </div>
            //     </div>
            //   </div>
            // </article>
          );
        })}
      </div>
    </main>
  );
};
