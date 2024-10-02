import React from 'react'
import catererss from "../img/company-logo-catererss.png";
import trandyclothes from "../img/company-logo-tc.png";
import ekapdelogo from "../img/company-logo-ekapde.png";
import talchirilogo from "../img/company-logo-talchiriagro.png";
import samyaklogo from "../img/company-logo-samyak.png";

const Companies = () => {
  return (
    <>
      {/* Logo Cloud */}
      <div className="bg-white relative  overflow-hidden">
        <div className="max-w-7xl lg:mx-32 2xl:mx-auto py-28 px-4 sm:px-6 lg:px-8">
          <div aria-hidden="true" className="hidden lg:block overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
            <svg
              className="absolute -bottom-66 -right-64"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
              style={{ filter: "blur(1px)" }}
              data-aos="slide-up"
              data-aos-duration="2000"
              data-aos-once="false"
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
                    className="text-gray-200"
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
              className="absolute -top-20 m-1 -left-64"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
              style={{ filter: "blur(1px)" }}
              data-aos="slide-down"
              data-aos-duration="2000"
              data-aos-once="false"
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
                    className="text-gray-200"
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
          <p className="text-center text-sm mb-24 font-semibold uppercase text-gray-600 tracking-wider">
            Trusted by over 5 very average small businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 items-center md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                data-aos="zoom-in"
                className="h-20"
                src={catererss}
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 flex items-center">
              <img
                data-aos="zoom-in"
                className="h-20"
                src={trandyclothes}
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                data-aos="zoom-in"
                className="h-20"
                src={ekapdelogo}
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                data-aos="zoom-in"
                className="h-14"
                src={talchirilogo}
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                data-aos="zoom-in"
                className="h-16"
                src={samyaklogo}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companies
