import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    amazon,
    carrent,
    jobit,
    tripguide,
    tokenmaster,
    fakenews,
    threejs,
    java,
    spring,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "BlockChain Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Model",
      icon: creator
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "spring",
      icon: spring,
    },
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "May 2024 - July 2024",
      points: [
        "While interning with the PunchOut team at Amazon, developed and maintained the PunchOut service utilizing Java, the Spring framework, and related technologies.",
        "Worked on the rollout plan and implementation of a new feature",
        "Collaborating with other teams and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Token Master",
      description:
        "Web-based platform that allows you to buy tickets to a show/event, choose your seats based on availability and pay using crypto currency by connecting to your Metamask wallet.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tokenmaster,
      source_code_link: "https://github.com/Mainak2002/tokenmaster",
    },
    {
      name: "Fake News Detector",
      description:
        "A quantitaive study of the different machine learning algorithms to classify a news article as fake or not.",
      tags: [
        {
          name: "jupyter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: fakenews,
      source_code_link: "https://github.com/Mainak2002/Fake_news_detection",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };