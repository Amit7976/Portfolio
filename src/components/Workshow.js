import React from 'react'
import { Link } from 'react-router-dom';
import catererssfordaw from '../img/work/catererssfordaw.png'
import trandyclothesfordaw from '../img/work/trandyclothesfordaw.png'
import passGen from '../img/work/pass-gen.png'
import a2Theme from '../img/work/a2-theme.png'
import randomChat from '../img/work/randomChatApp.png'
import weatherApp from '../img/work/weatherApp.png'


const projectshow = [
  {
    id: 1,
    title: "Weather-App",
    href: "https://amit7976.github.io/Weather-App",
    imageUrl: weatherApp,
  },
  {
    id: 1,
    title: "Pass-Generator Chrome Extension",
    href: "https://github.com/Amit7976/Advance-Password-Generator-Chrome-Extension",
    imageUrl: passGen,
  },
  {
    id: 1,
    title: "A.2 VS-Code Theme",
    href: "https://marketplace.visualstudio.com/items?itemName=AmitGupta60600.a2-theme",
    imageUrl: a2Theme,
  },
  {
    id: 1,
    title: "Random Chat App",
    href: "https://github.com/Amit7976/RandomChat",
    imageUrl: randomChat,
  },
  {
    id: 1,
    title: "Catererss",
    href: "https://catererss.com/",
    imageUrl: catererssfordaw,
  },
  {
    id: 2,
    title: "TrandyClothes",
    href: "https://amit7976.github.io/trandyclothes.github.io/",
    imageUrl: trandyclothesfordaw,
  },
];


const WorkShow = () => {
  return (
    <>
      {/* Feature section with screenshot */}
      <div className="relative bg-gray-5 mb-12 0 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <p className="mt-2 text-3xl font-extrabold text-gray-500 tracking-tight sm:text-5xl">
              Projects
            </p>
            <p className="mt-10 max-w-prose mx-auto text-lg text-gray-500">
              Take a look at some of my sample projects to see the quality of my
              awesome work. Click on the buttons to explore and discover more of
              my wonderful creations.
            </p>
          </div>
        </div>
        <div className="mt-12 mb-20 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {projectshow.map((post) => (
            <div
              data-aos="fade-up"
              key={post.id}
              className="flex flex-col rounded shadow-lg hover:-translate-y-2 duration-500 overflow-hidden"
            >
              <Link to={post.href} target='_blank' className="block mt-2">
                <div className="flex-shrink-0">
                  <img
                    className="h-60 w-full object-cover rounded "
                    src={post.imageUrl}
                    alt=""
                    loading='lazy'
                  />
                </div>
                <div className="flex-1 bg-white p-6 py-5 text-center flex flex-col justify-between relative">
                  <div className="flex-1">
                    <p className="text-2xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link
            to="/work"
            type="button"
            className="flex items-center px-4 py-2 text-xl font-medium rounded-md text-purple-700 bg-indigo-100 hover:text-indigo-100 hover:bg-purple-700"
          >
            Discover More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkShow
