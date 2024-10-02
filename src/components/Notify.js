import React, { useEffect } from "react";
import { useState } from "react";
import db from '../firebase.js';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const Notify = () => {

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
      localStorage.setItem("Notify", "Thanks! You will receive updates via email.");
      setInput("");
      window.location.reload(); // Reload the page
    }
  };


  return (
    <>
      {/* CTA section */}
      <div className="relative bg-white my-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
          <svg
            data-aos="slide-down"
            className="absolute -top-12 right-10 -ml-3"
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
                  className="text-gray-300"
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
            data-aos="slide-up"
            className="absolute -bottom-12 left-10 -ml-3"
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
                  className="text-gray-300"
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
        <div className="mx-3 sm:mx-auto max-w-full px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-purple-500 overflow-hidden shadow-2xl sm:px-12 sm:py-20">

            <div className="relative">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-white capitalize tracking-tight sm:text-4xl">
                  new projects update
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                  Simply leave your email, and get all the new updates about my New Projects.
                </p>
              </div>
              <form onSubmit={submitHandler} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    onChange={inputHandler}
                    disabled={isSubmitted}
                    required
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500"
                    placeholder={placeholder}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-700 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notify;
