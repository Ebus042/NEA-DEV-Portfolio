const Contact = () => {
  return (
    <div className="py-14 container text-center mx-auto">
      <h2 className="text-center text-4xl font-sans text-gray-600 mb-12">
        Contact Us
      </h2>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-80 md:w-full p-4 focus:ring-2 my-5 shadow-md rounded-lg bg-green-200"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-80 md:w-full p-4 bg-green-200 shadow-md rounded-lg my-5 border"
        />
        <textarea
          className="my-5 w-80 rounded-md md:w-full h-32 p-4 border shadow-md focus:ring-2 outline-none"
          placeholder="Enter Your Message"
        ></textarea>

        <div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 hover:text-gray-100 px-3 py-2 text-white font-semibold rounded-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
