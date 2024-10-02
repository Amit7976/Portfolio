import { SiCodemagic, SiAlwaysdata, SiCanva, SiAdobepremierepro } from 'react-icons/si';

import videoEditingBanner from '../../img/solution/video editing.jpg'

import EnhancedUserExperience from '../../img/solution/Improved User Experience.jpg'
import Visualappeal from '../../img/solution/Visual appeal.jpg'
import EffectiveCommunication from '../../img/solution/Effective Client Communication.jpg'
import IncreasedConversionRates from '../../img/solution/Higher Conversion Rates.jpg'
import SEOBenefits from '../../img/solution/seo.jpg'
import ImprovedStorytelling from '../../img/solution/Improved Storytelling.jpg'
import SocialMediaEngagement from '../../img/solution/Boosting social media engagement.jpg'


const features = [
    {
        name: 'Adobe Premiere Pro',
        description: 'Adobe Premiere Pro is a professional video editing software used to edit and enhance videos with effects, transitions, and audio improvements.',
        icon: SiAdobepremierepro,
    },
    {
        name: 'Canva',
        description: 'Canva is an easy-to-use online design tool for creating graphics, presentations, and social media content. It provides templates, images, and fonts to help users without design experience.',
        icon: SiCanva,
    },
]

export default function VideoEditing() {
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
                                    src={videoEditingBanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Video</span>
                                    <span className="block text-indigo-200">Editing</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Video editing is the process of manipulating and arranging video footage, audio, and effects to create a polished and visually appealing final product. It involves cutting, adjusting, and enhancing video clips to improve storytelling and visual impact. It requires software tools and skills to transform raw footage into a professional-looking video.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm lg:text-xl font-bold text-gray-600 mx-2 max-w-5xl text-center'>
                        These skills empower you to create visually stunning websites, optimize video performance, and deliver a cohesive user experience.
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
                                        Enhanced User Experience
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Videos create a visually engaging experience, capturing the attention of visitors and improving their overall experience on the website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                loading="lazy"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                    src={EnhancedUserExperience}
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
                                            Improved Storytelling
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Video editing allows for the creation of compelling narratives that effectively communicate your brand's story or showcase products/services, making your web design more impactful.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0  lg:w-auto lg:max-w-none"
                                        src={ImprovedStorytelling}
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
                                            Visual Appeal
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Video editing skills enable the addition of visually stunning effects, transitions, and animations, making your web design more visually appealing and memorable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0  lg:w-auto lg:max-w-none"
                                        src={Visualappeal}
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
                                            Effective Communication
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Videos can effectively communicate complex concepts, making it easier for users to understand and navigate your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={EffectiveCommunication}
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
                                            Increased Conversion Rates
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Persuasive and informative videos created through video editing can build trust with potential customers, leading to increased conversions and sales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={IncreasedConversionRates}
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
                                            SEO Benefits
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Video content can improve search engine rankings and visibility, attracting more organic traffic to your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:w-auto lg:max-w-none"
                                        src={SEOBenefits}
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
                                            Social Media Engagement
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Video content is highly shareable, driving social media engagement and directing traffic to your website, expanding your online reach.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={SocialMediaEngagement}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 py-20 bg-gray-50 flex justify-center">
                        <q className='text-sm lg:text-xl mx-5 font-bold text-gray-600 max-w-5xl text-center'>

                            video editing skills add depth, creativity, and interactivity to web development and design, creating memorable experiences, effectively communicating messages, and driving positive user engagement.
                        </q>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Software: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all video Editing useful Software, i know all these software and also i am master in all these software.
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
