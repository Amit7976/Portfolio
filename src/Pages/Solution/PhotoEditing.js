import { SiCodemagic, SiAlwaysdata, SiAdobephotoshop, SiCanva } from 'react-icons/si';

import photoeditingbanner from '../../img/solution/photo editing.jpg'

import Imageoptimization from '../../img/solution/Image optimization.jpg'
import Visualappeal from '../../img/solution/Visual appeal.jpg'
import Consistencyinbranding from '../../img/solution/Increased Brand Awareness.jpg'
import Customgraphics from '../../img/solution/Custom graphics.jpg'
import Imagecroppingandresizing from '../../img/solution/Image cropping and resizing.jpg'
import Imageretouching from '../../img/solution/Image retouching.jpg'
import Compatibilitywithdesigntools from '../../img/solution/Compatibility with design tools.jpg'

const features = [
    {
        name: 'Adobe Photoshop',
        description: 'A programming language used to manage and manipulate relational databases. It allows for efficient querying, insertion, updating, and deletion of data.',
        icon: SiAdobephotoshop,
    },
    {
        name: 'Canva',
        description: 'Canva is an easy-to-use online design tool for creating graphics, presentations, and social media content. It provides templates, images, and fonts to help users without design experience.',
        icon: SiCanva,
    },
]

export default function PhotoEditing() {
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
                                    src={photoeditingbanner}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Photo</span>
                                    <span className="block text-indigo-200">Editing</span>
                                </h1>
                                <p className="mt-16 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Photo editing is the process of modifying digital photographs using software tools. It involves adjusting colors, brightness, composition, and other elements to enhance the image's appearance or achieve a specific effect. It is used in photography, design, advertising, and web development to create visually appealing and polished visuals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 bg-gray-100 flex justify-center">
                    <q className='text-sm lg:text-xl font-bold text-gray-600 mx-2 max-w-5xl text-center'>
                        These skills empower you to create visually stunning websites, optimize image performance, and deliver a cohesive user experience.
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
                                        Image optimization
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Photo editing skills allow you to optimize images for the web, reducing their file size without compromising quality. Optimized images load faster, improving website performance and user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                loading="lazy"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Imageoptimization}
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
                                            Visual appeal
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            With photo editing skills, you can enhance the visual appeal of your website by retouching images, adjusting colors, or adding effects. This helps create a visually pleasing and engaging user interface.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Visualappeal}
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
                                            Consistency in branding
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Photo editing skills enable you to maintain consistency in your website's branding by editing and aligning images according to your brand's style guide. This helps to create a cohesive and professional look.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
                                        src={Consistencyinbranding}
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
                                            Custom graphics
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Sometimes, you may need to create custom graphics for your website, such as banners, icons, or logos. With photo editing skills, you can design and create these graphics from scratch, ensuring they match your website's design aesthetic.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Customgraphics}
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
                                            Image cropping and resizing
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Web development often requires resizing and cropping images to fit specific dimensions or aspect ratios. With photo editing skills, you can easily manipulate and adjust images to fit the desired layout or format.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Imagecroppingandresizing}
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
                                            Image retouching
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Sometimes, you may need to retouch images to remove imperfections, adjust lighting, or enhance certain elements. Photo editing skills allow you to make these modifications, ensuring your website features high-quality, visually appealing images.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Imageretouching}
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
                                            Compatibility with design tools
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Many web design tools and content management systems (CMS) include built-in photo editing capabilities. Having photo editing skills enables you to leverage these tools effectively, allowing for seamless integration between design and content creation processes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                    loading="lazy"
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Compatibilitywithdesigntools}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 mt-20 bg-gray-50 flex justify-center">
                        <q className='text-sm lg:text-xl mx-5 font-bold text-gray-600 max-w-5xl text-center'>

                            Photo Editing skills in web development and designing empowers you to create visually stunning websites, optimize images for better performance, and maintain consistency in branding. It expands your capabilities as a web professional and contributes to delivering a visually appealing user experience.
                        </q>
                    </div>
                </div>



                <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight"> Software: </h2>
                        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
                            Here i mention all Photo Editing useful Software, i know all these software and also i am master in all these software.
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
