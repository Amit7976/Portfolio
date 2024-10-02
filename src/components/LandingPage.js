import React, { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import man from "../img/about image.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import db from "../firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const LandingPage = () => {
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your email");

  useEffect(() => {
    const isNotified = localStorage.getItem("Notified");
    const placeholder = localStorage.getItem("Notify");
    if (isNotified) {
      setIsSubmitted(true);
      setPlaceholder(placeholder);
    }
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      // fire base
      db.collection("NotifyEmails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setIsSubmitted(true);
      localStorage.setItem("Notified", "true");
      localStorage.setItem(
        "Notify",
        "Thanks! You will receive updates via email"
      );
      setInput("");
      window.location.reload(); // Reload the page
    }
  };

  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-0  sm:overflow-hidden">
      <div className="mx-auto max-w-full lg:px-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-full px-10 sm:max-w-full sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <p className="inline-flex items-center text-white rounded-full p-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                <span className=" block px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full">
                  Available
                </span>
              </p>
              <h1 className="mt-4 text-6xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
                <span className="block">Hi There</span>
                <span className="py-5 text-4xl mt-0 lg:mt-0 block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 sm:pb-5 lg:flex items-center">
                  <span className="block -mb-8 lg:contents">I am</span>{" "}
                  <span className="ml-5 font-10-vw lg:text-6xl special-for-tab">
                    <Typewriter
                      options={{
                        strings: [
                          "Amit Agrawal",
                          "Web Designer",
                          "Web Developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                I'm a website designer and developer, and I'm
                passionate about creating stunning, user-friendly, and
                responsive websites that help businesses establish a strong
                online presence.
              </p>
              <div className="mt-10 sm:mt-12 hidden lg:block">
                <form
                  onSubmit={submitHandler}
                  className="sm:max-w-xl sm:mx-auto lg:mx-0"
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        onChange={inputHandler}
                        value={input}
                        disabled={isSubmitted}
                        placeholder={placeholder}
                        required
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        disabled={isSubmitted}
                        className="w-full py-3 px-4 flex rounded-md shadow bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium "
                      >
                        Send
                        <ExternalLinkIcon
                          className="-mr-1 ml-1 h-6 w-6 text-gray-100"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Let's connect with us! Share your email so we contact you.
                    By providing your email, you agree to our{" "}
                    <Link to="/terms" className="font-medium text-white">
                      terms of service
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative overflow-hidden">
            <div className="relative">
              <div aria-hidden="true" className="hidden sm:block">
                <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
                <svg
                  className="absolute top-8 -right-8 rounded-2xl"
                  width={504}
                  height={592}
                  fill="none"
                  viewBox="0 0 404 392"
                  data-aos="zoom-in"
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
                        className="text-gray-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={504}
                    height={592}
                    fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                  />
                </svg>
              </div>
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative xl:mx-auto 2xl:origin-bottom 2xl:scale-100 w-full"
                src={man}
                data-aos="slide-up"
                alt=""
                width={545}
                height={764}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
