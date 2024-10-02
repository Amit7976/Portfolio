import React from "react";
import build from "../img/re-design.jpg";
import appDevelopment from "../img/app-development.png";
import maintenance from "../img/maintenance.png";
import websiteUi from "../img/website ui.png";
import writing from "../img/writing.png";
import more from "../img/more.png";
import { Link } from "react-router-dom";


const features = [
    {
        name: "Website development",
        link: "/websitedevelopment",
        description:
            "This involves coding the website using HTML, CSS, and JavaScript, and integrating any necessary backend functionality.",
        Images: appDevelopment,
    },
    {
        name: "Re-Design",
        link: "/redesign",
        description:
            "Improving website's look, feel, user experience, and functionality through redesign to attract and retain more visitors.",
        Images: build,
    },
    {
      name: "Website maintenance",
      link:"/websitemaintenance",
        description:
            " This involves regularly updating the website's content and software to ensure it remains secure, functional, and up-to-date.",
        Images: maintenance,
    },
    {
        name: "Website Design",
        link: "/websitedesign",
        description:
            "This involves designing the layout, color scheme, typography, and other visual elements of the website.",
        Images: websiteUi,
    },
    {
      name: "Content creation",
      link:"/contentcreation",
        description:
            "This involves creating written, visual, or multimedia content for the website, including copywriting, graphic design, photography, and video production.",
        Images: writing,
    },
    {
      name: "More Skills",
      link:"/skills",
        description:
            "click and explore my more skills and also see all languages i know well and also you get details of all languages there",
        Images: more,
    },
];
const Skills = () => {
    return (
      <>
        {/* Feature section with grid */}
        <div className="relative py-16 sm:py-24 lg:py-32  bg-gradient-to-r from-purple-400 to-indigo-500">
         
          <div className="mx-auto relative max-w-md px-4 text-center sm:max-w-3xl  sm:px-6 lg:px-8 lg:max-w-7xl">
             
            <p
              className="my-2 text-3xl text-gray-50 tracking-tight sm:text-5xl"
              style={{ fontFamily: "sans-serif" }}
            >
              Skills
            </p>
            <p className="mt-10 max-w-prose mx-auto text-xl text-gray-200">
              Providing the best services involves understanding the customer's
              needs, offering quality solutions, delivering them efficiently,
              and maintaining a high level of communication and customer
              satisfaction.
            </p>
            <div className="mt-12 relative">
               <div aria-hidden="true" className="hidden lg:block">
                  <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
                  <svg
                    className="absolute -top-12 -right-28"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-white"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                    />
                  </svg>
                  <svg
                  className="absolute -bottom-20 -left-28"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-white"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                    />
                  </svg>
                </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative ">
               
                {features.map((feature) => (
                  
                  <div data-aos="fade-in" key={feature.name} className="pt-6 relative ">
                    
                    <div className="flow-root sm:h-80 bg-white  rounded-lg px-6 py-8 shadow-lg hover:shadow-xl lg:hover:scale-105 duration-1000">
                      <Link data-aos="zoom-in-up" to={feature.link} className="mt-6 ">
                        <div>
                          <span className="inline-flex sm:-m-20 left-0 items-center justify-center p-2 rounded-full shadow-xl">
                            <img
                              src={feature.Images}
                              className="h-28 w-28 text-white"
                              aria-hidden="true"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3 className="mt-12 text-lg font-medium text-gray-900 tracking-tight">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Skills;
