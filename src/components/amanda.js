import React from "react";
import { Data } from "../constants/hardcodeData";

const Amanda = () =>
{
    return(
        <div className="md:w-3/4 w-11/12 mx-auto my-12 md:my-24">
        {Data &&
            Data.map((data) => {
              return (
                <div key={data.id}>
                  <div className="bg-gradient-to-r relative from-fuchsia-500 to-cyan-500 h-full w-full rounded-lg flex flex-col lg:flex-row justify-center md:justify-evenly md:bg-[#171717] items-center md:py-7 lg:py-24 py-4 px-2 md:px-10">
                    <img
                      src={data.imgUrl}
                      alt="memeber"
                      className="w-[257px] h-[257px] "
                    />
                    <div className="min-h-full py-4 lg:pt-0 lg:pb-4 flex flex-col items-center lg:items-start justify-between  max-w-screen-sm">
                      <p className="font-semibold text-center lg:text-left text-base text-white md:text-xl lg:mb-4">
                       {data.description}
                      </p>
                      <h3 className="font-bold text-white text-xl md:text-2xl  lg:mb-4">
                        {data.name}
                      </h3>
                      <h3 className="font-medium text-white text-lg md:text-xl  lg:mb-4">
                        {data.position}
                      </h3>
                      <a href={data.discord} target="_blank" className="cursor-pointer" rel="noreferrer">
                        <img src="discord.svg" alt="discord" className="h-9" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
    );
};

export default Amanda;