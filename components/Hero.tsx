import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 right-20 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw] "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>
      <div className="h-[70vh] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center  ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="flex justify-center relative my-20 ">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col  items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Next js Modern Portfolio
            </h2>
            <TextGenerateEffect
              className=" text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless User Experince"
            />
            <p className="text-center md:-tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white">
              Hi I'am Nitin, As a Full Stack Developer based in Palwal,Haryana
            </p>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
