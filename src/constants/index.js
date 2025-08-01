
import examSimulatorVid from '/assets/video/Exam_Simulator.mp4'
import churchAppVid from '/assets/video/churchapp.mp4'
import iaestheticVid from '/assets/video/iaesthetic.mp4'
import kmunchiesVid from '/assets/video/kmunchies.mp4'
import landingpagesVid from '/assets/video/landingpages.mp4'
import portfolio2Vid from '/assets/video/portfolio2.mp4'

import AwsIcon from "../components/icons/awsIcon";
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
  {id: 'aws', Component: AwsIcon},
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
    imageSrc: examSimulatorVid,
    title: "Exam Simulator",
    skillSets: ["html", "css", "js", "php", "wordpress", "mySql"],
    description: [
      "Developed a custom WordPress exam simulator using PHP and tailored post types and themes.",
      "Created custom post types (exam, question, assigned_exam) with custom fields to link students and exams.",
      "Built a system for instructors to assign timed exams to specific students and track results.",
      "Used WP_Query and WordPress core functions to perform full CRUD operations.",
      "Built custom APIs to manage content without relying on the WordPress admin dashboard using AJAX."
    ]
  },
  {
    imageSrc: churchAppVid,
    title: "Chuch Web Application",
    skillSets: ["react","nodejs", "mongoDB", "html", "css" ],
    description: [
      "Developed a custom WordPress exam simulator using PHP, HTML/CSS/JS with fully tailored themes and post types.",
      "Created exam, question, and assigned_exam custom post types, using custom fields to define relationships between exams, questions, and students.",
      "Built a dynamic exam assignment system where instructors could assign exams to specific students with due dates and track individual results.",
      "Implemented real-time exam timer and auto-submission functionality with JavaScript, and stored performance data via custom REST APIs.",
      "Used WP_Query and WordPress core functions for full CRUD operations, and built custom APIs to manage content without relying on the admin dashboard."
    ]
  },
  {
    imageSrc: kmunchiesVid,
    title: "K-munchies Website",
    skillSets: ["html", "css", "js", "php"],
    description: [
      "Developed a custom WordPress exam simulator using PHP, HTML/CSS/JS with fully tailored themes and post types.",
      "Created exam, question, and assigned_exam custom post types, using custom fields to define relationships between exams, questions, and students.",
      "Built a dynamic exam assignment system where instructors could assign exams to specific students with due dates and track individual results.",
      "Implemented real-time exam timer and auto-submission functionality with JavaScript, and stored performance data via custom REST APIs.",
      "Used WP_Query and WordPress core functions for full CRUD operations, and built custom APIs to manage content without relying on the admin dashboard."
    ]
  },
  {
    imageSrc: iaestheticVid,
    title: "I-aesthetic Website",
    skillSets: ["html", "css", "js", "php"],
    description: [
      "Developed a custom WordPress exam simulator using PHP, HTML/CSS/JS with fully tailored themes and post types.",
      "Created exam, question, and assigned_exam custom post types, using custom fields to define relationships between exams, questions, and students.",
      "Built a dynamic exam assignment system where instructors could assign exams to specific students with due dates and track individual results.",
      "Implemented real-time exam timer and auto-submission functionality with JavaScript, and stored performance data via custom REST APIs.",
      "Used WP_Query and WordPress core functions for full CRUD operations, and built custom APIs to manage content without relying on the admin dashboard."
    ]
  },
  {
    imageSrc: portfolio2Vid,
    title: "Portfolio with 3D modeling - clone",
    skillSets: ["react", "css", "html"],
    description: [
      "Developed a custom WordPress exam simulator using PHP, HTML/CSS/JS with fully tailored themes and post types.",
      "Created exam, question, and assigned_exam custom post types, using custom fields to define relationships between exams, questions, and students.",
      "Built a dynamic exam assignment system where instructors could assign exams to specific students with due dates and track individual results.",
      "Implemented real-time exam timer and auto-submission functionality with JavaScript, and stored performance data via custom REST APIs.",
      "Used WP_Query and WordPress core functions for full CRUD operations, and built custom APIs to manage content without relying on the admin dashboard."
    ]
  },
  {
    imageSrc: landingpagesVid,
    title: "Landing page clones",
    skillSets: ["html", "scss", "react"],
    description: [
      "Developed a custom WordPress exam simulator using PHP, HTML/CSS/JS with fully tailored themes and post types.",
      "Created exam, question, and assigned_exam custom post types, using custom fields to define relationships between exams, questions, and students.",
      "Built a dynamic exam assignment system where instructors could assign exams to specific students with due dates and track individual results.",
      "Implemented real-time exam timer and auto-submission functionality with JavaScript, and stored performance data via custom REST APIs.",
      "Used WP_Query and WordPress core functions for full CRUD operations, and built custom APIs to manage content without relying on the admin dashboard."
    ]
  },
]