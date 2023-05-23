import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaBootstrap, FaSass } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiPuppeteer } from "react-icons/si";

export default [
    {
        title: 'HTML',
        icon: <FaHtml5 className="w-full h-full"/>,
        description: "Markup language",
    },
    {
        title: 'CSS',
        icon: <FaCss3Alt className="w-full h-full"/>,
        description: "Style pages",
    },
    {
        title: 'Sass',
        icon: <FaSass className="w-full h-full"/>,
        description: "Stylesheet language that’s compiled to CSS",
    },
    {
        title: 'Javascript',
        icon: <FaJsSquare className="w-full h-full"/>,
        description: "Programming language of the Web",
    },
    {
        title: 'Puppeteer',
        icon: <SiPuppeteer className="w-full h-full"/>,
        description: "Product for browser automation",
    },
    {
        title: 'React JS',
        icon: <FaReact className="w-full h-full"/>,
        description: "JavaScript library for building user interfaces",
    },
    {
        title: 'Node JS',
        icon: <FaNode className="w-full h-full"/>,
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
        title: 'Bootstrap',
        icon: <FaBootstrap className="w-full h-full"/>,
        description: "World's most famous free CSS framework",
    },
    {
        title: 'Tailwind CSS',
        icon: <TbBrandTailwind className="w-full h-full"/>,
        description: "Utility-first CSS framework",
    },    
]