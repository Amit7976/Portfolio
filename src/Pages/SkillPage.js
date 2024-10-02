import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiBootstrap, SiPhp, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import React from "react";
import build from "../img/re-design.jpg";
import appDevelopment from "../img/app-development.png";
import maintenance from "../img/maintenance.png";
import websiteUi from "../img/website ui.png";
import seo from "../img/search-engine-optimization.png";
import writing from "../img/writing.png";
import photoediting from "../img/photo-editing.png";
import videoediting from "../img/video-production.png";
import frontdeveloper from "../img/fed.png";
import backdeveloper from "../img/backend developer.png";
import projectManage from "../img/project management.png";
import commSkill from "../img/Communication Skills.png";

import Typewriter from "typewriter-effect";

import { Link } from "react-router-dom";


const features = [
    {
        name: "Website development",
        link: "/websitedevelopment",
        description:
            "This involves coding the website using HTML, CSS, and JavaScript, and integrating any necessary backend functionality.",
        Images: appDevelopment,
    },
    {
        name: "Website Design",
        link: "/websitedesign",
        description:
            "This involves designing the layout, color scheme, typography, and other visual elements of the website.",
        Images: websiteUi,
    },
    {
        name: "Front-End Development",
        link: "/FrontEndDevelopment",
        description:
            "Building responsive and accessible websites and web applications using HTML, CSS and JavaScript, modern frameworks like React.",
        Images: frontdeveloper,
    },
    {
        name: "Back-End Development",
        link: "/backEndDevelopment",
        description:
            "Knowledge of programming languages such as PHP, database management systems such as MySQL and MongoDB, server-side programming, and API development.",
        Images: backdeveloper,
    },
    {
        name: "Project Management",
        link: "/Projectmanagement",
        description:
            "Managing web development projects from start to finish, including project planning, resource allocation and stakeholder communication.",
        Images: projectManage,
    },
    {
        name: "Communication Skills",
        link: "/CommunicationSkills",
        description:
            "Strong written and verbal communication skills, ability to collaborate with clients and team members, and provide clear and concise updates on project progress.",
        Images: commSkill,
    },
    {
        name: "Re-Design",
        link: "/redesign",
        description:
            "Improving website's look, feel, user experience, and functionality through redesign to attract and retain more visitors.",
        Images: build,
    },
    {
        name: "Website maintenance",
        link: "/websitemaintenance",
        description:
            " This involves regularly updating the website's content and software to ensure it remains secure, functional, and up-to-date.",
        Images: maintenance,
    },
    {
        name: "Search engine optimization (SEO)",
        link: "/seo",
        description:
            "This involves optimizing the website's content and structure to improve its visibility and ranking on search engines like Google.",
        Images: seo,
    },
    {
        name: "Content creation",
        link: "/contentcreation",
        description:
            "This involves creating written, visual, or multimedia content for the website, including copywriting, graphic design, photography, and video production.",
        Images: writing,
    },
    {
        name: "Photo Editing",
        link: "/PhotoEditing",
        description:
            "Transform your photos into stunning works of art with professional photo editing services. Enhance colors, remove blemishes, and create the perfect image for your project.",
        Images: photoediting,
    },
    {
        name: "Video Editing",
        link: "/VideoEditing",
        description:
            "Elevate your video content with professional video editing services. Edit footage, add transitions and effects, and create a polished final product that captures your vision.",
        Images: videoediting,
    },
];


