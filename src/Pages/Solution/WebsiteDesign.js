import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { BsFiletypeScss } from 'react-icons/bs';
import { SiTailwindcss, SiBootstrap, SiReact, SiCodemagic, SiAlwaysdata, SiAdobephotoshop } from 'react-icons/si';
import websitedesignbanner from '../../img/solution/website design banner.jpg'
import catererssSS from '../../img/solution/catererss ss.png'
import ImprovedUserExperience from '../../img/solution/Improved User Experience.jpg'
import seo from '../../img/solution/seo.jpg'
import CompetitiveAdvantage from '../../img/solution/Competitive Advantage.jpg'
import IncreasedSalesandRevenue from '../../img/solution/Increased Sales and Revenue.jpg'
import BetterBranding from '../../img/solution/Better Branding.jpg'

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

export default function Websitedesign() {
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
                                    src={websitedesignbanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Website</span>
                                    <span className="block text-indigo-200">DESIGN</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Web design is the process of creating visually appealing and user-friendly websites using different elements like layout, graphics, and content. It involves the use of tools and programming languages to ensure websites work seamlessly across devices and browsers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm mx-2 lg:text-xl font-bold text-gray-600 max-w-5xl text-center'>
                        Website design is the process of creating and designing the visual and aesthetic aspects of a website. In today's digital age, having a website is essential for businesses of all sizes. A well-designed website can bring numerous benefits to businesses
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
                                            Increased Credibility
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A well-designed website can increase a business's credibility and legitimacy. A professional-looking website with a clean design and intuitive navigation can create a positive impression on users and make them more likely to trust the business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={catererssSS}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
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
                                            User experience is a critical aspect of website design. A website with good user experience is easy to navigate, loads quickly, and provides users with relevant and valuable information. A well-designed website can improve user experience, leading to higher engagement and conversion rates.
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
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Increased Search Engine Visibility
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Search engine optimization (SEO) is the process of optimizing a website's content and structure to rank higher in search engine results pages (SERPs). A well-designed website with SEO best practices implemented can improve a business's search engine visibility, making it easier for potential customers to find the business online.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={seo}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Competitive Advantage
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A well-designed website can give a business a competitive advantage over its competitors. A website that stands out with a unique design and great user experience can differentiate the business from its competitors and attract more customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={CompetitiveAdvantage}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiAlwaysdata className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Increased Sales and Revenue
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A well-designed website can lead to increased sales and revenue for a business. A website that is easy to use and provides valuable information can attract more visitors and convert them into paying customers. Additionally, a website can provide businesses with new opportunities to reach and sell to customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={IncreasedSalesandRevenue}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SiCodemagic className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Better Branding
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Website design can play a critical role in branding. A website that aligns with a business's branding strategy and communicates its values and mission can reinforce the brand and increase brand recognition and loyalty.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={BetterBranding}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 mt-20 bg-gray-50 flex justify-center">
                        <q className='text-sm mx-5 lg:text-xl font-bold text-gray-600 max-w-5xl text-center'>
                            Website design is an essential aspect of online presence for businesses. A well-designed website can bring numerous benefits to businesses, including increased credibility, improved user experience, increased search engine visibility, competitive advantage, increased sales and revenue, and better branding. By investing in website design, businesses can establish a strong online presence and reach new customers.
                        </q>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Language: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all web design useful languages, i know all these languages and also i am master in all these languages.
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
