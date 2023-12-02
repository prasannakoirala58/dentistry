import React from 'react';

const Intro = () => {
  return (
    <div className="flex items-center justify-around bg-white">
      {/* Part One: Left Side */}
      <div className=" flex-1 items-center justify-center p-8 pl-16 py-16">
        <div className="pl-8">
          <h1 className="text-4xl font-medium text-hero-text tracking-wider mb-2">
            Leading digital
          </h1>
          <h1 className="text-4xl font-medium text-hero-text tracking-wider mb-2">
            dentistry from
          </h1>
          <h1 className="text-4xl font-medium text-hero-text tracking-wider mb-2">
            diagnosis to treatment
          </h1>
        </div>
        <p className="text-hero-text mt-6 pl-8 w-5/6">
          Brand isan innovative dental solution company that improves oral health with our
          cutting-edge products and services. We push the boundaries of dental development and
          strive to improve the quality of life for everyone, and our commitment to research
          and development sets us apart from our competitors. 
        </p>

        <div className="pl-8">
          <button
            className="bg-hero-text hover:bg-hero-hover text-white font-medium py-4 px-8 mt-6 rounded-full
              font-inter text-xs leading-15 tracking-wider text-left"
          >
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Part Two: Right Side */}
      <div className="flex-1 items-center justify-center p-8 pr-16 py-16">
        <img
          src="image 2.png"
          alt="Hero Image"
          className="w-full h-full rounded-lg object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
