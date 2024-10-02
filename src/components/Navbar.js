import React from 'react';
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { DownloadIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "../img/solution/logo.png";
import mainLogo from "../img/solution/main__logo.png";

const navigation = [
  { name: "Home", to: "/", id: "1" },
  { name: "About", to: "/about", id: "2" },
  { name: "Skills", to: "/skills", id: "3" },
  { name: "Education", to: "/education", id: "4" },
  { name: "Work", to: "/work", id: "5" },
  { name: "Experience", to: "/experience", id: "6" },
  { name: "Contact", to: "/contact", id: "7" },
];

const Navbar = () => {
  // Function to handle the download button click
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Resume/Amit-Gupta-Resume.pdf';
    downloadLink.download = 'Amit_Gupta_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <Popover as="header" className="relative">
        <div className="bg-gray-900 py-6">
          <nav
            className="relative max-w-full mx-auto flex items-center justify-between px-4 sm:px-10"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <Link to="/">
                  <h1 className="sr-only">Amit Agrawal</h1>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt=""
                  />
                </Link>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 lg:flex lg:ml-10">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex md:items-center lg:space-x-6">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                <DownloadIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                <span>Download CV</span>
              </button>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            style={{ zIndex: "99999" }}
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
          >
            <div className="rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-indigo-600  overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={mainLogo}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                   
                   
                  <Popover.Button key={item.id}
                      as={Link}
                      to={item.to} onClick={Popover.Button}
                      className="block p-5 rounded-md text-lg font-medium text-white hover:bg-gray-30 hover:text-gray-900 hover:font-bold"
                      >
                     {item.name}
                  </Popover.Button>
                  ))}
                </div>
              </div>
              <div className="lg:hidden flex items-center m-5">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-gray-700"
                >
                  <DownloadIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}

export default Navbar;
