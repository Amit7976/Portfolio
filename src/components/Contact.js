import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import team_work from "../img/team_work.jpeg";

const Contact = () => {
  return (
    <>
      {/* CTA Section */}
      <div className="relative bg-gray-800 pb-2">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={team_work}
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Award winning Work
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let's Work Toghter
            </p>
            <p className="mt-3 text-lg text-gray-300">
              I believe in building strong relationships with my customers, and
              I'd love to connect with you too! Whether you are looking for
              website design, development, SEO, or content creation services, I
              am here to help. Let's work together to take your online presence
              to the next level!
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the Contact Page
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
