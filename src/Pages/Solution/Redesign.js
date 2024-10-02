import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { BsFiletypeScss } from 'react-icons/bs';
import { SiTailwindcss, SiBootstrap, SiReact, SiCodemagic, SiAlwaysdata, SiAdobephotoshop } from 'react-icons/si';
import webredesignbanner from '../../img/solution/web re design banner.jpg'
import ImprovedUserExperience from '../../img/solution/Improved User Experience.jpg'
import EnhancedVisualAppeal from '../../img/solution/Enhanced Visual Appeal.jpg'
import webFunctionality from '../../img/solution/web Functionality.jpg'
import seo from '../../img/solution/seo.jpg'
import CompetitiveEdge from '../../img/solution/Competitive Edge.jpg'

const features = [
    {
        name: 'HTML',
        description: 'markup language used for creating and structuring content on the web. It is the foundation of all web pages and provides the basic structure and layout.',
        icon: FaHtml5,
    },
    {
        name: 'CSS',
        description: 'styling language used to add design and visual elements to HTML documents. It is used to control the layout, typography, colors, and other visual aspects of a website.',
        icon: FaCss3Alt,
    },
    {
        name: 'Scss',
        description: 'SCSS is a preprocessor language that extends the functionality of CSS by allowing developers to use variables, mixins, functions, and more. It compiles into CSS for use in styling web pages.',
        icon: BsFiletypeScss,
    },
    {
        name: 'JavaScript',
        description: 'programming language used for creating interactive web pages and web applications. It is commonly used to add dynamic effects, interactivity, and functionality to websites.',
        icon: FaJs,
    },
    {
        name: 'Adobe Photoshop',
        description: 'Adobe Photoshop is a graphics editing software used to create and edit images, designs, and graphics for the web and print. It is commonly used by designers and web developers for creating website layouts and graphics.',
        icon: SiAdobephotoshop,
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework that provides a set of pre-designed classes to style HTML elements. It allows for rapid prototyping and customization, making it a popular choice for developers.',
        icon: SiTailwindcss,
    },
    {
        name: 'Bootstrap',
        description: 'popular front-end framework used to create responsive and mobile-first websites. It provides a set of pre-designed HTML, CSS, and JavaScript components that can be easily customized.',
        icon: SiBootstrap,
    },
    {
        name: 'React',
        description: "React is a JavaScript library for building user interfaces. It uses reusable components and a virtual DOM for efficient updates and rendering. Created by Facebook, it's popular for its flexibility and ease of use.",
        icon: SiReact,
    },
]

export default function Redesign() {
    return (
        <div className="bg-white md:pt-10">


            <main>
                {/* Hero section */}
                <div className="relative ">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                loading="lazy"
                                    className="h-full w-full object-cover"
                                    src={webredesignbanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Website</span>
                                    <span className="block text-indigo-200">Re-DESIGN</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Website redesign is the process of updating an existing website to improve its appearance, functionality, and performance for better user engagement, increased conversions, and enhanced brand perception.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm lg:text-xl font-bold text-gray-600 max-w-5xl text-center'>
                        Website redesign refers to the process of updating or overhauling an existing website to improve its appearance, functionality, and performance.
                    </q>
                </div>


                {/* Alternating Feature Sections */}
                <div className="relative pt-16 pb-32 overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Improved User Experience
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A website redesign can improve the user experience by making the website more intuitive and user-friendly. This can increase user engagement and retention, leading to higher conversion rates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={ImprovedUserExperience}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-36 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Enhanced Visual Appeal
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            An updated website design can make the website more visually appealing, modern, and professional, which can improve brand perception and credibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={EnhancedVisualAppeal}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-36 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Better Functionality
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A website redesign can improve the website's functionality, making it faster, more reliable, and more accessible to users. This can reduce bounce rates and increase user satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={webFunctionality}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-40 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Improved SEO
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A redesigned website can be optimized for search engines, improving its visibility in search results and attracting more traffic to the site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={seo}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative m-2 my-24 lg:m-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Competitive Edge
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A website redesign can help a business stay competitive by keeping up with industry trends and best practices. This can help attract and retain customers who are looking for a modern and up-to-date online experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={CompetitiveEdge}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 mt-20 bg-gray-50 flex justify-center">
                        <q className='text-sm lg:text-xl mx-5 font-bold text-gray-600 max-w-5xl text-center'>
                            Overall, website redesign can help improve user experience, increase traffic and conversions, enhance brand perception, and stay competitive in a rapidly evolving digital landscape.
                        </q>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Language: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all web re-design useful languages, i know all these languages and also i am master in all these languages.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <div>
                                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                        <p className="mt-2 text-base text-indigo-200">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </main>


        </div>
    )
}
