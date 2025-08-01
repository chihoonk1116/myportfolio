
import examSimulatorVid from '/assets/video/Exam_Simulator.mp4'
import churchAppVid from '/assets/video/churchapp.mp4'
import iaestheticVid from '/assets/video/iaesthetic.mp4'
import kmunchiesVid from '/assets/video/kmunchies.mp4'
import landingpagesVid from '/assets/video/landingpages.mp4'
import portfolio2Vid from '/assets/video/portfolio2.mp4'

import CloudIcon from "../components/icons/CloudIcon";
import CssIcon from "../components/icons/CssIcon";
import DockerIcon from "../components/icons/DockerIcon";
import GithubIcon from "../components/icons/GithubIcon";
import HtmlIcon from "../components/icons/HtmlIcon";
import JavaScriptIcon from "../components/icons/JavaScriptIcon";
import LambdaIcon from "../components/icons/LambdaIcon";
import MongoDB from "../components/icons/MongoDB";
import MySqlIcon from "../components/icons/MySqlIcon";
import NodejsIcon from "../components/icons/NodejsIcon";
import PHPIcon from "../components/icons/PHPIcon";
import ReactIcon from "../components/icons/ReactIcon";
import ScssIcon from "../components/icons/ScssIcon";
import TailwindcssIcon from "../components/icons/TailwindcssIcon";
import ViteIcon from "../components/icons/ViteIcon";
import WordpressIcon from "../components/icons/WordpressIcon";



export const skills = [
  { name: 'Eager to Learn', desc: 'Continuously seeks new knowledge and stays up-to-date with the latest technologies.' },
  { name: 'Problem Solver', desc: 'Approaches complex challenges methodically and finds efficient solutions.' },
  { name: 'Attention to Detail', desc: 'Catches subtle bugs and ensures code quality through precision and care.' },
  { name: 'Effective Communicator', desc: 'Able to explain technical concepts clearly to both technical and non-technical audiences.' },
  { name: 'Team Player', desc: 'Collaborates well with others and contributes to a supportive and productive work environment.' },
  { name: 'Self-Motivated', desc: 'Takes initiative and delivers results without needing constant supervision.' },
  { name: 'Adaptable', desc: 'Quickly adjusts to new tools, frameworks, and project requirements.' },
  { name: 'Critical Thinker', desc: 'Analyzes issues logically and makes informed decisions under pressure.' },
  { name: 'Time Management', desc: 'Prioritizes tasks effectively to meet deadlines and maintain productivity.' },
  { name: 'Curious', desc: 'Explores new ideas, tools, and approaches out of genuine interest.' },
  { name: 'Open to Feedback', desc: 'Values constructive criticism and uses it to grow and improve.' },
  { name: 'Empathetic Developer', desc: 'Builds user-centered applications by understanding real user needs and experiences.' }
]

export const techSkills = [
  { name: 'Data Structure', desc: 'Organizes and manages data efficiently using arrays, linked lists, trees, and graphs.' },
  { name: 'Algorithm', desc: 'Solves problems with optimized logic and efficient use of time and space.' },
  { name: 'Object-Oriented Programming', desc: 'Structures software using principles like encapsulation, inheritance, and polymorphism.' },
  { name: 'Database Systems', desc: 'Designs and queries relational and non-relational databases for structured data management.' },
  { name: 'Operating Systems', desc: 'Understands process management, memory allocation, and file systems.' },
  { name: 'Computer Networks', desc: 'Explores communication protocols, IP addressing, and client-server architectures.' },
  { name: 'Software Engineering', desc: 'Applies development methodologies to plan, design, test, and maintain software systems.' },
  { name: 'Web Technologies', desc: 'Builds interactive front-end and back-end systems using HTML, CSS, JavaScript, and server-side languages.' },
  { name: 'Software Architecture', desc: 'Defines high-level structure of software systems to ensure scalability, maintainability, and performance.' },
]

