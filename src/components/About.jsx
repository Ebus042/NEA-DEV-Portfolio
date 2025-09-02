import { aboutMe } from "../data/constant";

const About = () => {
  return (
    <div className="my-24 flex flex-col justify-center items-center">
      <div>
        <div>
          {aboutMe.map((section, id) => (
            <div key={id}>
              <h2 className="uppercase xl:text-4xl font-bold text-2xl text-center md:text-lg my-10 py-4">
                {section.title}
              </h2>
              <div className="flex flex-col lg:flex-row items-center w-full justify-between bg-slate-700 py-10">
                {/* <div className="bg-slate-600 rounded-md "> */}
                <p className=" bg-gray-700 lg:mx-0 lg:leading-10 lg:ml-8 rounded-xl lg:w-1/2 shadow-2xl lg:py-6 lg:px-8 lg:text-2xl leading-8 py-2 px-4 mx-10 text-gray-50">
                  {section.descriptions}
                </p>
                {/* </div> */}
                <img
                  loading="lazy"
                  src={section.image}
                  className="rounded-full lg:w-1/3 object-contain py-5"
                  alt="Potrait image of Ebuka"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
