import React from 'react'
import catererssss from '../../img/work/catererssfp.png'
import trandyclothesmainlook from '../../img/work/trandyclothesmainlook.png'
import portfolio1forcompletewebsite from '../../img/work/portfolio1forcompletewebsite.png'
import kfcmain from '../../img/work/kfcmain.png'
import subodhmain from '../../img/work/subodhmain.png'
import khannaGemsmain from '../../img/work/khannaGemsmain.png'
import { Link } from 'react-router-dom'

const products = [
    {
        name: 'Catererss',
        href: 'https://catererss.com/',
        imageSrc: catererssss,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        name: 'Trandy Clothes',
        href: 'https://amit7976.github.io/trandyclothes.github.io/',
        imageSrc: trandyclothesmainlook,
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        name: 'Portfolio',
        href: 'https://portfolio.catererss.com/',
        imageSrc: portfolio1forcompletewebsite,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        name: 'KFC',
        href: 'https://kfctemp.catererss.com/',
        imageSrc: kfcmain,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        name: 'Subodh College',
        href: 'https://subodhcollege.catererss.com/',
        imageSrc: subodhmain,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
        name: 'Khanna Gems',
        href: 'https://codepen.io/amit60600/full/xxyNGyE',
        imageSrc: khannaGemsmain,
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
]

const Template = () => {
    return (
      <>
        <div className="bg-white">
          <div aria-hidden="true" className="relative">
            <img
              loading="lazy"
              src="https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?w=1380&t=st=1683903937~exp=1683904537~hmac=1c443dd00f5a591e0de60035b24d84aa93bb84d67bd25add3c9c0848eb2b6b01"
              alt=""
              className="w-full object-center object-cover"
              style={{ height: "500px" }}
            />
            <div className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-white" />
          </div>
          <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Website Templates
              </h2>
              <p className="mt-4 text-gray-500">
                All these website templates are used to make your website
                faster, it saves your time, accelerates the speed of website
                making and it gives more time for useful but complex tasks.
              </p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-14 sm:px-6 lg:max-w-full lg:px-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-16">
              {products.map((product) => (
                <div key={product.href}>
                  <Link
                    to={product.href}
                    target="_blank"
                    className="group p-10 rounded"
                  >
                    <div
                      data-aos="flip-right"
                      className="relative w-full aspect-w-1 aspect-h-1 rounded-lg  shadow-2xl overflow-hidden sm:aspect-w-2 sm:aspect-h-3"
                    >
                      <img
                        loading="lazy"
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover "
                      />
                      <div className="absolute bottom-0 h-96 inset-x-0 rounded-lg p-4 flex items-end justify-center overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-3xl font-semibold text-white">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default Template