export const icons = [
  {id: 'cloud', Component: CloudIcon},
  {id: 'css', Component: CssIcon},
  {id: 'docker', Component: DockerIcon},
  {id: 'github', Component: GithubIcon},
  {id: 'html', Component: HtmlIcon},
  {id: 'js', Component: JavaScriptIcon},
  {id: 'lambda', Component: LambdaIcon},
  {id: 'mongoDB', Component: MongoDB},
  {id: 'mySql', Component: MySqlIcon},
  {id: 'nodejs', Component: NodejsIcon},
  {id: 'php', Component: PHPIcon},
  {id: 'react', Component: ReactIcon},
  {id: 'scss', Component: ScssIcon},
  {id: 'tailwindcss', Component: TailwindcssIcon},
  {id: 'vite', Component: ViteIcon},
  {id: 'wordpress', Component: WordpressIcon},
]

export const experiences = [
  {
    title: "Queens College",
    job: "Computer Science Bachelor's",
    date: "2020 - 2022",
    contents: [
      "Studied core computer science principles including Data Structures and Algorithms, gaining proficiency in optimizing time and space complexities for various problem-solving scenarios.",
      "Developed robust software systems through Object-Oriented Programming in Java, emphasizing encapsulation, inheritance, and polymorphism.",
      "Practiced full software development lifecycle in Software Engineering, implementing agile methodologies and version control (Git).",
      "Created responsive web applications using HTML, CSS, JavaScript, and backend scripting as part of Web Technologies coursework",
      "Enhanced problem-solving and Java fluency through algorithm competitions and coursework.",
    ],
  },
  {
    title: "",
    job: "Family Business Manager",
    date: "2023 - 2024",
    contents: [
      "Designed and developed a custom website for a family business using HTML, CSS, JavaScript, and PHP, tailored to the business's branding and needs.",
      "Aligned technical solutions with business goals to boost operational efficiency and digital presence.",
      "Registered and configured a custom domain with DNS management, and set up Google Search Console for indexing, enhancing discoverability on search engines.",
      "Managed Google Business Profile to maintain accurate, engaging local presence.",
      "Applied SEO strategies—semantic HTML, metadata, performance tuning—resulting in 50% more new visitors and 100% growth in views in 3 months.",
    ],
  },
  {
    title: "",
    job: "Freelance Full-Stack Developer",
    date: "2025 - Present",
    contents: [
      "Built and deployed full-stack apps with React, Node.js, and MongoDB, containerized with Docker and hosted on GCP Cloud Run.",
      "Created admin panels for non-technical users to update content like posts, images, and files without code changes.",
      "Delivered static and semi-dynamic business websites, ensuring full responsiveness across devices and optimized performance using pure HTML/CSS/JS or React, depending on client needs.",
      "Developed custom contact forms and lightweight backend services using PHP Composer libraries, avoiding third-party form services to reduce operational costs.",
      "Applied SEO strategies—meta tags, structured data, and keyword optimization—leveraging prior experience as a digital manager."
    ],
  },
];


