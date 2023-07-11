import React from "react";
const ContentRight = ({imgUrl, altText}) =>
{
    return(
        <div className="w-3/4 mx-auto my-12 md:my-24">
            <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
                <div className="flex flex-col h-full max-w-[715px] my-5 md:my-0">
                <h1 className="md:text-[40px] py-4 text-5xl ai-gradient font-medium text-center md:text-left">
                    AI Marketing.
                </h1>
                <h1 className="md:text-[40px] text-5xl font-medium mb-10 text-center md:text-left text-white">
                    Optimized Reach
                </h1>
                <p className="md:text-xl text-base text-gray-400 text-center md:text-left">
                    DOML is a digital media agency powered by AI technology providing
                    real time, <span className="text-blue-600">data-driven insights</span> on your business and audience. The
                    mission of DOML is to create the best experiences for companies
                    through intelligent insights, powerful analytics and <span className="text-blue-600">strategic
                    execution.</span>
                </p>
                <div className="block">
                    <h1>gap</h1>
                </div>
                <button
                    type="button"
                    className="inline-flex get-started lg:w-2/5 md:w-3/4 items-center justify-center hover:justify-evenly h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle bg-transparent rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                >
                    <p className="hover:ai-gradient">Learn More</p>
                    <span>
                    <img
                        src="Vector.svg"
                        alt="Vector.svg"
                        className="w-8 h-7 ml-5"
                    ></img>
                    </span>
                </button>
                </div>
                <div className="flex justify-center md:justify-end">
                <img
                    src={imgUrl}
                    alt={altText}
                    className="h-[283px] w-[295px] md:w-4/5 md:h-4/5"
                ></img>
                </div>
            </div>
        </div>
    );
};

export default ContentRight;