import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

import { ExperienceDetails } from '../components/ExperienceDetails';
import { educationDetails, personalDetails, workDetails } from '../Details';

export const About = () => {
  return (
    <main className="container mx-auto max-w-[70%] bg-white pt-16 pb-20">
      <section>
        <h1 className="text-4xl font-bold text-gray-700">About me</h1>
        <p className="max-w-3xl pt-8 pb-12 text-lg text-gray-500">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h2 className="text-4xl font-bold text-gray-700">Work experience</h2>
        {workDetails.map((work, index) => {
          return <ExperienceDetails key={index} {...work} />;
        })}
      </section>
      <section>
        <h2 className="pt-12 text-4xl font-bold text-gray-700">Education</h2>
        {educationDetails.map((education, index) => {
          return <ExperienceDetails key={index} {...education} />;
        })}
      </section>
    </main>
  );
};
