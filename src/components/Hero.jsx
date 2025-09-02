import { heroSection } from "../data/constant";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr shadow-lg from-slate-700 to-gray-500 h-full pt-10">
      <div>
        {heroSection.map((content, id) => (
          <div
            key={id}
            className="flex flex-col lg:flex-row justify-between lg:h-full lg:justify-around mx-10"
          >
            <div className="md:mt-10">
              <h1 className="text-center md:text-2xl lg:text-4xl lg:w-96 text-slate-300 lg:mb-6 lg:leading-10 py-2 font-bold">
                {content.title}
              </h1>
              <p className="text-center md:text-xl lg:w-96 lg:leading-10 md:w-56 md:mb-5 font-semibold text-gray-200 w-48 m-auto">
                {content.description}
              </p>

              <div className="m-auto w-40 ">
                <button className="my-4">
                  <a
                    href="/Ebuka.pdf"
                    download="Ebuka-resume.pdf"
                    className="bg-gray-500 hover:bg-slate-300 hover:text-gray-600 px-3 py-1 text-white font-semibold rounded-md"
                  >
                    Download resume
                  </a>
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center mt-10">
              <div className="absolute lg:w-full lg:h-full w-64 h-64 bg-gray-950 rounded-full border-t-transparent border-l-transparent border-8 animate-spin-slow"></div>
              <img
                src={content.image}
                alt="Potrait image of Ebuka"
                className="h-60 w-60 lg:h-96 xl:bg-none bg-slate-300 z-10 rounded-full lg:w-96 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
