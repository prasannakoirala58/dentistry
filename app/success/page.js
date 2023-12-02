import React from 'react';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 text-hero-text bg-success-color">
      <h1 className="text-4xl text-center font-medium text-hero-text tracking-wider mb-6 p-6">
        What dentists say?
      </h1>

      <img src="doubleQuotes.svg" alt="double quote symbol" />

      <div className="text-center text-sm italic tracking-widest leading-8 p-10 w-3/4">
        <p>
          “The <span className="font-bold underline">BRANDSCAN Alpha</span> has provided great
          images for the past six years. One shot cephalometric X-Brand images enable precise
          diagnosis while minimizing patient’s movement and image distortion. 3D technology
          gives me more information to plan orthodontic treatment, and it is also a powerful
          tool in educating our patients.
          <br />
          <br />
          The <span className="font-bold underline">BRANDSCAN Alpha</span> has been one of the
          best investments since starting my practice in 2010.”
        </p>
      </div>

      <div className="flex items-center justify-center p-10 tracking-wider leading-8">
        <img src="Line 4.svg" alt="Less than symbol" />
        <div className="text-center text-xs flex flex-col items-center justify-center px-10">
          <p>Hyeyoung Choi, Master of Dental Orthodontic,</p>
          <p>Principal Doctor of Yonseiwoori Dental Clinic, Seoul, Korea</p>
        </div>
        <img src="Line 5.svg" alt="Greater than symbol" />
      </div>
    </div>
  );
};

export default Success;
