import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const About = () => {
  return (
    <>
      <main className="container mx-auto max-w-[70%] bg-white pt-16 pb-20">
        <section>
          <h1 className="text-4xl font-bold text-gray-700">About me</h1>
          <p className="max-w-3xl pt-8 pb-12 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum similique
            architecto voluptas explicabo veritatis exercitationem optio tempora velit
            doloribus. Doloremque expedita commodi tempore a ad ipsa explicabo numquam
            error consequuntur. Sequi aspernatur saepe, iste quibusdam nam delectus nisi
            odio repudiandae ex. Nobis quia earum suscipit, adipisci ad delectus
            reiciendis sequi commodi vitae sint ab nihil ex, ut, distinctio placeat
            nostrum!
          </p>
        </section>
        <section>
          <h2 className="text-4xl font-bold text-gray-700">Work experience</h2>
          <article className="flex flex-col gap-3 border-b-2 border-gray-200 pt-8 pb-5">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-xl tracking-wider text-gray-500">Web developer</h3>
              <div className="rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700">
                Fulltime
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm tracking-wide text-gray-400">
              <div className="flex flex-row items-center gap-4">
                <p className="inline-flex gap-1">
                  <FaBuilding size={16} /> Place of work
                </p>
                <p className="inline-flex gap-1">
                  <FaMapMarkerAlt size={16} /> Place
                </p>
              </div>
              <p className="inline-flex gap-1">
                <FaCalendarAlt size={16} /> Time of work
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 border-b-2 border-gray-200 pt-8 pb-5">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-xl tracking-wider text-gray-500">Web developer</h3>
              <div className="rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700">
                Fulltime
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm tracking-wide text-gray-400">
              <div className="flex flex-row items-center gap-4">
                <p className="inline-flex gap-1">
                  <FaBuilding size={16} /> Place of work
                </p>
                <p className="inline-flex gap-1">
                  <FaMapMarkerAlt size={16} /> Place
                </p>
              </div>
              <p className="inline-flex gap-1">
                <FaCalendarAlt size={16} /> Time of work
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 border-b-2 border-gray-200 pt-8 pb-5">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-xl tracking-wider text-gray-500">Web developer</h3>
              <div className="rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700">
                Fulltime
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm tracking-wide text-gray-400">
              <div className="flex flex-row items-center gap-4">
                <p className="inline-flex gap-1">
                  <FaBuilding size={16} /> Place of work
                </p>
                <p className="inline-flex gap-1">
                  <FaMapMarkerAlt size={16} /> Place
                </p>
              </div>
              <p className="inline-flex gap-1">
                <FaCalendarAlt size={16} /> Time of work
              </p>
            </div>
          </article>
        </section>
        <section>
          <h2 className="pt-12 text-4xl font-bold text-gray-700">Education</h2>
          <article className="flex flex-col gap-3 border-b-2 border-gray-200 pt-8 pb-5">
            <div className="flex flex-row items-center justify-between ">
              <h3 className="text-xl tracking-wider text-gray-500">Web developer</h3>
              <div className="rounded-3xl bg-green-200 px-3.5 py-2 text-xs font-semibold text-green-700">
                Fulltime
              </div>
            </div>
            <div className="flex flex-row items-center justify-between text-sm tracking-wide text-gray-400">
              <div className="flex flex-row items-center gap-4">
                <p className="inline-flex gap-1">
                  <FaBuilding size={16} /> Place of work
                </p>
                <p className="inline-flex gap-1">
                  <FaMapMarkerAlt size={16} /> Place
                </p>
              </div>
              <p className="inline-flex gap-1">
                <FaCalendarAlt size={16} /> Time of work
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};
