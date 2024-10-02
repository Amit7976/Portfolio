import React from "react";
import screenshotcatererss from "../img/screenshot.png";
import screenshottrandyclothes from "../img/Screenshot (36).png";
import catererssLogo from "../img/logo-color.png";
import trandyclothesLogo from "../img/logo.jpg";
import portfolio1ss from "../img/work/portfolio1ss.png";
import textConverterfordaw from "../img/work/textConverterfordaw.png";
import portfolio1logo from "../img/work/portfolio1logo.png";
import textconverterlogo from "../img/work/textconverterlogo.png";
import randomChat from '../img/work/randomChatApp.png';
import randomChatLogo from '../img/work/randomChatLogo.png';
import { Link } from "react-router-dom";

const CompleteWebsite = [
  {
    logoSrc: randomChatLogo,
    mainSrc: randomChat,
    webName: "Random Chat Web Application",
    webDesc:
      "This chat application stands out by not relying on Socket.io or WebSocket, making it highly efficient and capable of handling a large number of users without straining server resources. Designed with scalability in mind, the app stores chat data locally to conserve bandwidth and reduce server load, allowing users to view chat history even when offline. The chat application is fast, reliable, and user- friendly.I am continually improving its features and excited about its potential as a valuable communication and collaboration tool.",
    webSrc: "https://github.com/Amit7976/RandomChat",
  },
  {
    logoSrc: catererssLogo,
    mainSrc: screenshotcatererss,
    webName: "CATERERSS.COM",
    webDesc:
      "I created the website for Catererss.com. Using my web development skills, I designed and developed the site to ensure that it met the specific needs of the client. I worked closely with the team at Catererss.com to understand their requirements and preferences, and incorporated these into the site design. Through careful planning and attention to detail, I was able to create a website that effectively showcased the company's services and helped to attract new customers. Overall, I am proud to have played a key role in the development of this successful website.",
    webSrc: "http://www.catererss.com",
  },
  {
    logoSrc: trandyclothesLogo,
    mainSrc: screenshottrandyclothes,
    webName: "Trandyclothes.com",
    webDesc:
      "I have designed and developed the website for TrandyClothes.com. My extensive knowledge and expertise in web development allowed me to create a visually appealing and user-friendly website that effectively showcases the company's products. I worked closely with the team at TrandyClothes.com to understand their requirements and preferences, and implemented these into the site design. From the layout and color scheme to the navigation and functionality, every aspect of the website was carefully crafted to ensure a positive user experience. I am proud to have contributed to the success of TrandyClothes.com by creating a website that reflects the company's brand and engages customers in a meaningful way.",
    webSrc: "https://amit7976.github.io/trandyclothes.github.io/",
  },
  {
    logoSrc: portfolio1logo,
    mainSrc: portfolio1ss,
    webName: "Portfolio website",
    webDesc:
      "I developed a one-page portfolio website for a website designer and developer using HTML, CSS, and JavaScript. The site features a visually appealing layout and smooth scrolling navigation, with interactive elements such as hover effects and animations. The design effectively showcases the developer products and identity, while also providing visitors with a seamless browsing experience. Collaborating closely with the developer, I ensured that their preferences and requirements were met in the site's design. With a focus on usability and accessibility, I created a responsive design that adapts to different screen sizes.",
    webSrc: "https://portfolio.catererss.com/",
  },
  {
    logoSrc: textconverterlogo,
    mainSrc: textConverterfordaw,
    webName: "Convert Text",
    webDesc:
      "I have designed and developed the website for ConvertText. My extensive knowledge and expertise in web development allowed me to create a visually appealing and user-friendly website that effectively showcases the company's products. Convert Text is a portfolio website built using React that provides a user-friendly platform to convert text in different formats. With its sleek and modern design, this website offers an easy-to-use interface for users to convert their text from one format to another with just a few clicks. With its powerful conversion engine and intuitive user experience, this website is the perfect tool for anyone looking to quickly and easily convert text.",
    webSrc: "https://amit.catererss.com/",
  },
];

const Experience = () => {
  return (
    <>
      {/* Feature section with screenshot */}

      <div className="relative bg-gray-50 py-16 sm:py-24 lg:pb-32">
        {CompleteWebsite.map((website) => (
          <div key={website.webSrc} className="mx-auto max-w-md px-4 mt-10 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl border p-10"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between text-left ">
              <img
                loading="lazy"
                src={website.logoSrc}
                alt=""
                className="w-1/4 shadow-lg p-2 rounded-xl"
              />
              <div className="w-full lg:w-3/4 lg:ml-20">
                <h1 className="uppercase my-5 text-xl sm:text-xl lg:text-3xl font-semibold text-gray-500">
                  <Link to={website.webSrc} target="_blank">
                    {website.webName}
                  </Link>
                </h1>
                <p className="text-sm mt-10 sm:text-base lg:text-lg text-gray-900">
                  {website.webDesc}
                </p>
              </div>
            </div>
            <div className="mt-12" data-aos="fade-up">
              <img
                className="rounded-lg shadow-xl"
                src={website.mainSrc}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
