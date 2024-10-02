import { Link } from 'react-router-dom'
import man from '../img/about image.png'
const stats = [
    { label: 'Till', value: '2021' },
    { label: 'Projects', value: '20+' },
    { label: 'Serve', value: '4+' },
]

export default function Aboutus() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative mt-10 mb-10 lg:h-screen rounded-2xl shadow-xl overflow-hidden min-h-400 min-h-700">
                <img
                  loading="lazy"
                  data-aos="zoom-in"
                  className="absolute inset-0 h-full w-full object-cover"
                  src={man}
                  alt=""
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-50 lg:opacity-60" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-gray-900 text-center sm:text-left font-extrabold tracking-tight text-5xl">
                On a mission to build a New Web
              </h2>
              <div className="mt-10 text-gray-500 space-y-6">
                <q className="text-xl text-purple-400">
                  Welcome to my website! I'm a website designer and developer,
                  and I'm passionate about creating stunning, user-friendly, and
                  responsive websites that help businesses establish a strong
                  online presence.
                </q>
                <p className="text-lg text-gray-900 leading-7">
                  With an eye for design and a passion for coding, I bring
                  websites to life and create stunning user experiences. Get
                  ready to be wowed!
                </p>
                <p className="text-lg text-gray-900 leading-7">
                  I start my work with the belief that every business needs a
                  website that reflects its unique identity and values. That's
                  why I work closely with my clients to understand their goals,
                  and then use my expertise to create customized solutions that
                  help them achieve their objectives.
                </p>
                <p className="text-lg text-gray-900 leading-7">
                  As a website designer and developer, I'm an expert in the
                  latest technologies and trends in the industry. I specialize
                  in creating websites that not only look great but also perform
                  exceptionally well on search engines. I understand the
                  importance of responsive design, and I make sure that all of
                  my websites are optimized for viewing on any device.
                </p>
                <p className="text-lg text-gray-900 leading-7">
                  Communication is key to delivering successful projects, which
                  is why I work closely with my clients throughout the entire
                  design and development process. I'm responsive, reliable, and
                  transparent, and I'm always available to answer any questions
                  or concerns my clients may have.
                </p>
                <p className="text-lg text-gray-900 leading-7">
                  Whether you're a small business owner looking to establish a
                  new online presence or a large corporation in need of a
                  complex e-commerce website, I have the expertise and
                  experience to deliver a solution that meets your needs. I'm
                  dedicated to delivering exceptional results on time and within
                  budget, and I stand behind my work with a satisfaction
                  guarantee.
                </p>
                <p className="text-lg text-gray-900 leading-7">
                  Thank you for considering me for your website design and
                  development needs. I look forward to the opportunity to work
                  with you and help your business thrive in the digital age.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    data-aos="fade-down"
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-xl font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link to="/" className="text-xl font-medium text-indigo-600">
                  {" "}
                  See more about how I change the web world{" "}
                  <span aria-hidden="true">&rarr;</span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
