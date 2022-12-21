import { contactDetails } from '../Details';

export const Contacts = () => {
  return (
    <>
      <p className="mt-8 text-center text-xl font-bold text-gray-700 lg:text-4xl">
        For any questions please contact me at
      </p>
      <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-6xl">
        <a href="mailto:ruskir7@gmail.com" className="leading-loose">
          {contactDetails.email}
        </a>
      </p>
      {contactDetails.phone ? (
        <>
          <p className="text-center text-xl font-bold text-gray-700 lg:text-4xl">or</p>
          <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl lg:text-6xl">
            <a href={`tel:${contactDetails.phone}`} className="leading-loose">
              {contactDetails.phone}
            </a>
          </p>
        </>
      ) : null}
    </>
  );
};
