import { PiDownloadLight, PiStarAndCrescentLight, PiEyeLight, PiGooglePhotosLogoLight, PiChalkboardLight, PiKanbanLight, PiProjectorScreenChartLight, PiFilmReelLight, PiGameControllerLight, PiGhostLight, PiDogLight, PiFinnTheHumanLight, PiAirplayLight, PiShuffleLight, PiMagnifyingGlassLight, PiFilmStripLight, PiInfoLight, PiPolygonLight, PiBriefcaseLight, PiWrenchLight } from 'react-icons/pi';
import { MdWorkspacePremium, MdTouchApp, MdAutoAwesome, MdAutoMode } from 'react-icons/md';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaCodePullRequest, FaUsers, FaMedal, FaFire } from 'react-icons/fa6';
import { SiGnuprivacyguard } from 'react-icons/si';
import { BsCalendar3 } from 'react-icons/bs';
import { LuPartyPopper } from 'react-icons/lu';
import { RiSpamLine } from 'react-icons/ri';

import dataUpdate from './update.json';
import data from './features.json';

const allFeatures = Object.keys(data).map(key => {
   let chunk = [];
   for (let i = 0; i < data[key].component.length; i++) {
      chunk.push(data[key].component[i]);
   }
   return chunk.length;
});
const iconFeature = [PiDownloadLight, PiStarAndCrescentLight, PiEyeLight, PiGooglePhotosLogoLight, PiChalkboardLight, PiKanbanLight, PiProjectorScreenChartLight, PiFilmReelLight, PiGameControllerLight, PiGhostLight, PiDogLight, PiFinnTheHumanLight, PiAirplayLight, PiShuffleLight, PiMagnifyingGlassLight, PiFilmStripLight, PiInfoLight, PiPolygonLight, PiBriefcaseLight, PiWrenchLight];
Object.keys(data).map((input, index) => {
   data[input].icon = iconFeature[index];
   return true;
});
const lengthFeatures = allFeatures.reduce((a, b) => a + b);

export const features = data;

export const regexEmail = (input) => {
   return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
};

export const regexPassword = (input) => {
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   return passwordRegex.test(input);
};

export const title_api = 'xcoders api';

export const header_description = `Unlock your productivity potential with Xcoders' Rest API - the ultimate solution for seamless integration and efficient workflow. Streamline your processes and elevate your performance with our cutting-edge technology. Join the Xcoders community and experience the power of productivity today!`;

export const timeline = dataUpdate;

export const statistic = {
   "title": "Statistics",
   "description": `Unlock the power of data with Statistic ${title_api} - Empowering developers with seamless integration, accurate insights, and limitless possibilities for transforming statistics into actionable solutions.`,
   "components": [
      {
         "icon": FaUsers,
         "title": "1.200",
         "description": "Users Registered"
      },
      {
         "icon": MdTouchApp,
         "title": "100",
         "description": "Request Every Day!"
      },
      {
         "icon": FaCodePullRequest,
         "title": "1.200.800",
         "description": "Users Requests."
      },
   ]
};
export const features_description = {
   "title": "explore our awesome Components",
   "description": `Explore our awesome components in the REST ${title_api}. With an intuitive and functional interface, the ${title_api} takes you to a new world of digital connectivity. This API is designed by experts to provide the best experience in accessing and managing data efficiently.`,
   "component": [
      {
         "icon": MdAutoAwesome,
         "title": "Awesome Experience!",
         "description": "With a full range of awesome features, we are here to create an extraordinary experience for you. Each of our features is carefully designed to meet your every need, so you can live life without limitations."
      },
      {
         "icon": FaFire,
         "title": `${lengthFeatures} Features`,
         "description": "We empowers developers to create complex and powerful applications with a wide range of features and capabilities. With over hundreds features available, this API is a highly flexible solution to meet a variety of software development needs."
      },
      {
         "icon": MdAutoMode,
         "title": "Elegant Mode",
         "description": "Increase productivity and convenience with a mode that not only looks stunning but also takes care of your users' eyes. mode has been designed with great attention to visual ergonomics, thus providing an optimal user experience even in low lighting conditions."
      }
   ]
};

