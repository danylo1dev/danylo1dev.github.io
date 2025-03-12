import { TDeveloperInfo } from "../types/TDevelopersInfo";
import AvatarImage from "../assets/developer/avatar.png";
import ProjectSrc1 from "../assets/developer/projects/1.png";
import ProjectSrc2 from "../assets/developer/projects/2.png";
//import ProjectSrc3 from "../assets/developer/projects/3.png";
import ProjectSrc4 from "../assets/developer/projects/4.png";
import ProjectSrc5 from "../assets/developer/projects/5.png";
import ProjectSrc6 from "../assets/developer/projects/6.png";

export const developerInfo: TDeveloperInfo = {
  username: "danylo-hlushko",
  name: "Danylo Hlushko",
  position: "Back-End Developer",
  avatar: AvatarImage,
  socials: {
    upwork: "https://www.upwork.com/freelancers/~01103665f89a000701",
    github: "https://github.com/danylo1dev",
  },
  description:
    "I'm a backend developer with 5+ years of commercial experience specializing in JavaScript frameworks like Node.js, Nest.js, and Express.js. I have expertise in databases (MongoDB, PostgreSQL, Redis, MySQL, Elasticsearch) and server-side development with Firebase. I handle AWS deployments, including S3 setup, and have integrated Stripe, SendGrid, and Twilio into projects. I'm adaptable, ready for challenges, and open to interviews with good conversational English.",
  previousProjects: [
    {
      title: "Makemi",
      position: "Back-End Developer",
      previewSrc: ProjectSrc1,
      duration: "9 months",
      href: "https://makemi.io/",
      description:
        "Makemi is a project designed to simplify the process of report creation for Social Media Marketing (SMM) specialists. The platform aggregates metrics from various social networks and generates easy-to-read reports.",
      technologies:
        "Node.js, Nest.js, TypeORM, PostgreSQL, AWS (S3 file storage, IAM, Cognito), OAuth, Facebook API, Instagram API, TikTok API, LinkedIn API, X (Twitter) API, GitHub Actions automatic deployment, Jest, Docker, Swagger, Elasticsearch",
      results:
        "I developed a secure RESTful API backend with user management features like registration, authorization, email validation, password resets, and OTP flows. I integrated LinkedIn, Facebook, YouTube, and Reddit to pull and aggregate metrics for reporting. Using AWS Cognito, I ensured robust authentication, while Elasticsearch optimized search performance. GitHub Actions enabled automated deployment, and Docker streamlined containerization. I also documented the API with Swagger for seamless developer onboarding.",
    },
    {
      title: "Gatherwise",
      position: "Back-End Developer",
      previewSrc: ProjectSrc2,
      duration: "12 months",
      href: "https://gatherwise-frontend-gatherwise.vercel.app/",
      description:
        "Gatherwise is a project that helps make event and meeting planning easier, allowing users to seamlessly organize and coordinate various aspects of their gatherings.",
      technologies:
        "Node.js, Nest.js, TypeORM, PostgreSQL, AWS (EC2 Deployment, S3 file storage, CloudWatch logs, IAM, load balancing), Supabase, Google OAuth, Mapbox API, Sentry, Github Actions automatic deployment, Jest, Docker, Swagger",
      results:
        "I developed a secure RESTful API backend with user management (registration, authorization, email validation, password reset, OTP) and seamless contact synchronization. I integrated Mapbox for geolocation search, automated deployments with GitHub Actions, and used Docker for scalability. AWS services (EC2, S3, CloudWatch, IAM, load balancing) ensured security and performance. I also implemented Swagger for documentation and Sentry for bug tracking and monitoring.",
    },
    //{
    //  title: "Chalk",
    //  position: "Back-End Developer",
    //  previewSrc: ProjectSrc3,
    //  duration: "9 months",
    //  href: "https://chalk.software/",
    //  description: "Chalk is a website where users can create NFT and sell it to OpenSea",
    //  technologies: "Node.js, Metamask Wallet, AWS S3",
    //  results:
    //    "As a Back-End Developer at Chalk, I played a key role in building the platform's MVP, developing core backend logic. I integrated MetaMask for secure NFT transactions and implemented AWS S3 for reliable file storage and retrieval, ensuring a strong infrastructure.",
    //},
    {
      title: "Sensay",
      position: "Back-End Developer",
      previewSrc: ProjectSrc4,
      duration: "9 months",
      href: "https://sensay.io/",
      description:
        "Sensay is an educational project where users can get knowledge from famous historical figures or contemporary celebrities thanks to Open AI",
      technologies:
        "Node.js, Stripe, SendGrid, Auth0, ExpressJS, GraphQL, MongoDB, PostgreSQL, TypeScript, JavaScript, GitLab, Docker",
      results:
        "I implemented and optimized key platform functionalities, enhancing performance and user experience. Using Node.js, Stripe, SendGrid, Auth0, ExpressJS, GraphQL, MongoDB, PostgreSQL, TypeScript, and Docker, I played a crucial role in advancing the project. I integrated Stripe for secure payments, implemented Auth0 for robust authentication, and integrated the OpenAI API to provide users with insights from historical and contemporary figures.",
    },
    {
      title: "Vista Social",
      position: "Back-End Developer",
      previewSrc: ProjectSrc5,
      duration: "10 months",
      href: "https://vistasocial.com/",
      description:
        "Vista Social is a SAAS web application. It's a modern SMM platform, a powerful SMM management tool for brands and agencies.",
      technologies: "Node.js, StripeAPI, YouTubeAPI, Google API, Reddit API, Facebook API ",
      results:
        "As a pivotal team member involved in the inception of the MVP for Vista Social, my role as a Back-End Developer was instrumental in shaping the success of the project.\nMy achievements include  integrating Stripe, implementing social network integrations, facilitating Stripe payments, introducing a Link Shortener, and enabling posting schedules. These contributions collectively fortified Vista Social as a sophisticated SMM platform, offering users a comprehensive suite of tools to elevate their social media management strategies.",
    },
    {
      title: "Rustafied",
      position: "Back-End Developer",
      previewSrc: ProjectSrc6,
      duration: "10 months",
      href: "https://www.rustafied.com/",
      description:
        "Rustafied is a project focused on creating a complex backend to gather and process game statistics for RUST from the Steam API, providing comprehensive data analysis.",
      technologies:
        "Node.js, Express, AWS (S3, Elastic Instance, CloudWatch), ClickHouse, MongoDB, Docker, Jest, Redis",
      results:
        "I successfully developed a high-performance RESTful API backend for processing and storing RUST game statistics from the Steam API. I optimized data storage using ClickHouse and MongoDB, implemented sharding on AWS Elastic Instances, and used Redis caching for scalability. Leveraging AWS S3 and CloudWatch ensured reliable storage, monitoring, and logging. The application was containerized with Docker for seamless deployment, and I maintained code quality with Jest unit and integration tests.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "MySQL",
    "GraphQL",
    "Sequelize",
    "TypeORM",
    "Twilio API",
    "SendGrid",
    "Stripe",
    "RabbitMQ",
    "Mocha",
    "Jest",
    "WebSockets",
    "Auth0",
    "JWT",
    "Docker",
    "CI/CD",
    "AWS",
    "AWS S3",
    "AWS EC2",
    "AWS CodeCommit",
    "AWS API Gateway",
    "AWS Lambda",
    "AWS DynamoDB",
    "AWS IAM",
    "AWS CloudWatch",
    "AWS Serverless Framework",
    "GitHub",
    "Jira",
    "Trello",
  ],
  education: [
    {
      list: [
        "Bachelor of Computer Science (BCompSc) Computer science National Aerospace University «Kharkiv Aviation Institute»",
        "Full Stack JavaScript Development. Mate Academy IT School",
      ],
    },
  ],
  employmentHistory: [
    {
      position: "Software Engineer NodeJS NestJS ExpressJS PostgreSQL MongoDB Developer",
      company: "Incode Group",
      duration: "February 2024 - Present",
    },
    {
      position: "Back-End developer NodeJS NestJS Express MongoDB PostgreSQL MySQL",
      company: "UBOS",
      duration: "September 2023 - January 2024",
    },
    {
      position: "Software developer NodeJS NestJS MySQL ExpressJS Stripe NestJS TypeORM",
      company: "Baza",
      duration: "June 2022 - September 2023",
    },
    {
      position: "Back End Developer NodeJS Express NestJS PostgreSQL MongoDB MySQL",
      company: "WAF agency",
      duration: "December 2021 - May 2022",
    },
  ],
  languages: [
    {
      name: "English",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate",
      level: "B2",
    },
  ],
};
