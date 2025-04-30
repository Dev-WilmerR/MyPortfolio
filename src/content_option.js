const logoimage = "./assets/mylogo.png";
const logotext = "WILMER RAMIREZ";
const meta = {
    title: "Wilmer Ramírez",
    description: "I’m Wilmer Ramírez, a Fullstack Shopify Developer with 6 years of experience.",   
};

const introdata = {
    title: "I’m Wilmer Ramírez",
    animated: {
        first: "Fullstack Developer...",
        second: "Shopify Expert...",
        third: "I love coding.",
    },
    description: "My passion is transforming ideas into high-performing Shopify experiences that scale with your business.",
    your_img_url: "./assets/myprofile1.jpeg",
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "I'm a Fullstack Shopify Developer with 6 years of experience, having had the opportunity to work with a wide variety of stores, including clothing, technology, child-related products, music stars, healthy food, medical, and more. I also had the privilege of leading as a Project Manager. In my personal life, I enjoy playing instruments such as the violin, guitar, and piano, hiking on weekends, traveling, and watching TV shows and movies. I am a friendly person with a great sense of humor, always eager to connect with others.",
};
const worktimeline = [{
        jobtitle: "E-Commerce Project Manager",
        where: "Rivka Development",
        date: "2024-2025",
    },
    {
        jobtitle: "Fullstack Shopify Developer",
        where: "Rivka Development",
        date: "2023-2024",
    },
    {
        jobtitle: "Shopify Developer",
        where: "SEEED",
        date: "2022-2023",
    },
    {
        jobtitle: "Shopify Developer",
        where: "Rodacorp",
        date: "2020-2022",
    },
    {
        jobtitle: "Shopify Developer",
        where: "Momoz Digital",
        date: "2019-2022",
    },
    
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },    
    {
        name: "Liquid",
        value: 90,
    },
    {
        name: "Tailwind",
        value: 80,
    },    
    {
        name: "Nodejs",
        value: 80,
    },
    {
        name: "JQuery",
        value: 80
    },
    {
        name: "MongoDB",
        value: 70,
    },
    {
        name: "Git",
        value: 90,
    },
    {
        name: "GraphQL",
        value: 60,
    },
];

const services = [{
    title: "Shopify Development",
    description: "I specialize in building custom Shopify stores from the ground up, tailored to meet your unique business needs. From theme customization and app integration to performance optimization and advanced functionality development, I ensure your Shopify store not only looks great but also delivers a seamless shopping experience that drives conversions and boosts sales.",
    },
    {
    title: "Shopify App Development",
    description: "I specialize in creating custom Shopify apps to extend the functionality of your store, providing tailored solutions to meet your unique business requirements and enhance the shopping experience.",
    },
    {
    title: "Frontend Development",
    description: "I craft responsive and visually appealing user interfaces using modern frameworks and technologies, ensuring seamless user experiences across all devices.",
    },
];

const dataportfolio = [{
        img: "./assets/jj.png",
        description: "Worked on the official Jessica Simpson site, combining her music presence with a fashion e-commerce experience for clothing, shoes, and accessories.",
        link: "https://jessicasimpson.com/",
    },
    {
        img: "./assets/twc.png",
        description: "Developed a custom discounts application that allowed stacked discounts and promotions, enhancing the shopping experience.",
        link: "https://www.thewigcompany.com/",
    },
    {
        img: "./assets/dovetail.png",
        description: "Migrated the old theme to a more reliable and faster 2.0 theme, improving the overall performance and user experience.",
        link: "https://dovetailworkwear.com/",
    },
    {
        img: "./assets/lablanca.png",
        description: "Collaborated on enhancing the e-commerce experience for a store specializing in all kinds of swimsuits and apparel, focusing on performance and user engagement.",
        link: "https://lablanca.com/",
    },
    {
        img: "./assets/born.png",
        description: "BornShop is an online store offering a wide range of children’s products, from baby essentials to toys and clothing. Focused on UI, UX, and store performance.",
        link: "https://bornshop.cl/",
    },
    {
        img: "./assets/beyondc.png",
        description: "Worked on enhancing the e-commerce experience in outdoor clothing for all seasons and genders, focusing on performance and user engagement.",
        link: "https://beyondclothing.com/",
    },

    {
        img: "./assets/nydj.png",
        description: "Focused on improving the e-commerce experience for a women's clothing store, enhancing performance, and improving conversion rates.",
        link: "https://nydj.com/",
    },
    {
        img: "./assets/tr.png",
        description: "Collaborated with a team to enhance the e-commerce experience and develop new features such ad customizable products, improving user engagement.",
        link: "https://toririchard.com/",
    },
    {
        img: "./assets/roda.png",
        description: "Migrated from an old theme to a 2.0 theme, enhancing the overall experience both for users and admins.",
        link: "https://roda.cl/",
    },
    {
        img: "./assets/handful.png",
        description: "Migrated the old theme to a more reliable and faster 2.0 theme, also providing custom app solutions for old script based apps.",
        link: "https://handful.com/",
    },
    {
        img: "./assets/lspace.png",
        description: "Collaborated with a team to maintain and enahnce the user experience and improve the performance of the store.",
        link: "https://www.lspace.com/",
    },
    {
        img: "./assets/beachr.png",
        description: "Developed a custom app to manage the store's inventory and orders, improving the overall performance and user experience.",
        link: "https://beachriot.com/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "contact@wilmer-ramirez.com",
    YOUR_FONE: "(+58) 412-155-70-88",
    description: "Empowering merchants to elevate their stores with innovative technology and seamless user experiences.",
    // For PrivateMail, you can use SMTP to send emails
    SMTP_HOST: "mail.privateemail.com",
    SMTP_PORT: 587, // Use 465 for SSL or 587 for TLS
    SMTP_USER: "contact@wilmer-ramirez.com",
    SMTP_PASSWORD: "Mgdr05$$", // Replace with your PrivateMail password
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/wilmer-a-ramirez-ba3758127/",
    instagram: "https://www.instagram.com/will_devpower/",
    tiktok: "https://www.tiktok.com/@will_devpower",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    logoimage,
};