export const testimonials = {
   "title": "What's Clients Sayings",
   "description": "what's is the clients talking about the xcoders dev rest api.",
   "component": [
      {
         "icon": FaMedal,
         "name": "John D.",
         "testimonial": "Rest Xcoders API has been a game-changer for my development projects. Its seamless integration and comprehensive documentation have significantly expedited my workflow. Kudos to the team for creating such a powerful and user-friendly tool!",
         "position": "Software Developer"
      },
      {
         "icon": FaMedal,
         "name": "Emily P.",
         "testimonial": "As a non-technical founder, Rest Xcoders API has been a lifesaver. It allowed me to implement complex functionalities without diving into the nitty-gritty of coding. The API's reliability and efficiency have undoubtedly given my startup a competitive edge.",
         "position": "Tech Entrepreneur"
      },
      {
         "icon": FaMedal,
         "name": "Michael S.",
         "testimonial": "Managing multiple projects with diverse technical requirements can be challenging. Rest Xcoders API simplified the process by providing a standardized interface for various services. This has saved us time and resources, enabling us to deliver projects ahead of schedule.",
         "position": "Project Manager"
      },
      {
         "icon": FaMedal,
         "name": "Sophia M.",
         "testimonial": "I've integrated numerous APIs into my applications, and Rest Xcoders API stands out for its ease of use and flexibility. The endpoints are intuitive, and the responses are consistent. It's a developer's dream for building robust and dynamic apps.",
         "position": "App Developer"
      },
      {
         "icon": FaMedal,
         "name": "David W.",
         "testimonial": "Our online store heavily relies on Rest Xcoders API for seamless order processing and inventory management. The API's speed and accuracy ensure that our customers have a smooth shopping experience. It's an indispensable tool for any e-commerce business.",
         "position": "E-commerce Owner"
      }
   ]
};

export const stellar = {
   "title": "Affordable for everyone",
   "description": "Seamless Connectivity, Limitless Possibilities: Unleash the Power of Our REST API!",
   "component": [
      {
         "icon": SiGnuprivacyguard,
         "best": false,
         "label": "",
         "title": "Register User",
         "description": "free forever with no premium features",
         "price": "Free",
         "period": "Forever",
         "link": "/register",
         "obtained": [
            {
               "icon": AiOutlineInfoCircle,
               "text": "100 limit / Days"
            },
            {
               "icon": AiOutlineCloseCircle,
               "text": "Premium Features"
            },
            {
               "icon": AiOutlineCloseCircle,
               "text": "Updated Settings"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Free Features"
            },
            {
               "icon": AiOutlineCloseCircle,
               "text": "All Features"
            }
         ]
      },
      {
         "icon": LuPartyPopper,
         "best": true,
         "label": "Best Seller",
         "title": "Starter plan",
         "description": "most users choose this",
         "price": "Rp 10.000",
         "period": "Month",
         "link": "/login",
         "obtained": [
            {
               "icon": AiOutlineInfoCircle,
               "text": "1000 limit / Days"
            },
            {
               "icon": AiOutlineCloseCircle,
               "text": "Premium Features"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Updated Settings"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Free Features"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "All Features"
            }
         ]
      },
      {
         "icon": MdWorkspacePremium,
         "best": false,
         "label": "",
         "title": "Premium Plan",
         "description": "Unlocked all premium features",
         "price": "Rp 25.000",
         "period": "Month",
         "link": "/login",
         "obtained": [
            {
               "icon": AiOutlineInfoCircle,
               "text": "Unlimited Limit"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Premium Features"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Updated Settings"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "Free Features"
            },
            {
               "icon": AiOutlineCheckCircle,
               "text": "All Features"
            }
         ]
      }
   ]
};

export const apikeys = {
   "title": "Check Apikey",
   "description": "Check your apikey for free. Just enter your apikey into the input below and press the button to check the validation of your apikey. Wait a few moments, and information about your apikey will appear."
};

