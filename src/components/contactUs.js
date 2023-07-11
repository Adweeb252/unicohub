const ContactUs = () => {
  return (
    <div className="md:w-3/4 w-11/12 mx-auto my-12 md:my-24">
      <div className="bg-gradient-to-r relative from-fuchsia-500 to-cyan-500 h-full w-full rounded-lg flex flex-col lg:flex-row justify-center md:justify-evenly items-center md:py-7 py-4 px-2 md:px-10">
        <img src={"contact-image.png"} alt="contact" className="max-h-[576px] max-w-[576px] min-h-[385px] min-w[385px] relative heartbeat w-full h-full -top-[20%] md:top-0 " />
        <div className="min-h-full py-4 lg:pt-0 lg:pb-4 flex flex-col items-center lg:items-start justify-between  max-w-screen-sm">
          <h3 className="font-medium text-white text-4xl md:text-6xl lg:mb-4 text-center lg:text-left">
            Get Exponential Reach via{" "}
            <span className="font-bold">AI Marketing</span>
          </h3>
          <div className="flex">
          <input
            name="contact"
            id="contact"
            placeholder="Enter your work email"
            className="focus:outline-none mt-7 text-white bg-white bg-opacity-10 py-3 px-6 rounded-full placeholder:font-semibold placeholder:text-gray-300 w-11/12 lg:w-4/5"
          />
          <button
            type="button"
            className="inline-flex lg:w-4/5 ml-4 md:w-2/3 mt-7 get-started items-center justify-center hover:bg-zinc-900 h-12 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle bg-black rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            <p className="hover:ai-gradient font-thin">Get in Touch</p>
            <span>
              <img
                src="Vector.svg"
                alt="Vector.svg"
                className="w-8 h-7 ml-5"
              ></img>
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
