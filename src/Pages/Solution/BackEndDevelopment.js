import { DiNodejs } from 'react-icons/di';
import { SiPhp, SiCodemagic, SiAlwaysdata, SiMongodb, SiMysql } from 'react-icons/si';

import BackEndDevelopmentBanner from '../../img/solution/back-end dev banner.jpg'

import FunctionalityandUserExperience from '../../img/solution/Improved User Experience.jpg'
import CustomizationAndScalability from '../../img/solution/Scalability.jpg'
import SecurityAndDataProtection from '../../img/solution/Improved Security.jpg'
import IntegrationofThirdPartyTools from '../../img/solution/Integration of Third-Party Tools.jpg'
import DatabaseManagement from '../../img/solution/Database Management.png'
import MaintenanceandUpdates from '../../img/solution/Maintenance and Updates.png'
import FutureProofing from '../../img/solution/Future-Proofing.jpg'


const features = [
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
        name: 'Node.js',
        description: 'Node.js allows developers to use JavaScript to build scalable and high-performance server-side applications.',
        icon: DiNodejs,
    },
    {
        name: 'Mongo Db',
        description: 'A popular NoSQL document-oriented database management system. It uses a flexible JSON-like format for data storage and provides high scalability and performance for modern web and mobile applications.',
        icon: SiMongodb,
    },
]

export default function BackEndDevelopment() {
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
                                    src={BackEndDevelopmentBanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Back-End</span>
                                    <span className="block text-indigo-200">DEVELOPMENT</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Back-end development involves creating and managing the server-side components of a website or application. It includes tasks like server-side programming, database management, and integrating with external services or APIs. Back-end developers ensure efficient data processing and secure functionality behind the scenes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm lg:text-xl font-bold text-gray-600 mx-2 max-w-5xl text-center'>
                        Back-end developers play a vital role in building and maintaining the behind-the-scenes functionality of websites and applications. They specialize in programming the server-side components that power the user experience.
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
                                        Functionality and User Experience
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Back-end development ensures smooth website functioning and a seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                loading="lazy"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                    src={FunctionalityandUserExperience}
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
                                            Customization and Scalability
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Buyers can customize the back-end to meet their specific needs and easily scale their website as their business grows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={CustomizationAndScalability}
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
                                            Security and Data Protection
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Back-end development incorporates robust security measures to protect user data and safeguard against threats.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={SecurityAndDataProtection}
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
                                            Integration with Third-Party Services
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Back-end developers seamlessly integrate third-party services, enhancing website functionality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={IntegrationofThirdPartyTools}
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
                                            Database Management
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Back-end development ensures efficient data storage, retrieval, and management.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl lg:absolute lg:left-0 lg:h-100 lg:w-auto lg:max-w-none"
                                        src={DatabaseManagement}
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
                                            Maintenance and Updates
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            A well-built back-end simplifies website maintenance, updates, and bug fixes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={MaintenanceandUpdates}
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
                                            Future-Proofing
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Back-end development sets the foundation for future improvements and adaptability to new technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={FutureProofing}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 mt-20 bg-gray-50 flex justify-center">
                        <q className='text-sm lg:text-xl mx-5 font-bold text-gray-600 max-w-5xl text-center'>

                            Back-End development offers numerous advantages for website buyers, including enhanced functionality, customization options, improved security, integration capabilities, efficient database management, easier maintenance and updates, and future-proofing potential. These benefits contribute to a seamless user experience, improved business processes, and the ability to adapt to changing requirements and technologies.
                        </q>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Language: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all Back-End useful languages, i know all these languages and also i am master in all these languages.
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
