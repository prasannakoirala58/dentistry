'use client';
import React from 'react';
import { useState, useEffect } from 'react';

// Define a custom hook that returns the scroll direction
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState('up');

  useEffect(() => {
    // Define a variable to store the previous scroll position
    let prevScrollPos = window.scrollY;

    // Define a function that handles the scroll event
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPos = window.scrollY;

      // Compare the current and previous scroll positions and set the scroll direction
      if (prevScrollPos > currentScrollPos) {
        setScrollDir('up');
      } else {
        setScrollDir('down');
      }

      // Update the previous scroll position
      prevScrollPos = currentScrollPos;
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return the scroll direction
  return scrollDir;
};

const NavBar = () => {
  // Use the custom hook to get the scroll direction
  const scrollDir = useScrollDirection();

  // Define a state variable that controls the navbar visibility
  const [visible, setVisible] = useState(true);

  // Update the navbar visibility based on the scroll direction
  useEffect(() => {
    if (scrollDir === 'down') {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [scrollDir]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="bg-nav-color p-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img src="LogoNav.svg" alt="Logo" className="h-8 pl-20 cursor-pointer" />
          </a>
        </div>

        <div className="flex items-center space-x-4 pr-16">
          <a
            href="#"
            className="text-white font-inter text-xs font-light leading-15 tracking-wider text-left hover:text-nav-hover hover:cursor-pointer"
          >
            WHO WE ARE
          </a>
          <a
            href="#"
            className="text-white font-inter text-xs font-light leading-15 tracking-wider text-left hover:text-nav-hover hover:cursor-pointer"
          >
            OUR DENTAL SOLUTION
          </a>
          <a
            href="#"
            className="text-white font-inter text-xs font-light leading-15 tracking-wider text-left hover:text-nav-hover hover:cursor-pointer"
          >
            BRAND SUPPORT
          </a>
          <a
            href="#"
            className="text-white font-inter text-xs font-light leading-15 tracking-wider text-left hover:text-nav-hover hover:cursor-pointer"
          >
            WHY IS BRAND DIFFERENT?
          </a>

          {/* Globe svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white hover:text-nav-hover hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          {/* Search svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white hover:text-nav-hover hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
