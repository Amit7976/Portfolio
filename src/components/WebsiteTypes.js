import React from "react";

import blogwebsite from "../img/web types/blog website.png";
import companywebsite from "../img/web types/company website.png";
import ecommercewebsite from "../img/web types/ecommerce website.png";
import portfolioWebsite from "../img/web types/portfolio website.png";
import webApp from "../img/web types/web app.png";
import { Link } from "react-router-dom";

const stats = [
  {
    id: 1,
    eg: "Catererss",
    name: "Company Website",
    image: companywebsite,
    to: "https://amit7976.github.io/catererss/",
  },
  {
    id: 2,
    eg: "Same Website",
    name: "PortFolio Website",
    image: portfolioWebsite,
    to: "https://portfolio.catererss.com/",
  },
  {
    id: 3,
    eg: "Trandyclothes",
    name: "Ecommerce Website",
    image: ecommercewebsite,
    to: "https://amit7976.github.io/trandyclothes.github.io/",
  },
  { id: 4, eg: "Same Website", name: "Web App", image: webApp, to: "/" },
  { id: 5, eg: "Coming Soon", name: "Blog Website", image: blogwebsite, to:"/bloghome" },
];

const WebsiteTypes = () => {
  return (
    <>
      <section className="py-48 sm:py-28  bg-gray-900">
        <p className="mb-28 max-w-full uppercase mx-10 text-xl text-gray-200 text-center">
          I can create various types of websites for{" "}
          <span className="text-indigo-400">you!</span>
        </p>
        <div className="">
          <div className="mx-auto max-w-full px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((stat) => (
                <Link
                  target="_blank"
                  className="text-bold leading-7 text-gray-400"
                  to={stat.to}
                >
                  <div
                    data-aos="fade-down"
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4 text-center"
                  >
                    <img
                      loading="lazy"
                      src={stat.image}
                      alt=""
                      className="w-20 mb-2 mx-auto"
                    />
                    <dd className=" text-3xl font-semibold tracking-tight text-gray-300 sm:text-2xl">
                      {stat.name}
                    </dd>

                    {stat.eg}
                  </div>
                </Link>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteTypes;
