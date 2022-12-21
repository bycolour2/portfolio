import { techStackDetails, toolsDetails } from '../Details';

export const Technologies = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-gray-700 lg:text-4xl">Tech stack</h2>
        <p className="mt-4 max-w-3xl text-base text-gray-500 lg:text-lg">
          Technologies i&apos;ve been working with recently
        </p>
        <div className="mt-12 mb-8 grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-6">
          {Object.keys(techStackDetails).map((key) => {
            const title =
              key.toString().charAt(0).toUpperCase() + key.toString().slice(1);
            return (
              <img
                key={key}
                src={techStackDetails[key as keyof typeof techStackDetails]}
                alt={key}
                title={title}
                className="aspect-square object-scale-down p-2"
              />
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-gray-700 lg:text-4xl">Tools</h2>
        <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-5 lg:grid-cols-6">
          {Object.keys(toolsDetails).map((key) => {
            const title =
              key.toString().charAt(0).toUpperCase() + key.toString().slice(1);
            return (
              <img
                key={key}
                src={toolsDetails[key as keyof typeof toolsDetails]}
                alt={key}
                title={title}
                className="aspect-square object-scale-down p-2"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
