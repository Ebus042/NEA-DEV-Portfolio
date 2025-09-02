import { servicesSection } from "../data/constant";

const Services = () => {
  return (
    <div className="my-32">
      <div>
        <h3 className="text-center font-bold my-10 text-2xl text-gray-700 lg:text-4xl lg:mb-10 ">
          Services I offer
        </h3>
        <div className="grid grid-cols-1 py-4 gap-5 lg:gap-10 mx-10 md:grid md:grid-cols-2 xl:grid-cols-3">
          {servicesSection.map((section, id) => (
            <div
              key={id}
              className="bg-slate-300 h-full flex flex-col px-4 rounded-lg shadow-lg"
            >
              <h2
                className="flex w-64 max-xs:w-56 max-xs:text-sm md:w-72 md:text-xl lg:text-xl font-bold lg:w-full xl:max-w-full xl:text-2xl
               text-white py-1 px-2 rounded-md m-auto items-center justify-center my-5 bg-slate-600"
              >
                {section.title}
              </h2>
              <ul>
                {section.labels.map((label, id) => (
                  // <div key={id}>
                  <li key={id} className="py-2 md:text-xl lg:3xl text-gray-600">
                    <span>✔️ </span>
                    {label}
                  </li>
                  // </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
