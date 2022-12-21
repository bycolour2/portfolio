import { ExperienceDetails } from '../components/ExperienceDetails';
import { educationDetails, personalDetails, workDetails } from '../Details';

export const About = () => {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold text-gray-700 lg:text-4xl">About me</h1>
        <p className="max-w-3xl pt-8 text-base text-gray-500 lg:text-lg">
          {personalDetails.about}
        </p>
      </section>
      <section>
        <h2 className="mt-12 text-3xl font-bold text-gray-700 lg:text-4xl">
          Work experience
        </h2>
        {workDetails.map((work, index) => {
          return <ExperienceDetails key={index} {...work} />;
        })}
      </section>
      <section>
        <h2 className="mt-12 text-3xl font-bold text-gray-700 lg:text-4xl">Education</h2>
        {educationDetails.map((education, index) => {
          return <ExperienceDetails key={index} {...education} />;
        })}
      </section>
    </>
  );
};
