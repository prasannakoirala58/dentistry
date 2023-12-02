import React from 'react';

const Showcase = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-white">
        {/* Left Part Content goes here */}
        <div className="flex justify-between py-16 pl-16">
          <div className="p-8 mx-auto">
            <h1 className="text-4xl font-bold text-hero-text tracking-wider mb-8">
              BRAND<span className="text-face-text italic">Face</span>
            </h1>
            <p className="text-hero-text mb-8 w-4/5 font-normal">
              It is one of the fastest and most user-friendly facial scanners on the market
              today, engineered specifically for the dental industry. Its virtual patient
              technology and modern design will provide your patients with a personalized and
              high-tech dental experience.
            </p>
            <button
              className="bg-hero-text hover:bg-hero-hover text-white font-medium py-4 px-8 rounded-full
              font-inter text-xs leading-15 tracking-wider text-left"
            >
              LEARN MORE
            </button>
          </div>

          <div className="p-4">
            <div className="grid grid-rows-6 gap-6 font-inter text-sm leading-15 tracking-wider">
              <img src="Line 2.svg" alt="Up arrow" />
              <span className="text-sm text-hero-text">01</span>
              <span className="text-sm">02</span>
              <span className="text-sm">03</span>
              <span className="text-sm">04</span>
              <span className="text-sm">05</span>
              <img src="Line 3.svg" alt="Down arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-showcase-color flex items-center justify-center">
        {/* Right Part Content goes here */}
        <div className="p-16">
          <img
            src="image 1.png"
            alt="Centered Image"
            className="w-2/3 h-2/3 object-contain mx-auto"
          />
          {/* Hey I am content for the image */}
        </div>
      </div>
    </div>
  );
};

export default Showcase;

{
  /* <div className="flex-1 bg-showcase-color flex-shrink-0 w-[40%]">
        <img src="image 1.png" alt="Item Image" className=" w-full h-full object-contain" />
      </div> */
}

{
  /* <div className="grid grid-rows-6 gap-8 font-inter text-sm leading-15 tracking-wider">
              <img src="Line 2.svg" alt="Up arrow" />
              <span className="text-sm text-hero-text ">01</span>
              <span className="text-sm">02</span>
              <span className="text-sm">03</span>
              <span className="text-sm">04</span>
              <span className="text-sm">05</span>
              <img src="Line 3.svg" alt="Down arrow" />
            </div> */
}

// <h1 className="text-4xl font-bold text-hero-text tracking-wider mb-4">
//   BRAND<span className="text-face-text italic">Face</span>
// </h1>
// <p className="text-hero-text mb-6">
//   It is one of the fastest and most user-friendly facial scanners on the market
//   today, engineered specifically for the dental industry. Its virtual patient
//   technology and modern design will provide your patients with a personalized and
//   high-tech dental experience.
// </p>
// <button
//   className="bg-hero-text hover:bg-hero-hover text-white font-medium py-4 px-8 rounded-full
//   font-inter text-xs leading-15 tracking-wider text-left"
// >
//   LEARN MORE
// </button>
