import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <section className="relative pt-24 pb-36 bg-white overflow-hidden">
        <div className="relative z-10 container px-4 mx-auto">
          <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
            Get connected
          </h2>
          <p className="mb-20 mt-10 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
            Our contact page is designed to make it easy for our clients to
            reach out to us and receive the support they need.
          </p>
          <div data-aos="fade-down" className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 border border-blueGray-200 rounded-full">
                  <Link to="mailto:guptaamit60600@gmail.com" target="_blank">
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width="32"
                        height="33"
                        viewbox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                          stroke="#4F46E5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Send Email
                </h3>
                <p className="font-medium leading-relaxed">guptaamit606000.com</p>
              </div>
            </div>
            <div data-aos="fade-down"className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-indigo-600 border border-blueGray-200 rounded-full">
                  <Link to="tel:+91 6350625317" target="_blank">
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width="32"
                        height="33"
                        viewbox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Call Us
                </h3>
                <p className="font-medium leading-relaxed">+91 6350 625 317</p>
              </div>
            </div>
            <div data-aos="fade-down" className="w-full md:w-1/3 p-3">
              <div className="p-11 h-full text-center bg-white bg-opacity-90 border border-blueGray-100 rounded-xl shadow-11xl">
                <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                  <Link
                    to="https://goo.gl/maps/TkcfhwDnD9PFhubT6"
                    target="_blank"
                  >
                    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        width="32"
                        height="33"
                        viewbox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                          stroke="#4F46E5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                          stroke="#4F46E5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                  Address
                </h3>
                <p className="font-medium sm:text-xs max-w-xs mx-auto leading-relaxed">
                  15A, Kailashpuri, Ramgarhmode, Jaipur,
                  Rajasthan, India (302002)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center w-screen bg-white relative">
        <div className="container mx-auto my-4 px-4 lg:px-20 relative">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold text-5xl">
                Send us a<br />
                Message
              </h1>
            </div>
            <form
              action="https://app.form2chat.io/f/14c29c31"
              method="POST"
              id="contect_form"
            >
              <fieldset>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    required
                    name="First Name"
                  />{" "}
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name"
                    name="Last Name"
                  />{" "}
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="Email"
                  />{" "}
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    id="phone-input"
                    placeholder="Phone*"
                    required
                    minlength="10"
                    min="10"
                    name="Number"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message"
                    name="Message"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"
                  ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button className="uppercase text-sm font-bold tracking-wide bg-gray-600 text-gray-100 p-4 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="w-full mt-10 lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gray-200 rounded-2xl">
            <div className="flex flex-col text-white">
              <p className="mb-20 mt-20 text-lg text-black text-center font-medium leading-normal md:max-w-6xl mx-auto">
                We love hearing from our visitors and clients! If you have any questions, comments, or feedback, please don't hesitate to get in touch with us. You can reach out to us through our contact form or connect with us on social media. We're always here to help and look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-full bg-gray-300 rounded-lg overflow-hidden h-screen p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5181.642529348266!2d75.83828512743814!3d26.950485346726577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db16098cb815d%3A0xffee9b001eca6b01!2sTalchiri%20Agro!5e0!3m2!1sen!2sin!4v1677945185991!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{
                border: "0",
                filter: "grayscale(0) contrast() opacity(1)",
              }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  15,b, Kailashpuri, Ramgarhmode, Jaipur,
                  Rajasthan
                  <br />
                  302002
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link to="mailto:guptaamit60600@gmail.com" target="_blank" className="text-indigo-500 leading-relaxed">
                  guptaamit606000.com
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <Link to="tel:+91 6350625317" target="_blank" className="leading-relaxed text-purple-500">+91 635-062-5317</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
