import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer class="container bg-hero-color text-hero-text p-6">
      <div class="grid grid-cols-10 pl-16 py-16 pr-14">
        <div class="p-8 col-span-4 flex flex-col items-start justify-between">
          <div class="flex flex-col items-start text-sm font-normal w-full leading-loose tracking-widest">
            <Image
              className="mb-6"
              src={'footerLogo.svg'}
              alt="Lamyy Logo"
              width={120}
              height={40}
            />
            <p class="mb-6 mt-6 leading-15 tracking-wider">
              Since its establishment in 2004, Brand has been leading the global market in
              digital dentistry by proposing a new standard for dental imaging solutions
              through state-of-the-art technology.
            </p>
            <p class="mb-6 leading-15 tracking-wider">
              Brand will continuously grow to provide better products and services through
              outstanding technology and experience.
            </p>
            <div className="flex space-x-4">
              <Image
                className="cursor-pointer"
                src={'insta.svg'}
                alt="Lamyy Logo"
                width={32}
                height={32}
              />
              <Image
                className="cursor-pointer"
                src={'twitter.svg'}
                alt="Lamyy Logo"
                width={32}
                height={32}
              />
              <Image
                className="cursor-pointer"
                src={'youtube.svg'}
                alt="Lamyy Logo"
                width={32}
                height={32}
              />
              <Image
                className="cursor-pointer"
                src={'linkedin.svg'}
                alt="Lamyy Logo"
                width={32}
                height={32}
              />
            </div>
          </div>
          {/* <div class="bg-cyan-700 w-full">I have copy</div> */}
        </div>
        <div class="p-6 mt-4 col-span-6 flex flex-col justify-between">
          <div class="grid grid-cols-3 gap-10 h-full w-full leading-loose tracking-wider">
            <div>
              <h4 className="text-hero-text text-sm font-semibold mb-2">Who We Are</h4>
              <ul className="text-hero-text text-sm">
                <li className="mt-4">Company Overview</li>
                <li className="mt-4">Philosophy & Culture</li>
                <li className="mt-4">Our People & Leadership</li>
                <li className="mt-4">Global Presence</li>
                <li className="mt-4">Find A Distributor</li>
                <li className="mt-4">Investor Relations</li>
                <li className="mt-4">Career Opportunities</li>
                <li className="mt-4">General Inquiry</li>
              </ul>
            </div>
            <div>
              <h4 className="text-hero-text text-sm font-semibold mb-2">
                Our Dental Solutions
              </h4>
              <ul className="text-hero-text text-sm">
                <li className="mt-4">BrandFace</li>
                <li className="mt-4">BrandPremiere</li>
                <li className="mt-4">BrandScan Studio</li>
                <li className="mt-4">BrandScan a+</li>
                <li className="mt-4">BrandScan m+</li>
                <li className="mt-4">RIO Scan</li>
                <li className="mt-4">RIO Sensor</li>
                <li className="mt-4">BrandiOS 2</li>
                <li className="mt-4">Branddent Microsan</li>
                <li className="mt-4">Branddent Designer</li>
                <li className="mt-4">Brand Mill</li>
                <li className="mt-4">Branddent Studio</li>
                <li className="mt-4">Brand Smiler</li>
              </ul>
            </div>
            <div>
              <h4 className="text-dark-blue text-sm font-semibold mb-2">
                Why Brand is Different
              </h4>
              <ul className="text-dark-blue text-sm">
                <li className="mt-4">Face Driven Dentistry</li>
                <li className="mt-4">Smile Nation</li>
                <li className="mt-4">Clinical Cases</li>
                <li className="mt-4">Indistry Insights</li>
                <li className="mt-4">Our Dental Solutions</li>
                <li className="mt-4">Our Commitments</li>
                <li className="mt-4">Ethical Management</li>
                <li className="mt-4">Research & Development</li>
                <li className="mt-4">Product Quality & Safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pl-16 pr-14 text-sm">
        <p className="pl-8">&copy; Brand Co., Ltd. 2023, All rights reserved.</p>
        <div className="flex justify-around w-1/2">
          <div className="ml-16 pr-16">Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Logo Section
{
  /* <div className="flex flex-col items-start pl-8">
          <Image src={'footerLogo.svg'} alt="Lamyy Logo" width={120} height={40} />
          <span className="text-sm">
            Since its establishment in 2004, Brand has been leading the global market in
            digital dentistry by proposing a new standard for dental imaging solutions through
            state-of-the-art technology.
          </span>
          <br />
          <span className="text-hero-text text-sm">
            Brand will continuously grow to provide better products and services through
            outstanding technology and experience.
          </span>
          <div className="flex space-x-4">
            <Image
              className="cursor-pointer"
              src={'insta.svg'}
              alt="Lamyy Logo"
              width={32}
              height={32}
            />
            <Image
              className="cursor-pointer"
              src={'twitter.svg'}
              alt="Lamyy Logo"
              width={32}
              height={32}
            />
            <Image
              className="cursor-pointer"
              src={'youtube.svg'}
              alt="Lamyy Logo"
              width={32}
              height={32}
            />
            <Image
              className="cursor-pointer"
              src={'linkedin.svg'}
              alt="Lamyy Logo"
              width={32}
              height={32}
            />
          </div>
        </div> */
}

{
  /* <div className="grid grid-cols-3 gap-12 pr-16 py-16">
          <div className="">
            <h4 className="text-hero-text text-sm font-bold mb-2">Who We Are</h4>
            <ul className="text-hero-text text-sm">
              <li>Company Overview</li>
              <li>Philosophy & Culture</li>
              <li>Our People & Leadership</li>
              <li>Global Presence</li>
              <li>Find A Distributor</li>
              <li>Investor Relations</li>
              <li>Career Opportunities</li>
              <li>General Inquiry</li>
            </ul>
          </div>
          <div>
            <h4 className="text-hero-text text-sm font-bold mb-2">Our Dental Solutions</h4>
            <ul className="text-hero-text text-sm">
              <li>BrandFace</li>
              <li>BrandPremiere</li>
              <li>BrandScan Studio</li>
              <li>BrandScan a+</li>
              <li>BrandScan m+</li>
              <li>RIO Scan</li>
              <li>RIO Sensor</li>
              <li>BrandiOS 2</li>
              <li>Branddent Microsan</li>
              <li>Branddent Designer</li>
              <li>Brand Mill</li>
              <li>Branddent Studio</li>
              <li>Brand Smiler</li>
            </ul>
          </div>
          <div>
            <h4 className="text-dark-blue text-sm font-bold mb-2">Why Brand is Different</h4>
            <ul className="text-dark-blue text-sm">
              <li>Face Driven Dentistry</li>
              <li>Smile Nation</li>
              <li>Clinical Cases</li>
              <li>Indistry Insights</li>
              <li>Our Dental Solutions</li>
              <li>Our Commitments</li>
              <li>Ethical Management</li>
              <li>Research & Development</li>
              <li>Product Quality & Safety</li>
            </ul>
          </div>
        </div> */
}
