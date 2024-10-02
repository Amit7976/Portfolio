import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiBootstrap, SiPhp, SiReact, SiCodemagic, SiAlwaysdata } from 'react-icons/si';
import webdevelopmentbanner from '../../img/solution/web development banner.jpg'
import IncreasedOnlinePresence from '../../img/solution/Increased Online Presence.jpg'
import ImprovedUserExperience from '../../img/solution/Improved User Experience.jpg'
import webFunctionality from '../../img/solution/web Functionality.jpg'
import Scalability from '../../img/solution/Scalability.jpg'
import CostEffective from '../../img/solution/Cost Effective.jpg'
import IncreasedEfficiency from '../../img/solution/Increased Efficiency.jpg'

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
        name: 'JavaScript',
        description: 'programming language used for creating interactive web pages and web applications. It is commonly used to add dynamic effects, interactivity, and functionality to websites.',
        icon: FaJs,
    },
    {
        name: 'PHP',
        description: 'server-side scripting language used to create dynamic web pages and web applications. It is commonly used in conjunction with MySQL for database management.',
        icon: SiPhp,
    },
    {
        name: 'MySQL',
        description: 'MySQL is an open-source relational database management system used for storing and managing data on the web. It is commonly used in web development with PHP.',
        icon: SiMysql,
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

export default function Websitedevelopment() {
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
                                    src={webdevelopmentbanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Website</span>
                                    <span className="block text-indigo-200">DEVELOPMENT</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Web development is the process of creating websites or web applications, which involves designing, coding, and maintaining them to ensure their functionality, usability, and overall effectiveness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm lg:text-xl font-bold text-gray-600 mx-2 max-w-5xl text-center'>
                        Web development has become an increasingly important field in recent years, as the internet has become an integral part of our daily lives. There are many benefits to web development
                    </q>
                </div>

                
                {/* Alternating Feature Sections */}
                <div className="relative mt-24 pb-32">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Increased Online Presence
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            In today's digital age, having an online presence is crucial for businesses and individuals alike. A well-designed and functional website can help to increase visibility, reach a wider audience, and build credibility and trust with customers and users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={IncreasedOnlinePresence}
                                        alt="Inbox user interface"
                                    />
                                </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Improved User Experience
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Web development involves creating websites that are user-friendly, easy to navigate, and visually appealing. A good user experience can lead to increased engagement, longer time spent on the website, and higher conversion rates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={ImprovedUserExperience}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Enhanced Functionality
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Web development allows for the creation of websites with a wide range of features and functionality. This can include e-commerce functionality, user registration and login, content management systems, and much more. These features can improve the user experience and provide valuable tools for businesses and individuals.
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
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Scalability
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            As businesses and individuals grow and evolve, their website needs may change. Web development allows for scalability, meaning that websites can be updated and expanded as needed to accommodate changing requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Scalability}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Cost-Effective
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Web development can be a cost-effective way to reach a large audience and provide valuable services to customers and users. Compared to traditional marketing and advertising methods, web development can be more affordable and have a greater impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={CostEffective}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Increased Efficiency
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Web development can also lead to increased efficiency and productivity. By automating certain processes, such as data entry and customer service, businesses can save time and resources and focus on more important tasks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={IncreasedEfficiency}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 mt-20 bg-gray-50 flex justify-center">
                        <q className='text-sm lg:text-xl mx-5 font-bold text-gray-600 max-w-5xl text-center'>

                            Web development is an important and valuable field that offers many benefits to businesses and individuals alike. From increased online presence and improved user experience to enhanced functionality and scalability, web development can help to improve efficiency, increase productivity, and reach a wider audience.
                        </q>
                    </div>
                </div>

                

                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Language: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all web development useful languages, i know all these languages and also i am master in all these languages.
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
