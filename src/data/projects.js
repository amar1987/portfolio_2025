export const projectData = [
    {
        id: 1,
        title: 'ANWB Energie',
        stack: 'React Native, TypeScript, Jest, NestJS, Kong, AWS, Expo, Copilot, Firebase, Sentry, OpenTelemetry',
        description: `At ANWB Energie, a growing scale-up, we are collaborating with our platform partner to develop a mobile application that provides users with clear insights into their electricity and gas consumption. \n
The app is being built using React Native, ensuring a smooth and responsive user experience. We are leveraging the Poncho Design System to maintain a consistent and intuitive interface throughout the application. \n
Additionally, we are creating a dynamic funnel to help potential new customers understand \ntheir possible monthly costs based on their input usage. This feature will also facilitate the connection of new customers with suitable contracts, streamlining the onboarding process and enhancing their overall experience.`,
        liveLink: 'https://www.anwb.nl/energie',
    },
    {
        id: 2,
        title: 'ING - Touchpoint Console',
        stack: 'Backstage, Lit, Web Components, TypeScript, Node.js, Express, Docker',
        description: `We have developed a developer console using Backstage to provide our users with deep insights into their software components and the relationships between them.  \n
To meet the organization’s specific needs, we created custom plugins that seamlessly integrated with Backstage, enhancing its functionality and relevance. This developer console is now utilized globally, serving as a crucial tool for managing and understanding our software ecosystem.\n
Backstage, a React-based application, was further enhanced by integrating a custom Lit wrapper. This addition allows us to easily reuse our custom Lit components within Backstage, streamlining development and ensuring consistency across the platform.`,
    },
    {
        id: 3,
        title: 'ANWB - Laadpaal',
        stack: 'Preact, Poncho Design System, TypeScript, Gitlab, Docker',
        description: `Our organization aimed to offer our members the convenience of installing EV charging stations at their homes. In partnership with a trusted provider responsible for handling both the application process and installation, we established a dedicated platform where our members could easily arrange this service. \n
The backend, developed in Java, was designed to guide users through a streamlined funnel. Based on the type of home and electrical connections provided, the platform dynamically presented the most suitable charging options. Users were then given three tailored choices to select from, ensuring a solution that met their specific needs.\n
The frontend was built using Preact, chosen for its speed and efficiency, and was enhanced with the Poncho design system, ensuring a consistent and user-friendly experience throughout the platform. This combination allowed us to create a seamless, intuitive process for our members, making it easier than ever to set up an EV charging station at home`,
        liveLink: 'https://www.anwb.nl/auto/elektrisch-rijden/laadpalen/laadpaal-kopen',
    },
    {
        id: 4,
        title: 'ANWB - Autokosten en Koerslijst',
        stack: 'Preact, TypeScript, Redux, Jest, Node.js, Express, Docker, Mendix, Gitlab',
        description: `The old system had become outdated and was no longer maintainable. As a result, we migrated the backend to Mendix, allowing administrators to efficiently keep the data current and well-managed.\n
We developed an advanced funnel that enables users to retrieve their vehicle information by entering either the license plate, make, or model. After selecting the appropriate configuration and options for their vehicle, accurate calculations are performed and presented to the user in a clear and visually appealing summary.\n
The frontend was built using Preact, a fast and lightweight version of React, and designed with the Poncho design system to ensure a consistent and user-friendly experience. This combination of technologies resulted in a modern, intuitive platform that effectively meets the needs of our users.` ,
        liveLink: 'https://www.anwb.nl/auto/autokosten',
    }, {
        id: 5,
        title: 'ANWB - Huren',
        stack: 'Preact, JavaScript, Redux, Jest, Node.js, Express, Docker, AWS, Gitlab',
        description: `There was a strong organizational desire to collaborate with Hertz, enabling us to offer our members the convenience of easily renting cars. To support this partnership, we developed a new platform with a Java backend that seamlessly handled the connection with Hertz and managed the entire booking process, from reservations to confirmations.\n
A key feature of this platform was the creation of a user-friendly widget, allowing members to quickly rent a car by simply providing a few basic details. This widget served as the entry point to the booking process, guiding users through a streamlined funnel. Within this process, they could specify their preferences, such as the type of car, additional accessories, and other desired options, allowing them to customize their rental experience to their exact needs.\n
The frontend of the platform was built using Preact, a lightweight and fast version of React, perfectly suited to our requirements for speed and efficiency. We leveraged the Poncho design system to ensure a consistent and visually appealing user experience. Poncho's standardized Preact components enabled us to create an intuitive interface that was not only aesthetically pleasing but also provided a seamless user experience.\n
The combination of a powerful Java backend with a modern Preact frontend resulted in a robust platform that offers our members an efficient and personalized car rental experience, fully aligned with the high standards they have come to expect from us.`,
        liveLink: 'https://www.anwb.nl/auto/huren',
    }, {
        id: 6,
        title: 'ANWB - Occasion Portal',
        stack: 'Preact, JavaScript, Redux, Jest, Node.js, Express, Docker, Gitlab, Elasticsearch',
        description: `The organization sought to offer pre-owned vehicles to our members, and to achieve this, we collaborated closely with our platform partner to create a sophisticated new platform. The backend, developed in Java, seamlessly manages the connection between the ANWB and our partner, enabling users to directly connect with the sellers of these vehicles.\n
We designed an intuitive widget that allows users to quickly browse a curated selection of pre-owned cars by entering just a few basic details. The vehicle listings are powered by an Elasticsearch database, offering users the ability to filter results effortlessly and find exactly what they're looking for.\n
When a user selects a vehicle, they are presented with comprehensive details, including the full car history provided by the ANWB. Additionally, the platform offers a clear view of the car’s market value using the ANWB's valuation tool, giving users an accurate estimate of the vehicle’s worth according to the ANWB’s standards.\n
The frontend was crafted using Preact, chosen for its speed and efficiency, and is enhanced by the Poncho design system, ensuring a consistent and user-friendly experience throughout the platform. This combination of advanced technology and thoughtful design delivers a seamless and informed car-buying experience for our members.`,
        liveLink: 'https://www.anwb.nl/auto/kopen',
    }, {
        id: 7,
        title: 'ANWB - Tests en Specificaties',
        stack: 'Preact, JavaScript, Redux, Jest, Node.js, Express, Docker, ElasticSearch, Gitlab',
        description: `The old system, which managed and displayed car information to users, had outlived its usefulness and was in dire need of replacement. The backend was upgraded to a Mendix application, enabling administrators to easily add or update car information with greater efficiency.\n
On the frontend side, the system was running an outdated AngularJS application, which no longer met modern standards. With AngularJS reaching its end-of-life status, the need for a more future-proof solution became evident. The organization decided to adopt Preact, a fast and lightweight version of React, along with ElasticSearch to provide powerful search functionality essential for managing car information. ElasticSearch allowed us to implement advanced filters, significantly enhancing the search experience.\n
Additionally, the Poncho design system was utilized, which includes standard Preact components, ensuring a consistent and intuitive user interface. This combination of technologies not only made the system robust and flexible but also prepared it for future growth and expansion.`,
        liveLink: 'https://www.anwb.nl/auto/testen-en-specificaties',
    }, {
        id: 8,
        title: 'ING - Community',
        stack: 'Lithium, Javascript, Freemarker',
        description: `The ING Community platform serves as a vibrant hub where customers can connect, share experiences, and seek advice on a wide range of financial topics. As part of the development team, I played a key role in enhancing and maintaining this platform to ensure it met the evolving needs of our users.\n
My responsibilities included implementing new features, optimizing performance, and ensuring a seamless user experience. I worked closely with cross-functional teams to gather requirements and translate them into effective solutions. The platform was built using Lithium, a powerful community software that provided the necessary tools to foster engagement and interaction among users.\n
Through continuous improvements and updates, we aimed to create a supportive environment where customers could find valuable information, share insights, and build connections with others facing similar financial challenges.`,
        liveLink: 'https://community.ing.nl/',
    }, {
        id: 9,
        title: 'Jumbo - MijnJumbo',
        stack: 'Swift, Xcode, Fastlane, CocoaPods',
        description: `The MijnJumbo app is designed to provide customers with a seamless and convenient shopping experience. As part of the development team, I contributed to building and enhancing this iOS application using Swift and Xcode.`
    }, {
        id: 10,
        title: 'Belgium Defence',
        stack: 'React, JavaScript, IBM Bluemix',
        description: `Developed a web application for Belgium Defence to quickly identify and respond to potential threats using React and JavaScript. The application features real-time data visualization and alert systems to enhance situational awareness and decision-making processes.`
    }, {
        id: 11,
        title: 'BNPP - Gamification Platform',
        stack: 'AngularJS, Ionic, JavaScript, Bootstrap, IBM Bluemix',
        description: `Created a gamification platform for BNP Paribas that encourages user engagement through interactive challenges and rewards. Built with Angular and Ionic, the platform offers a seamless experience across web and mobile devices, promoting learning and participation among users.`
    }, {
        id: 12,
        title: 'Golfsixes',
        stack: 'AngularJS, Ionic, JavaScript, Jenkins, IBM Bluemix',
        description: `Developed a mobile application for Golfsixes, a golf tournament management company, using AngularJS and Ionic. The app allows users to register for tournaments, view schedules, and track scores in real-time, enhancing the overall experience for participants and organizers alike.`
    }
];