export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  liveLabel?: string;
  details: string;
};

export const projects: Project[] = [
  {
    id: "skillswap",
    title: "skillswap",
    description:
      "Community-focused platform concept for skill exchange and peer-to-peer learning.",
    image: "/projects/skillswap-photo.jpg",
    techStack: ["Java", "Spring Boot", "Vercel"],
    githubUrl: "https://github.com/Puneeth7kumar/skillswap",
    liveUrl: "https://skillswap-hazel-pi.vercel.app",
    liveLabel: "Live Demo",
    details:
      "An end-to-end skill exchange project where users can connect, discover opportunities, and collaborate. The repository currently uses Java as its primary stack and includes a deployed demo URL.",
  },
  {
    id: "tastytrack",
    title: "TastyTrack",
    description:
      "Food and expense tracking style application focused on practical day-to-day usability.",
    image: "/projects/tastytrack-photo.jpg",
    techStack: ["JavaScript", "Frontend", "Web App"],
    githubUrl: "https://github.com/Puneeth7kumar/TastyTrack",
    liveUrl: "https://github.com/Puneeth7kumar/TastyTrack",
    liveLabel: "Repository",
    details:
      "TastyTrack is one of your recent JavaScript repositories and represents your product-building skills around tracking interfaces and user-focused flows.",
  },
  {
    id: "budget-planner-with-ai",
    title: "Budget Planner with AI",
    description:
      "Angular + Flask based budget planning app with AI-assisted features for personal finance workflows.",
    image: "/projects/budget-ai-photo.jpg",
    techStack: ["Python", "Flask", "AngularJS", "AI Integration"],
    githubUrl: "https://github.com/Puneeth7kumar/Budget-planner-with-AI-",
    liveUrl: "https://github.com/Puneeth7kumar/Budget-planner-with-AI-",
    liveLabel: "Repository",
    details:
      "A standout AI-related project in your profile, combining frontend and backend stacks to solve budgeting with intelligent recommendations and automation.",
  },
  {
    id: "financetracker",
    title: "financetracker",
    description:
      "Finance tracking web app focused on recording and analyzing personal expenses and money flow.",
    image: "/projects/financetracker-photo.jpg",
    techStack: ["JavaScript", "Frontend", "Data Tracking"],
    githubUrl: "https://github.com/Puneeth7kumar/financetracker",
    liveUrl: "https://github.com/Puneeth7kumar/financetracker",
    liveLabel: "Repository",
    details:
      "This project demonstrates your capability to convert real-world financial workflows into actionable, user-friendly web interfaces.",
  },
  {
    id: "handgesture-to-text-for-mute-people",
    title: "Hand Gesture to Text for Mute People",
    description:
      "Assistive AI project that converts hand gestures into readable text for accessibility use-cases.",
    image: "/projects/handgesture-photo.jpg",
    techStack: ["Python", "Computer Vision", "AI/ML"],
    githubUrl: "https://github.com/Puneeth7kumar/handgesture-to-text-for-mute-people",
    liveUrl: "https://github.com/Puneeth7kumar/handgesture-to-text-for-mute-people",
    liveLabel: "Repository",
    details:
      "A socially impactful machine-learning project that highlights your experience building practical AI systems focused on accessibility and communication.",
  },
  {
    id: "myprofile",
    title: "BalyayaBandhan",
    description:
      "BalyayaBandhan is a web application that allows users to track their Family and Matrimonial profiles own community.",
    image: "/projects/myprofile-photo.jpg",
    techStack: ["JavaScript", "Frontend", "Data Tracking"],
    githubUrl: "",
    liveUrl: "https://balyaya-bandhan.vercel.app/",
    liveLabel: "Live Demo",
    details:
      "BalyayaBandhan is a web application that allows users to track their Family and Matrimonial profiles own community.",
  },
  {
    id: "eyewearonline",
    title: "eyewearonline",
    description:
      "E-commerce style eyewear storefront project with product listing and shopping-oriented UI flows.",
    image: "/projects/eyewearonline-photo.jpg",
    techStack: ["JavaScript", "E-commerce", "UI Development"],
    githubUrl: "https://github.com/Puneeth7kumar/eyewearonline",
    liveUrl: "https://github.com/Puneeth7kumar/eyewearonline",
    liveLabel: "Repository",
    details:
      "An early commerce-focused web project that demonstrates your ability to build domain-specific interfaces for product browsing experiences.",
  },
];
