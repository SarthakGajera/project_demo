import React from 'react';
import logo from '../../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-earthBrown rounded-lg shadow m-2 p-2">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-28 bg-transparent" alt="EarthAlly Logo" />
          </a>
          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center mb-1 text-sm font-medium text-ivoryWhite sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-skyBlue">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-skyBlue">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 hover:text-skyBlue">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-skyBlue">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Divider */}
        <hr className="my-1 border-slateGray sm:mx-auto lg:my-8" />
        {/* Copyright Text */}
        <span className="block text-sm text-ivoryWhite sm:text-center">
          © 2023{' '}
          <a href="#" className="hover:underline hover:text-skyBlue">
            EarthAlly™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
