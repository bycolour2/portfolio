import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface IExperienceDetails {
  company: string;
  duration: string;
  location: string;
  position: string;
  type: string;
  certificate?: string;
}

export const ExperienceDetails = ({
  company,
  duration,
  location,
  position,
  type,
  certificate,
}: IExperienceDetails) => {
  return (
    <article className="flex flex-col gap-3 border-b-2 border-gray-200 pt-8 pb-5">
      <div className="flex flex-row items-start justify-between gap-2 md:items-center">
        <div className="mb-2 flex w-full flex-col items-start gap-2 md:flex-row md:items-center">
          <h3 className="text-sm font-semibold tracking-wider text-gray-500 md:mr-4 lg:text-xl">
            {position}
          </h3>
          {certificate ? (
            <a
              href={certificate}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-200 px-2 py-1 text-center text-sm text-gray-700 shadow-md hover:bg-gray-300 hover:text-gray-700"
            >
              View certificate
            </a>
          ) : null}
        </div>
        <div className="hidden min-w-fit rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700 md:block">
          {type}
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-3 text-xs tracking-wide text-gray-400 md:flex-row md:items-center lg:text-sm">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
          <p className="inline-flex gap-1">
            <FaBuilding size={16} /> {company}
          </p>
          <p className="inline-flex gap-1">
            <FaMapMarkerAlt size={16} /> {location}
          </p>
        </div>
        <p className="inline-flex gap-1">
          <FaCalendarAlt size={16} /> {duration}
        </p>
      </div>
    </article>
  );
};
