import React from "react";
import animation1 from "../../img/work/animation1.png";
import calculatorfordaw from "../../img/work/assets/calculatorfordaw.png";
import assets1 from "../../img/work/assets/assets1.png";
import assets2 from "../../img/work/assets/assets2.png";
import assets3 from "../../img/work/assets/assets3.png";
import assets4 from "../../img/work/assets/assets4.png";
import assets5 from "../../img/work/assets/assets5.png";
import ytfordaw from "../../img/work/ytfordaw.png";
import { Link } from "react-router-dom";

const callouts = [
  {
    name: "Dropdown",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/KKGLpNr",
    imageSrc: assets3,
    imageAlt: "",
  },
  {
    name: "Card",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/ExdzjpK",
    imageSrc: assets4,
    imageAlt: "",
  },
  {
    name: "Buttons",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/ZEqNGpZ",
    imageSrc: assets5,
    imageAlt: "",
  },
  {
    name: "Calculator",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/bGjZEgQ",
    imageSrc: calculatorfordaw,
    imageAlt: "",
  },
  {
    name: "Share Icons",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/OJBYVpQ",
    imageSrc: assets1,
    imageAlt: "",
  },
  {
    name: "Social Media Icons",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/MWPdwJR",
    imageSrc: assets2,
    imageAlt: "",
  },
  {
    name: "YouTube",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/xxyNGrZ",
    imageSrc: ytfordaw,
    imageAlt: "",
  },
  {
    name: "Animation",
    category: "Assets",
    href: "https://codepen.io/amit60600/full/ZEqNGWZ",
    imageSrc: animation1,
    imageAlt: "",
  },
];

const Allassets = () => {
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto">
        <div className="max-w-full mx-auto  lg:max-w-none">
          <div aria-hidden="true" className="relative">
            <img
              loading="lazy"
              src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
              alt=""
              className="w-full object-center object-cover"
              style={{ height: "450px" }}
            />
            <div className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-white" />
          </div>

          <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Assets
              </h2>
              <p className="mt-4 text-gray-500">
                All this website assets are used to make your website faster, it
                saves your time, accelerates website speed and it gives more
                time for useful but complex tasks
              </p>
            </div>
          </div>
          <div className="mt-6 max-w-7xl mx-auto space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.href} className="group relative">
                <div
                  data-aos="fade-up"
                  className="aspect-w-4 aspect-h-3 mt-20 lg:mt-20 rounded-lg overflow-hidden bg-white flex flex-col items-center p-2"
                  style={{ boxShadow: "#e7e7e75e 0px 0px 17px 13px" }}
                >
                  <img
                    loading="lazy"
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="object-center object-cover sm:rounded-xl"
                  />
                </div>
                <h3 className="my-6 ml-5 sm:ml-2 text-2xl font-bold sm:text-xl text-gray-500">
                  <Link to={callout.href} target="_blank">
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allassets;
