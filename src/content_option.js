import fondo from './fondo.png';

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

const logotext = "Atlansec";
const meta = {
    title: "Atlansec",
    description: "Atlansec, Asociación de Ciberseguridad.",
};

const introdata = {
    title: "ATLANSEC",
    animated: {
        first: "Pentesting",
        second: "Web",
        third: "Reversing",
        fourth: "CTF",
        fifth: "Labs",
        sixth: "Researching",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Asociación de Ciberseguridad",
    your_img_url: fondo,
};

const dataabout = {
    title: "Asociación de Ciberseguridad",
    aboutme: "Atlansec es una Asociación de Ciberseguridad que se encarga de conectar a estudiantes y profesionales del sector. Además, se realizan talleres, laboratorios y muchas otras actividades que permite a los integrantes poder transferir el conocimiento entre ellos. Sin duda, es una comunidad colaborativa para aprender ciberseguridad.",
};
const worktimeline = [
    {
        jobtitle: "Fundación",
        where: "Cádiz",
        date: "2022",
    },
    {
        jobtitle: "CTF",
        where: "Cadiz",
        date: "2023",
    },
];

const skills = [{
        name: "CTF",
    },
    
    {
        name: "x86",
    },
    
    {
        name: "Pentesting",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "Reverse Engineering",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [{
        img: "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        description: "Coming Soon.",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        description: "Coming Soon",
        link: "#",
    },
    {
        img: "https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg",
        description: "Coming Soon",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "contactoatlansec@gmail.com",
    description: "Estamos encantados de contactar contigo!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.TEMPLATE_ID,
    YOUR_USER_ID: process.env.USER_ID,
};

const socialprofils = {
    discord: "https://discord.gg/B2jvvyfvqm",
    telegram: "https://t.me/Atlansec",
    gitbook: "https://wiki.atlansec.es",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};