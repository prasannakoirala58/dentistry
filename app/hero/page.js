import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-around px-6 pt-20 bg-hero-color">
      {/* Part One: Left Side */}
      <div className="max-w-md">
        <div>
          <h1 className="text-4xl font-medium text-hero-text tracking-wider mb-4">
            The future of
          </h1>
          <h1 className="text-4xl font-medium text-hero-text tracking-wider mb-4">
            face-driven dentistry
          </h1>
        </div>
        <p className="text-hero-text mb-6">
          A new standard for dental imaging solutions through state-of-the-art technology,
          brand leads the global market in digital dentistry.
        </p>

        <button
          className="bg-hero-text hover:bg-hero-hover text-white font-medium py-4 px-8 rounded-full
              font-inter text-xs leading-15 tracking-wider text-left"
        >
          LEARN MORE
        </button>
      </div>

      {/* Part Two: Right Side */}
      <div className="flex-shrink-0 w-[40%]">
        <img
          src="hero.png"
          alt="Hero Image"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