export const faq = {
   "title": "Frequently Asked Questions",
   "description": "Quick answer for API users who often ask the same thing.",
   "component": [
      {
         "question": "What is the Rest Xcoders API?",
         "answer": "The Rest Xcoders API is an application programming interface that provides a standardized way for developers to interact with the Xcoders platform. It enables you to programmatically access various features and functionalities offered by Xcoders."
      },
      {
         "question": "How do I access the Rest Xcoders API?",
         "answer": "To access the Rest Xcoders API, you need to obtain an API key by registering on the Xcoders platform. Once you have the API key, you can include it in your API requests' headers for authentication and authorization purposes."
      },
      {
         "question": "What kind of data can I retrieve using the API?",
         "answer": "The Rest Xcoders API allows you to retrieve a wide range of data, including user profiles, project information, coding challenges, leaderboards, and more. You can use the API endpoints to fetch data in JSON format, which you can then integrate into your applications or services."
      },
      {
         "question": "How do I make requests to the Rest Xcoders API?",
         "answer": "Requests to the Rest Xcoders API are made using HTTP methods such as GET, POST, PUT, and DELETE. You construct a URL by combining the base API URL with specific endpoints for the data you want to access. Include your API key in the headers for authentication. The API responds with JSON data that you can parse and use."
      },
      {
         "question": "Can I use the Rest Xcoders API for creating and updating data?",
         "answer": "Yes, you can use the API to create and update data on the Xcoders platform. For example, you can use POST requests to submit solutions to coding challenges or PUT requests to update your user profile information. Refer to the API documentation for details on the required request payloads and endpoints."
      },
      {
         "question": "Is there a rate limit for API requests?",
         "answer": "Yes, the Rest Xcoders API has a rate limiting mechanism in place to ensure fair usage and prevent abuse. The rate limits might vary based on your subscription level or user type. It's recommended to review the API documentation to understand the specific rate limits and how they affect your usage."
      }
   ]
};

export const subscribe = {
   "title": "Subscribe to our information.",
   "description": "Stay Informed, Subscribe Today! Unlock exclusive content and updates with our newsletter. Join the conversation and never miss out!",
   "component": [
      {
         "icon": BsCalendar3,
         "title": "reset everyday",
         "description": "Reset your limits every day, and watch your potential soar to new heights!"
      },
      {
         "icon": RiSpamLine,
         "title": "No spam",
         "description": "Clear your inbox clutter, bid adieu to spam. Enjoy a hassle-free email experience."
      },
   ]
};

export const defaultTheme = 'forest';

export const customConfig = {
   primary: '#fc055b',
   secondary: '#219aaf',
   accent: '#e8d03a',
   neutral: '#2A2730',
   'base-100': '#E3E3ED',
   '--rounded-box': '3rem',
   '--rounded-btn': '3rem',
};

export const myTheme = {
   "mytheme": {
      "primary": "#5d99e2",
      "secondary": "#b5e878",
      "accent": "#37fce8",
      "neutral": "#1a1a1a",
      "base-100": "#363c45",
      "info": "#70c4e1",
      "success": "#61e0cf",
      "warning": "#e89726",
      "error": "#ea2e57",
      "--rounded-box": "1rem",
      "--rounded-btn": "0.5rem",
      "--rounded-badge": "1.9rem",
      "--animation-btn": "0.25s",
      "--animation-input": "0.2s",
      "--btn-text-case": "uppercase",
      "--btn-focus-scale": "0.95",
      "--border-btn": "1px",
      "--tab-border": "1px",
      "--tab-radius": "0.5rem",
   }
};

export const Themes = [
   'light',
   'dark',
   'cupcake',
   'bumblebee',
   'emerald',
   'corporate',
   'synthwave',
   'retro',
   'cyberpunk',
   'valentine',
   'halloween',
   'garden',
   'forest',
   'aqua',
   'lofi',
   'pastel',
   'fantasy',
   'wireframe',
   'black',
   'luxury',
   'dracula',
   'cmyk',
   'autumn',
   'business',
   'acid',
   'lemonade',
   'night',
   'coffee',
   'winter',
   'procyon',
];