import React from 'react'
import { Link } from "react-router-dom";
import Boostyourconversionrate from '../img/blogs/Boost your conversion rate.png'
import Improveyourcustomerexperience from '../img/blogs/Improve your customer experience.jpg'
import seo from '../img/blogs/seo.jpg'

const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    to: "/articleblog",
    category: { name: "Article", to: "#" },
    imageUrl:
      Boostyourconversionrate,
    preview:
      "Boosting your conversion rate involves optimizing your website design and content to increase the percentage of visitors who take action, such as making a purchase or filling out a form. Let us help you achieve higher conversions.",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    to: "/videoblog",
    category: { name: "SEO", to: "#" },
    imageUrl:
      seo,
    preview:
      "By implementing effective search engine optimization techniques, you can increase your website's visibility and attract more potential customers, ultimately driving sales and boosting your business's bottom line.",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    to: "/casestudyblog",
    category: { name: "Case Study", to: "#" },
    imageUrl:
      Improveyourcustomerexperience,
    preview:
      "Improving your customer experience involves providing excellent service, user-friendly interfaces, and fast, reliable support. Let us help you enhance your customer experience and build lasting relationships with your clients.",
  },
];
const Blogshome = () => {
  return (
    <>
      {/* Blog section */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="mb-10 text-3xl font-extrabold text-gray-500 tracking-tight sm:text-5xl">
              {/* Blogs */}
            </h2>
            {/* <p className="mt-10 mx-auto max-w-prose text-lg text-gray-500">
              Our helpful resources can assist in boosting your conversion rate,
              optimizing for search engines, and improving your overall customer
              experience. Let us help you take your online presence to the next
              level.
            </p> */}
          </div>
          <div className="mt-15 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-5 duration-500"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between relative">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <Link to={post.to} className="hover:underline">
                        {post.category.name}
                      </Link>
                    </p>
                    <Link to={post.to} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 mb-20 text-base text-gray-500">
                        {post.preview}
                      </p>
                      </Link>
                      <Link
                        to={post.to}
                        type="button"
                        className="inline-flex items-center px-4 py-2 m-6 border border-gray-300 absolute bottom-0 left-0 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white"
                      >
                        Read...
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogshome
