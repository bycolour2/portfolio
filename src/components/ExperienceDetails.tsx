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
      <div className="flex flex-row items-center justify-between ">
        <div className="inline-flex items-center">
          <h3 className="mr-4 text-xl tracking-wider text-gray-500">{position}</h3>
          {certificate ? (
            <a
              href={certificate}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-gray-200 px-2.5 py-1.5 text-sm text-gray-700 shadow-md hover:bg-gray-300 hover:text-gray-700"
            >
              View certificate
            </a>
          ) : null}
        </div>
        <div className="min-w-fit rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700">
          {type}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between text-sm tracking-wide text-gray-400">
        <div className="flex flex-row items-center gap-4">
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