const tabs = [
    {
        name: 'HTML',
        features: [
            {
                name: 'HTML (HyperText Markup Language)',
                sdescription: 'markup language used for creating and structuring content on the web. It is the foundation of all web pages and provides the basic structure and layout.',
                description: 'HTML (Hypertext Markup Language) is a markup language used for creating and designing web pages. It is the standard language for creating web pages and provides a way to structure content, such as text, images, and other media, on a web page. HTML uses tags, which are codes enclosed in angle brackets, to define the structure of a web page. These tags tell the web browser how to display the content on the page, such as headings, paragraphs, lists, images, and links.',
                description2: 'HTML provides a standardized way for developers to create web pages that can be viewed by anyone with an internet connection and a web browser. This means that a web page created in HTML can be accessed by anyone, regardless of the operating system or device they are using. HTML has evolved over the years, with new versions being released periodically, to include new features and functionality that make it easier to create more complex and dynamic web pages.',
                description3: 'HTML works in conjunction with other technologies, such as CSS (Cascading Style Sheets) and JavaScript, to create dynamic and interactive web pages. CSS is used to control the layout and styling of the content on a web page, while JavaScript is used to add interactivity and dynamic functionality to web pages.',
                description4: 'Overall, HTML is an essential language for web developers and designers, as it provides the foundation for creating web pages that are accessible and easy to use for all users.',
                description5: '',
                icon: FaHtml5,
            },
        ],
    },
    {
        name: 'CSS',
        features: [
            {
                name: 'CSS (Cascading Style Sheets)',
                sdescription: 'styling language used to add design and visual elements to HTML documents. It is used to control the layout, typography, colors, and other visual aspects of a website.',
                description: 'Cascading Style Sheets, also known as CSS, is a fundamental component of modern web development. It is a language used to style web pages and control their layout, presentation, and appearance. CSS allows developers to create visually appealing and functional websites that are easy to use and navigate. CSS works by separating the content of a web page from its presentation. The HTML code defines the structure and content of the page, while CSS controls how it is displayed. This separation of concerns enables developers to create modular and reusable code, making it easier to maintain and update websites over time.',
                description2: 'CSS provides a wide range of styling options, such as font size, color, layout, background images, and animation effects. These options are applied to specific HTML elements using selectors, which are patterns that identify the elements to be styled. CSS also supports various units of measurement, including pixels, ems, and percentages, giving developers the flexibility to adjust the size and position of elements to meet their design needs. One of the key features of CSS is its cascading nature. When multiple CSS rules are applied to the same element, they are evaluated in a specific order, with the most specific rule taking precedence over the others. This allows developers to create complex styles that adapt to different screen sizes and devices, making their websites responsive and accessible to a wider audience.',
                description3: 'CSS also supports inheritance, which enables styles to be passed down from parent to child elements. This can greatly simplify the process of styling large websites with many nested elements, as developers can apply styles to the parent element and let them cascade down to the children. Inheritance can also be overridden by specifying a more specific rule for a child element, giving developers even greater control over the appearance of their web pages. Another useful feature of CSS is the ability to define and use variables. CSS variables allow developers to define values once and reuse them throughout their code, making it easier to maintain a consistent design across an entire website. Variables can also be dynamically updated using JavaScript, enabling developers to create interactive and responsive designs that adapt to user input and other dynamic events.',
                description4: 'In addition to its core features, CSS also includes various layout and positioning options, such as flexbox and grid. These options provide powerful tools for creating complex layouts that adapt to different screen sizes and orientations. CSS also supports media queries, which enable developers to specify different styles for different devices, such as desktops, tablets, and smartphones.',
                description5: 'Overall, CSS is an essential tool for modern web development. It provides a powerful and flexible language for styling and layout, enabling developers to create visually appealing and responsive websites that are easy to use and navigate. With its wide range of features and tools, CSS continues to evolve and improve, making it an essential part of the web development toolkit.',
                icon: FaCss3Alt,
            },
        ],
    },
    {
        name: 'JavaScript',
        features: [
            {
                name: 'JavaScript',
                sdescription: 'programming language used for creating interactive web pages and web applications. It is commonly used to add dynamic effects, interactivity, and functionality to websites.',
                description: "JavaScript is a dynamic and versatile programming language used to create interactive and responsive web pages. It is a client-side scripting language, which means it runs directly on the user's browser, allowing for real - time updates and interactivity without the need for server requests. JavaScript was created in 1995 by Brendan Eich, and it has since become one of the most widely used programming languages in the world.It is an essential part of modern web development, and it is used to create everything from simple web pages to complex web applications and games.",
                description2: 'One of the key features of JavaScript is its ability to manipulate the Document Object Model (DOM) of a web page. The DOM is a hierarchical structure that represents the elements and content of a web page, and JavaScript can be used to add, remove, and modify these elements in real-time. This allows developers to create interactive and responsive web pages that update dynamically based on user input and other events. JavaScript also supports a wide range of programming paradigms, including object-oriented, functional, and procedural programming. This makes it a versatile language that can be used for a variety of tasks, from simple data manipulation to complex algorithmic programming.',
                description3: 'Another important feature of JavaScript is its ability to interact with other web technologies, such as HTML and CSS. JavaScript can be used to modify the style and content of HTML elements, as well as to create animations and other visual effects. It can also be used to validate user input and perform calculations on the client-side, reducing the need for server requests and improving website performance.',
                description4: 'JavaScript is also used extensively in web application development, where it is used to create complex user interfaces and dynamic data visualizations. Many popular web frameworks, such as React and Angular, are based on JavaScript, and they provide developers with powerful tools for building scalable and responsive web applications. Finally, JavaScript has a large and active community of developers, which has created a vast ecosystem of libraries, tools, and frameworks. These resources provide developers with a wealth of pre-built functionality and components that can be used to streamline the development process and reduce development time and costs.',
                description5: 'In conclusion, JavaScript is a powerful and versatile programming language that has become an essential part of modern web development. Its ability to manipulate the DOM, support a wide range of programming paradigms, and interact with other web technologies has made it a popular choice for creating interactive and responsive web pages and applications. Its large and active community of developers and extensive ecosystem of resources have also made it easier for developers to build high-quality web applications in less time and with greater efficiency.',
                icon: FaJs,
            },
        ],
    },
    {
        name: 'Bootstrap',
        features: [
            {
                name: "Bootstrap",
                sdescription: 'popular front-end framework used to create responsive and mobile-first websites. It provides a set of pre-designed HTML, CSS, and JavaScript components that can be easily customized.',
                description: "Bootstrap is a popular open-source front-end development framework that allows developers to quickly and easily create responsive websites and web applications. It was developed by Twitter and first released in 2011, and has since become one of the most widely used frameworks for web development. One of the key advantages of Bootstrap is that it is designed to be mobile-first. This means that the framework is optimized for creating websites and web applications that look and function well on mobile devices, which is increasingly important in today's world where mobile internet usage continues to rise.",
                description2: "Bootstrap is also known for its ease of use and versatility. The framework includes a wide range of pre-built components, such as navigation menus, forms, and buttons, that can be easily customized and integrated into a website or application. Additionally, Bootstrap's modular design allows developers to pick and choose which components they want to use, and to easily customize the design and functionality of those components to suit their specific needs.Another advantage of Bootstrap is that it is actively maintained and updated by a large community of developers.This means that the framework is constantly being improved and updated, and that developers can rely on it to remain up- to - date with the latest web technologies and design trends.",
                description3: 'Bootstrap also includes a number of powerful features and tools for developers, such as its grid system, which allows for easy creation of responsive layouts, and its support for popular web technologies such as HTML, CSS, and JavaScript. Additionally, Bootstrap can be easily integrated with other popular front-end development tools, such as jQuery and Sass, which makes it a versatile and powerful choice for web development.',
                description4: 'One potential drawback of Bootstrap is that, because it is so widely used, it can lead to a lot of websites and applications looking very similar to one another. However, this can be mitigated by customizing the design and functionality of the components, and by using the framework as a starting point for creating unique and innovative designs.',
                description5: 'In conclusion, Bootstrap is a powerful and versatile front-end development framework that is widely used for creating responsive websites and web applications. Its mobile-first design, ease of use, and active community of developers make it a popular choice for web development. Despite potential concerns around similarity in design, Bootstrap remains a reliable and widely used framework that is likely to continue to be a popular choice for many years to come.',
                icon: SiBootstrap,
            },
        ],
    },
    {
        name: 'Tailwind CSS',
        features: [
            {
                name: "Tailwind CSS",
                sdescription: 'Utility-first CSS framework that provides a set of pre-designed classes to style HTML elements. It allows for rapid prototyping and customization, making it a popular choice for developers.',
                description: 'Tailwind is a popular utility-first CSS framework that has gained a lot of popularity in recent years. Developed by Adam Wathan, Steve Schoger, and Jonathan Reinink, Tailwind was designed to provide developers with a more efficient and streamlined way to create custom website designs. One of the main advantages of Tailwind is its utility-first approach to CSS. Unlike traditional CSS frameworks that rely on pre-built classes for specific styles, Tailwind provides a set of utility classes that can be combined and customized to create unique and responsive designs. This approach allows developers to quickly and easily create custom designs without having to write extensive CSS code from scratch.',
                description2: "Tailwind's utility classes are organized into categories such as typography, colors, and layout, which makes it easy for developers to find and use the specific classes they need.Additionally, the framework includes a built-in customization feature that allows developers to modify the default styles and create their own custom classes.Another advantage of Tailwind is its focus on responsive design.The framework includes a range of responsive utility classes that allow developers to create layouts that adjust dynamically based on the size of the user's screen. This makes it easy to create designs that look great on both desktop and mobile devices, without having to write separate code for each device type.",
                description3: 'Tailwind also includes a number of additional features that make it a powerful tool for web development. For example, the framework includes support for CSS Grid and Flexbox, which makes it easy to create complex layouts and designs. Additionally, Tailwind includes a range of plugins and extensions that add additional functionality, such as support for custom forms and tooltips.',
                description4: 'Despite its many advantages, Tailwind does have some potential drawbacks. Because it relies heavily on utility classes, it can be challenging for developers who are used to traditional CSS frameworks to learn and use. Additionally, some developers may prefer the control and specificity provided by traditional CSS code.',
                description5: 'In conclusion, Tailwind is a powerful and versatile CSS framework that has gained a lot of popularity in recent years. Its utility-first approach, focus on responsive design, and additional features make it a valuable tool for web development. However, it may not be the best choice for all developers, and those who are not familiar with the utility-first approach may find it challenging to use.',
                icon: SiTailwindcss,
            },
        ],
    },
    {
        name: 'PHP',
        features: [
            {
                name: "PHP (Hypertext Preprocessor) ",
                sdescription: 'server-side scripting language used to create dynamic web pages and web applications. It is commonly used in conjunction with MySQL for database management.',
                description: 'PHP, which stands for Hypertext Preprocessor, is a server-side scripting language that is widely used for web development. It was first released in 1995 and has since become one of the most popular programming languages on the web. One of the key features of PHP is that it is designed to be embedded in HTML code, making it easy to integrate dynamic content into websites. PHP code is executed on the server side, which means that the output is sent to the client browser as HTML code. This allows developers to create dynamic web pages that can interact with databases, process form data, and perform other complex operations.',
                description2: 'PHP is an open-source language, which means that the source code is available for free and can be modified by developers. This has led to a large and active community of PHP developers who contribute to the language and create libraries and frameworks that can be used to simplify web development. One of the key strengths of PHP is its versatility. It can be used for a wide range of web development tasks, including building content management systems, e-commerce websites, social networks, and more. Its flexibility and ease of use have made it a popular choice for both small and large-scale web projects.',
                description3: 'Another advantage of PHP is that it is easy to learn and use, even for beginners. The syntax is simple and intuitive, and there are many resources available online that can help developers get started quickly. Additionally, because PHP is so widely used, there are many tutorials, forums, and communities available to help developers troubleshoot issues and learn new skills. PHP also has strong support for databases, including MySQL, which is a popular open-source database management system. PHP can be used to connect to databases, query data, and process results, which makes it easy to build web applications that interact with databases. Additionally, PHP has built-in support for many other web technologies, including HTML, CSS, and JavaScript, which allows developers to create rich and dynamic web applications.',
                description4: 'One potential drawback of PHP is that it can be slower than other programming languages for certain tasks. However, this can often be mitigated by using caching and optimization techniques, and the benefits of using a versatile and easy-to-use language like PHP often outweigh any performance concerns.',
                description5: 'In conclusion, PHP is a widely used and versatile server-side scripting language that is popular for web development. Its ease of use, strong community support, and versatility make it a popular choice for developers building a wide range of web applications. Despite its potential performance concerns, PHP remains a reliable and widely used language for web development, and is likely to continue to be a popular choice for many years to come.',
                icon: SiPhp,
            },
        ],
    },
    {
        name: 'MySQL',
        features: [
            {
                name: "MySQL",
                sdescription: 'MySQL is an open-source relational database management system used for storing and managing data on the web. It is commonly used in web development with PHP.',
                description: 'MySQL is an open-source relational database management system (RDBMS) that has become one of the most popular choices for storing and managing data. It was first released in 1995 and has since been widely adopted by businesses and organizations of all sizes. One of the key strengths of MySQL is its reliability and scalability. It is designed to handle large amounts of data and can be used in high-traffic web applications and other data-intensive environments. Additionally, MySQL is designed to be easy to use, even for users with little or no experience with databases.',
                description2: 'MySQL uses a structured query language (SQL) to interact with data. This allows developers to easily create and manipulate tables, insert and update data, and retrieve data in a variety of ways. SQL is a powerful language that allows developers to write complex queries that can be used to analyze and manipulate data in many ways. Another advantage of MySQL is that it is open-source and free to use. This makes it accessible to a wide range of users and organizations, regardless of budget or resources. Additionally, the open-source nature of MySQL means that there is a large community of developers working on it, which leads to regular updates and improvements.',
                description3: 'MySQL also has a strong security model, with features such as encryption and access control to help protect data. This is particularly important for businesses and organizations that handle sensitive information. One of the key features of MySQL is its ability to handle concurrent connections. This means that multiple users can access the database at the same time without any loss of performance or data consistency. Additionally, MySQL can be easily integrated with other web technologies, such as PHP and JavaScript, which makes it a popular choice for web developers.',
                description4: 'MySQL has many tools and features that make it a powerful choice for managing and analyzing data. For example, it has built-in support for transactions, which allows multiple changes to be made to the database as a single unit. It also has support for stored procedures, which are precompiled SQL statements that can be reused in many different ways. One potential drawback of MySQL is that it can be slower than other databases for certain tasks, particularly when dealing with large amounts of data. However, there are many optimization techniques and best practices that can be used to improve performance, and the benefits of using a reliable and powerful database like MySQL often outweigh any performance concerns.',
                description5: 'In conclusion, MySQL is a powerful and reliable open-source relational database management system that is widely used for managing data. Its ease of use, scalability, and security features make it a popular choice for businesses and organizations of all sizes. Despite potential performance concerns, MySQL remains a reliable and widely used database system that is likely to continue to be a popular choice for many years to come.',
                icon: SiMysql,
            },
        ],
    },
    {
        name: 'SQL',
        features: [
            {
                name: "Structured Query Language (SQL) ",
                sdescription: 'a programming language used to manage and manipulate relational databases. It allows for efficient querying, insertion, updating, and deletion of data.',
                description:  'Structured Query Language (SQL) is a standard programming language used for managing relational databases. SQL is used to store, manipulate and retrieve data in a database. It is a declarative language, which means that users describe the desired outcome without specifying how it should be done. The SQL language was first developed in the 1970s by IBM researchers Donald Chamberlin and Raymond Boyce. SQL is now widely used in the industry and has become the de facto standard language for working with relational databases.',
                description2: 'SQL has several components, including Data Definition Language (DDL), Data Manipulation Language (DML), Data Control Language (DCL), and Transaction Control Language (TCL). Each component serves a specific purpose in managing the database. DDL is used to define the structure of the database, including creating tables, defining columns, and setting constraints. DML is used to insert, update, and delete data in the database. DCL is used to control access to the database by setting permissions and privileges. TCL is used to manage transactions, which are sets of SQL statements that are treated as a single unit of work.',
                description3: 'SQL syntax is based on a set of rules and guidelines, which determine how SQL statements are written and executed. SQL syntax is divided into different categories, including clauses, expressions, and operators. Clauses are used to specify conditions, such as SELECT, WHERE, and ORDER BY. Expressions are used to specify values, such as column names and literals. Operators are used to specify comparisons, such as equal to (=) and less than (<).',
                description4: "SQL is used in a wide range of applications, including web development, data analysis, and business intelligence. SQL is particularly useful for large databases with complex relationships between data, as it allows users to quickly and easily retrieve information from multiple tables. In addition to the standard SQL language, many database management systems (DBMS) have added their own proprietary extensions to SQL. For example, Microsoft SQL Server has added Transact-SQL (T-SQL), which includes additional features for working with Microsoft's database management system.",
                description5: 'There are many tools available for working with SQL, including command-line interfaces, graphical user interfaces (GUI), and programming interfaces. Popular SQL-based DBMS include MySQL, Oracle, Microsoft SQL Server, and PostgreSQL. In summary, SQL is a powerful and versatile programming language used for managing relational databases. It provides a flexible and efficient way to store, manipulate, and retrieve data, making it a valuable tool for data analysis and management. Its widespread use in the industry and standardization make it an essential skill for anyone working with databases.',
                icon: TbSql,
            },
        ],
    },
    // {
    //     name: 'Adobe Photoshop',
    //     features: [
    //         {
    //             name: "Adobe Photoshop",
    //             sdescription: 'a programming language used to manage and manipulate relational databases. It allows for efficient querying, insertion, updating, and deletion of data.',
    //             description: 'Adobe Photoshop is a powerful and versatile image editing software used by graphic designers, photographers, and artists around the world. It was first released in 1988 by Adobe Systems, and has since become the industry standard for digital image editing and manipulation. Photoshop provides a wide range of tools and features that allow users to edit and manipulate digital images in almost any way imaginable. It supports a variety of file formats, including JPEG, TIFF, PNG, and GIF, and it can be used to edit and enhance photographs, create digital artwork, design web graphics, and more.',
    //             description2: 'One of the most powerful features of Photoshop is its layering system, which allows users to create complex compositions by layering different images, graphics, and effects on top of one another. This allows users to easily adjust, reposition, and manipulate different elements of an image without affecting the rest of the composition. Photoshop also provides a wide range of selection tools, which allow users to select and manipulate specific areas of an image. This includes tools for making rectangular and circular selections, as well as more complex selections based on color, shape, and texture.',
    //             description3: 'In addition to its editing tools, Photoshop also provides a variety of filters and effects that can be used to add visual interest and enhance the quality of an image. These include blur, sharpen, and noise reduction filters, as well as more artistic filters for creating unique and stylized effects. Photoshop also provides a variety of color and tone adjustment tools, which allow users to adjust the brightness, contrast, saturation, and color balance of an image. This makes it easy to correct color casts, adjust exposure, and make other adjustments that can dramatically improve the quality of a photograph.',
    //             description4: 'Finally, Photoshop is also a powerful tool for creating digital artwork and graphics. It includes a variety of drawing and painting tools, as well as the ability to work with text, shapes, and vector graphics. This makes it a popular tool for creating logos, icons, and other types of graphics for use in print and web design.',
    //             description5: 'In conclusion, Adobe Photoshop is a powerful and versatile tool for digital image editing and manipulation. Its layering system, selection tools, filters and effects, color and tone adjustment tools, and drawing and painting tools make it a popular choice for graphic designers, photographers, and artists around the world. Its extensive functionality and broad range of capabilities have made it an industry standard for digital image editing, and it remains one of the most popular and widely used image editing software programs available today.',
    //             icon: SiAdobephotoshop,
    //         },
    //     ],
    // },
    {
        name: 'React js',
        features: [
            {
                name: "React js",
                sdescription: ' JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications. React follows a declarative approach, making it easier to reason about and debug code.',
                description: 'ReactJS is a popular and widely used JavaScript library for building user interfaces. Developed by Facebook, React allows developers to create complex and dynamic web applications with ease. It was released in 2013 and has since gained a significant following in the web development community. One of the main benefits of using React is its ability to handle large and complex applications by breaking them down into smaller, reusable components. This makes it easier to manage and maintain the codebase, as well as improving performance by reducing the amount of redundant code.',
                description2: "React follows a unidirectional data flow architecture, which means that data flows in a single direction from parent components to child components. This allows for better control over the data and ensures that changes in one component do not affect other components unnecessarily. One of the key features of React is its use of a virtual DOM (Document Object Model). The virtual DOM is a lightweight representation of the actual DOM, which allows React to quickly and efficiently update the UI in response to changes in the application state. This results in faster and smoother performance, as well as improving the overall user experience.",
                description3: 'React also provides a number of useful tools and libraries that can be used to enhance the development experience. One such tool is Redux, a state management library that provides a centralized location for storing and managing application state. This allows developers to easily track and manage changes to the application state, as well as making it easier to debug and test the code.',
                description4: 'React is also highly flexible, with a wide range of extensions and plugins available to customize and enhance its functionality. This makes it an ideal choice for building a variety of web applications, from simple static websites to complex and dynamic web applications. In terms of performance, React is highly optimized for speed and efficiency. Its use of a virtual DOM and efficient rendering process means that it can handle large and complex applications with ease, without sacrificing performance or responsiveness.',
                description5: 'Overall, React is a powerful and versatile tool for building modern, dynamic web applications. Its flexibility, performance, and ease of use make it a popular choice for developers looking to create complex and engaging user interfaces. With its wide range of tools and libraries, it provides a robust and reliable platform for building web applications of all sizes and complexity.',
                icon: FaReact,
            },
        ],
    },
    {
        name: 'Next js',
        features: [
            {
                name: "Next js",
                sdescription: 'a React-based open-source web framework that enables server-side rendering, static site generation, and automatic code splitting, making it easier to build fast and scalable web applications.',
                description: 'Next.js is a popular open-source JavaScript framework that is used for building modern web applications. It is built on top of React, which is another popular JavaScript library used for building user interfaces. Next.js provides a lot of features out of the box that are not available in React, making it a powerful tool for building production-ready web applications.',
                description2: "One of the main features of Next.js is server-side rendering (SSR). This means that the HTML for each page is generated on the server, rather than in the user's browser. This can improve the initial load time of the website, as the user doesn't have to wait for the JavaScript to be downloaded and executed before they can see the content. SSR also makes the website more accessible to search engines, as they can crawl the HTML directly instead of relying on JavaScript to generate the content.",
                description3: 'Next.js also supports static site generation (SSG), which allows you to pre-render pages at build time. This can provide even faster load times and better performance, as the pages are served as static files rather than being generated dynamically on the server. SSG can also reduce the load on the server, as the pages can be cached and served directly from a CDN (content delivery network) without hitting the server.',
                description4: "Another feature of Next.js is automatic code splitting. This means that the JavaScript code for each page is automatically split into smaller chunks that can be loaded on demand. This can improve the performance of the website, as the user doesn't have to download all of the JavaScript upfront.It also makes it easier to optimize the website for different devices, as you can load different chunks of JavaScript based on the user's device and network connection. Next.js also comes with a built-in development server that supports hot reloading. This means that any changes you make to the code will be automatically reflected in the browser without having to manually refresh the page. This can speed up the development process and make it easier to iterate on your code.",
                description5: 'One of the biggest benefits of using Next.js is its ecosystem. There are many third-party libraries and plugins available that can help you extend the functionality of the framework. This includes plugins for analytics, SEO, and authentication, as well as libraries for working with databases and APIs. In conclusion, Next.js is a powerful and flexible framework for building modern web applications. Its support for server-side rendering, static site generation, and automatic code splitting make it an ideal choice for performance-focused websites. Its ecosystem of plugins and libraries makes it easy to extend the functionality of the framework and customize it to your needs.',
                icon: SiNextdotjs,
            },
        ],
    },
    {
        name: 'Mongo Db',
        features: [
            {
                name: "Mongo db",
                sdescription: 'a popular NoSQL document-oriented database management system. It uses a flexible JSON-like format for data storage and provides high scalability and performance for modern web and mobile applications.',
                description: 'MongoDB is a popular document-oriented NoSQL database system that is designed to handle large amounts of unstructured data. It is a schema-less database, which means that data is stored in documents rather than tables, and these documents can have a varying structure, making it more flexible than traditional relational databases. One of the key benefits of MongoDB is its scalability. It allows you to easily scale your database as your data grows, by adding more nodes to your cluster, without the need for complex sharding or partitioning. MongoDB also provides automatic failover, ensuring high availability of your data.',
                description2: "MongoDB supports a number of programming languages, including Java, Python, and Node.js. However, its native query language is MongoDB Query Language (MQL). MQL is designed to be simple and expressive, making it easy to work with complex data structures. One of the key features of MQL is its support for rich query expressions. You can use MQL to perform queries on documents that contain arrays, nested documents, and other complex data types. MQL also supports a number of advanced operators, including aggregation and text search, making it a powerful tool for data analysis.",
                description3: 'Another key feature of MQL is its support for flexible data modeling. In MongoDB, you can store documents that have a varying structure, which allows you to easily model complex data relationships. This can be particularly useful for applications that need to store hierarchical data, such as social networks or content management systems. MongoDB also supports a number of advanced features, including geospatial indexing and full-text search. Geospatial indexing allows you to store and query geographic data, such as coordinates or addresses. Full-text search, on the other hand, allows you to perform text searches across all the documents in your database, making it easier to find the information you need.',
                description4: 'In addition to its powerful query language and flexible data modeling, MongoDB also provides a number of tools for managing and monitoring your database. These include a web-based management console, as well as a number of command-line tools for managing your database from the terminal.',
                description5: 'Overall, MongoDB is a powerful and flexible NoSQL database system that is well-suited to handling large amounts of unstructured data. Its native query language, MQL, is simple and expressive, making it easy to work with complex data structures. And with support for advanced features such as geospatial indexing and full-text search, MongoDB is a great choice for applications that need to store and analyze complex data.',
                icon: SiMongodb,
            },
        ],
    },
    {
        name: 'Express',
        features: [
            {
                name: "Express",
                sdescription: 'a popular and lightweight web framework for Node.js used for building web applications and APIs. It provides a robust set of features for handling HTTP requests, routing, middleware, and more.',
                description: 'Express is a popular web application framework for Node.js that is used to build scalable and robust web applications. It provides a minimalistic and flexible approach to building web applications and APIs. Express was created in 2010 by TJ Holowaychuk as a way to simplify the process of building web applications with Node.js. Since then, it has become one of the most widely used web application frameworks for Node.js.',
                description2: "One of the key features of Express is its middleware architecture, which allows developers to easily add functionality to their applications by plugging in modules that can handle various tasks. Middleware can be used to handle things like authentication, logging, and error handling, among other things. Another feature of Express is its routing system, which allows developers to define routes for their application and specify how those routes should be handled. This allows for easy creation of RESTful APIs and other types of web applications.",
                description3: 'Express also includes a number of built-in features that make it easy to work with data, including support for JSON, URL-encoded, and multipart form data. It also includes support for various templating engines, allowing developers to easily create dynamic web pages. One of the benefits of using Express is its large and active community. There are a wide variety of third-party modules available for Express, covering everything from authentication to database integration to testing.',
                description4: 'Express is also highly customizable, with developers able to build their own middleware and customize the behavior of the framework to suit their needs. This flexibility makes it a popular choice for building a wide variety of web applications. Express is often used in combination with other Node.js tools and frameworks, such as MongoDB for data storage and Socket.IO for real-time communication. Together, these tools provide a powerful platform for building modern web applications and APIs.',
                description5: 'Overall, Express is a versatile and powerful web application framework for Node.js that is widely used and supported by a large community of developers. Its minimalistic approach and flexible architecture make it a popular choice for building a wide range of web applications and APIs.',
                icon: SiExpress,
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function SkillPage() {
    return (
      <>
        <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
          <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div aria-hidden="true" className="hidden sm:block overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl" />
              <svg
                className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
                  height={784}
                  fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
                />
              </svg>
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <svg
                className="hidden lg:block absolute -bottom-20 right-full transform translate-x-1/2 translate-y-12"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                  height={784}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>

              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
            </div>

            <div className="relative">
              <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Skills
              </h2>
              <p className="mt-5 max-w-3xl mx-auto text-center text-lg text-gray-500">
                <span className="">
                  <Typewriter
                    options={{
                      strings: [
                        "As a web designer and developer, I create user-friendly websites with style and functionality. With expertise in front-end and back-end development, SEO, content writing, and project management, I can deliver results. see all my skills here",
                      ],
                      autoStart: true,
                      delay: 0,
                      pauseFor: 2000000,
                      loop: true,
                    }}
                  />
                </span>
              </p>
            </div>

            <div className="grid mt-32 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative ">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="pt-10 relative overflow-hidden"
                >
                  <div
                    data-aos="zoom-in-up"
                    className="flow-root sm:h-80 bg-white  rounded-lg px-6 py-8 shadow-lg hover:shadow-xl lg:hover:scale-105 duration-1000"
                  >
                    <Link to={feature.link} className="mt-6 text-center">
                      <div className="flex w-full justify-center">
                        <span className="flex sm:-mt-20 left-0 items-center justify-center p-2 rounded-full w-fit shadow-xl">
                          <img
                            src={feature.Images}
                            className="h-28 w-28 text-white"
                            aria-hidden="true"
                            alt=""
                            loading="lazy"
                          />
                        </span>
                      </div>
                      <h3 className="mt-12 text-lg font-bold text-gray-900 tracking-wide">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 tracking-wider">
                        {feature.description}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ///////////language section //////////////// */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="max-w-4xl mx-auto py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:py-40 px-8">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Computer languages:{" "}
            </h2>
            <p className="mt-4 max-w-3xl text-lg lg:text-xl text-indigo-200">
              Here I am mentioning all the knowing languages with details.{" "}
              <br />
              All those languages are necessary for different kinds of skills.
              {/* Web Development (HTML, CSS, JavaScript, PHP, MySQL), Adobe Photoshop, Microsoft Office, Data Entry, Customer Service, Problem Solving, Time Management, Communication. */}
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {tabs.map((tab) => (
                <div className="">
                  {tab.features.map((feature) => (
                    <div
                      data-aos="fade-down"
                      key={feature.name}
                      className="flex items-center flex-col lg:block"
                    >
                      <div>
                        <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="mt-6 text-center lg:text-left">
                        <h3 className="text-lg font-medium text-white">
                          {tab.name}
                        </h3>
                        <p className="mt-2 text-base text-indigo-200">
                          {feature.sdescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white">
          <section
            aria-labelledby="features-heading"
            className="max-w-full mx-auto py-32 sm:px-2 lg:px-10"
          >
            <div className="max-w-full mx-auto px-4 lg:px-0 lg:max-w-none">
              <div className="max-w-3xl my-16 mb-20 mx-5 lg:mx-0">
                <h2
                  id="features-heading"
                  className="text-4xl font-extrabold tracking-tight text-gray-700 sm:text-5xl"
                >
                  languages Details
                </h2>
                <p className="mt-10 w-3/4 text-lg text-gray-500">
                  Skill details refer to the specific abilities and knowledge
                  that an individual possesses in a particular area. They are
                  often used to assess a person's qualifications for a job or
                  task.
                </p>
              </div>
              <p className="block w-full text-center sm:hidden text-red-300">
                <span className="text-red-600">&#9888;</span> Please use it in{" "}
                <span className="text-purple-400">Laptop</span> or{" "}
                <span className="text-indigo-400">PC</span> for better viewing
              </p>
              <Tab.Group
                as="div"
                className="mt-4 flex  p-5 lg:p-10 border rounded-2xl"
                style={{
                  maxHeight: "800px",
                  boxShadow: " 0 0 50px 10px #eaeaea",
                }}
              >
                <div className="-mx-4 flex flex-col border-r-4 border-gray-200 overflow-x-auto sm:mx-0 w-48 min-w-200">
                  <div className=" px-4 border-gray-50 sm:px-0 w-full text-left">
                    <Tab.List className="-mb-px flex flex-col">
                      {tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-400"
                                : "text-gray-400 hover:text-indigo-300 hover:border-gray-300",
                              "whitespace-nowrap py-6 text-left pl-5 font-medium text-sm lg:text-lg focus:outline-none focus:shadow-outline"
                            )
                          }
                        >
                          {tab.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </div>
                <Tab.Panels as={Fragment}>
                  {tabs.map((tab) => (
                    <Tab.Panel
                      key={tab.name}
                      className="space-y-16 lg:mt-16 w-full overflow-scroll relative"
                    >
                      {tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col-reverse lg:flex-row justify-center w-full"
                        >
                          <div className="mt-6 sm:mt-0 pl-10 sm:px-5 lg:mx-10 w-full lg:w-1/2 ">
                            <h3 className="text-2xl sm:text-3xl mt-5 lg:mt-0 lg:text-4xl font-semibold text-gray-900">
                              {feature.name}
                            </h3>
                            <p className="mt-10 sm:text-xl  text-base text-gray-500">
                              {feature.description}
                            </p>
                            <p className="mt-5  sm:text-xl text-base text-gray-500">
                              {feature.description2}
                            </p>
                            <p className="mt-5  sm:text-xl text-base text-gray-500">
                              {feature.description3}
                            </p>
                            <p className="mt-5  sm:text-xl text-base text-gray-500">
                              {feature.description4}
                            </p>
                            <p className="mt-5  sm:text-xl text-base text-gray-500">
                              {feature.description5}
                            </p>
                          </div>
                          <div className=" w-full py-2 px-10 lg:w-1/2 relative">
                            <div className="aspect-w-2 lg:sticky top-0 aspect-h-1 rounded-lg bg-gray-200 overflow-hidden sm:aspect-w-5 sm:aspect-h-2 lg:h-96">
                              <span className="flex items-center justify-center h-full w-full rounded-md bg-indigo-100 bg-opacity-10 p-1 lg:p-10">
                                <feature.icon
                                  className="h-full w-full text-purple-400 "
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </section>
        </div>
      </>
    );
}