export const projects = [
  {
    source: examSimulatorVid,
    title: "Exam Simulator",
    skillSets: ["html", "css", "js", "php", "wordpress", "mySql", "github"],
    summary: "Wordpress Custom Theme Developement with REST API, WP Query, FrontEnd Developement",
    description: [
      "Developed a custom WordPress exam simulator using PHP and tailored post types and themes.",
      "Created custom post types (exam, question, assigned_exam) with custom fields to link students and exams.",
      "Built a system for instructors to assign timed exams to specific students and track results.",
      "Used WP_Query and WordPress core functions to perform full CRUD operations.",
      "Built custom APIs to manage content without relying on the WordPress admin dashboard using AJAX."
    ],
    links: [
      {title: 'Exam Simulator', address: '#'}
    ]
  },
  {
    source: churchAppVid,
    title: "Chuch Web Application",
    skillSets: ["react","nodejs", "mongoDB", "html", "css", "docker", "lambda", "cloud"],
    summary: "Full-Stack Development, REST API, Data Persistence, Google Cloud, Deployment Strategy",
    description: [
      "Built a full-stack church web app using React and Node.js, deployed on GCP Cloud Run via Docker containers.",
      "Implemented an admin panel to manage content dynamically without modifying code, enabling uploads of images and announcements.",
      "Used MongoDB for persistent data storage and GCP Cloud Storage to store uploaded images.",
      "Developed a PDF converter that uploads PDF files, converts them into images, stores them on GCP, and returns public URLs.",
      "Integrated YouTube API to automatically sync a specific playlist (e.g., sermons) with the website when new videos are uploaded."
    ],
    links: [
      {title: 'Grace Church', address: 'https://www.gracenewyork.org/'}
    ]
  },
  {
    source: kmunchiesVid,
    title: "K-munchies Website",
    skillSets: ["html", "css", "js", "php"],
    summary: "Static Web Development, Responsiveness, SEO, PHP SMTP integration",
    description: [
      "Developed a static business website for 'K-Munchies' using HTML, CSS, and JavaScript, focused on clean navigation and responsive design.",
      "Implemented a sticky navbar with anchor links to allow users to quickly navigate to different menu sections.",
      "Integrated PHPMailer in PHP to enable SMTP-based email contact functionality.",
      "Optimized the site for SEO by implementing Schema markup using Spatie and submitting a sitemap to Google Search Console.",
    ],
    links: [
      {title: 'K-Munchies', address: 'https://kmunchiesnyc.com/'}
    ]
  },
  {
    source: iaestheticVid,
    title: "I-aesthetic Website",
    skillSets: ["html", "css", "js", "php"],
    summary: "Static Web Development, Responsiveness, SEO, EmailJS Integration",
    description: [
      "Built a static promotional website for 'i-Aesthetic' using HTML, CSS, and JavaScript, tailored to the brand’s aesthetic and functional needs.",
      "Implemented a customizable popup modal to highlight ongoing promotions or events immediately upon page visit.",
      "Implemented email contact functionality using EmailJS, enabling users to send messages without a backend server.",
      "Optimized the website for SEO with semantic HTML structure, meta tags, and Schema markup for enhanced search engine visibility.",
    ],
    links: [
      {title: 'I-aesthetic', address: 'https://iaesthetic-ny.com/'}
    ]
  },
  {
    source: portfolio2Vid,
    title: "Portfolio with 3D modeling - clone",
    skillSets: ["react", "vite", "css", "html"],
    summary: "3D Web Animation, Interactive UI, Three.js & Motion Integration",
    description: [
      "Built a 3D animation-rich clone project using Three.js, GSAP and Framer Motion in React to explore frontend animation and modeling techniques.",
      "Integrated a rotating 3D planet model in the hero section using Three.js to create dynamic visual impact.",
      "Used Framer Motion and GSAP to implement scroll-triggered animations, revealing content smoothly across sections.",
      "Incorporated the Marquee component from Magic UI to enhance visual engagement with seamless motion effects.",
      "Gained hands-on experience in combining 3D models and animations in modern frontend workflows."
    ],
    links: [
      {title: 'Portfolio Clone', address: 'https://chihoonk1116.github.io/portfolio-with-3d-modeling/'}
    ]
  },
  {
    source: landingpagesVid,
    title: "Landing page clones",
    skillSets: ["html", "tailwindcss", "css", "react", "vite"],
    summary: "Modern UI/UX development, Responsiveness, CSS Techniques, React Component Architecture",
    description: [
      "Completed four clone projects using React, Vite, and CSS to improve UI/UX design and development skills.",
      "Built various styles of modern landing pages with a focus on clean layout, interactivity, and responsiveness.",
      "Deepened understanding of CSS techniques including Flexbox, Grid, positioning, and responsive design patterns.",
      "Practiced efficient component structure and reusability in React to streamline UI development.",
      "Gained practical insight into creating visually engaging and user-friendly web interfaces."
    ],
    links: [
      {title: 'GERICHT', address: 'https://chihoonk1116.github.io/restaurant-uiux/'},
      {title: 'HooBank', address: 'https://chihoonk1116.github.io/hoobank-clone/'},
      {title: 'GPT3', address: 'https://chihoonk1116.github.io/gpt-3_landing_page_clone/'},
      {title: 'Brainwave', address: 'https://chihoonk1116.github.io/brainwave-clone/'},
    ]
  },
]