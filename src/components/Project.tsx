import { FaGithub, FaLink } from 'react-icons/fa';

interface IProject {
  image: string;
  title: string;
  description: string;
  techstack: string;
  previewLink: string;
  githubLink: string;
}

export const Project = ({
  image,
  title,
  description,
  techstack,
  previewLink,
  githubLink,
}: IProject) => {
  return (
    <article className="flex flex-col justify-start overflow-hidden rounded-xl shadow-xl shadow-slate-300">
      <img src={image} alt={title} loading="lazy" />
      <div className="flex grow flex-col justify-between gap-3 p-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <p className="pt-2 text-sm font-light text-gray-500 line-clamp-6">
            {description}
          </p>
        </div>
        <div>
          <p className="font-semibold">
            Tech stack:{' '}
            <span className="text-base font-light text-gray-500">{techstack}</span>
          </p>
          <div className="flex flex-row items-center justify-between pt-4">
            <div className="flex flex-row items-center gap-2 text-gray-700">
              <FaLink />
              <a
                href={previewLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-light text-gray-500 hover:text-gray-900 hover:underline"
              >
                Live preview
              </a>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-700">
              <FaGithub />
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-light text-gray-500 hover:text-gray-900 hover:underline"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
