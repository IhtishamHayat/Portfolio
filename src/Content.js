// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import pakeezaImage from "./assets/images/Projects/pakeeza.png";
import socialImage from "./assets/images/Projects/social.png";
import creativeImage from "./assets/images/Projects/creative.png";
import personImage from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

import myself from "./assets/images/Hero/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "Ihtisham",
    LastName: "Hussain",
    btnText: "Hire Me",
    image: myself,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Full Stack development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Efficient Figma designer turning visions into sleek, user-friendly realities.",
        logo: figma,
      },
      {
        name: "PHP",
        para: "Proficient in building dynamic and scalable web solutions.",
        logo: nodejs,
      },
      {
        name: "Flutter",
        para: "Swift Flutter developer, crafting seamless cross-platform experiences.",
        logo: ps,
      },
      {
        name: "Laravel",
        para: "Crafting robust web solutions with efficiency and expertise.",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "turning concepts into visual brilliance with precision and flair.",
        logo: sketch,
      },
      {
        name: "AI Integration",
        para: "fusing intelligence for transformative solutions.",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Mobile Application Development",
        para: "Expert in mobile application development, specializing in crafting innovative solutions that prioritize user experience and functionality. Proficient in leveraging the latest technologies to create seamless and responsive mobile applications that meet client needs and industry standards.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Passionate UI/UX designer, transforming ideas into visually stunning and intuitively designed digital experiences.",
        logo: services_logo2,
      },
      {
        title: "Web Development",
        para: "Crafting dynamic and responsive websites, ensuring a seamless user experience and optimal performance. From conceptualization to deployment, we blend innovation and expertise to bring your digital vision to life.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: personImage,
    project_content: [
      {
        title: "Electronics Website",
        image: pakeezaImage,
      },
      {
        title: "Social Media web",
        image: socialImage,
      },
      {
        title: "Creative Website",
        image: creativeImage,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Ihtisham, a passionate and dedicated individual, blending intellect with creativity to make a lasting impact in every pursuit.”",
        img: avatar1,
        name: "Hasan Tariq",
      },
      {
        review:
          "“Blending passion with precision in all pursuits. With a sharp mind and creative flair.”",
        img: avatar2,
        name: "Abdul Moiz",
      },
      {
        review:
          "“A dynamic individual known for their passion, creativity, and unwavering commitment to excellence.”",
        img: avatar3,
        name: "Rashid Umar",
      },
      {
        review:
          "“A dedicated individual, blending passion with innovation to make a lasting impact in every project undertaken.”",
        img: avatar4,
        name: "Abdul Basit",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person,
    para: "Bridging the gap between front-end finesse and back-end brilliance, I thrive on turning complex challenges into elegant solutions, creating robust and user-centric applications that redefine digital excellence.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ihtishamhayat@gmail.com",
        icon: GrMail,
        link: "mailto:ihtishamhayat@gmail.com@gmail.com",
      },
      {
        text: "+92 348 2245586",
        icon: MdCall,
        link: "https://wa.me/+923482245586",
      },
      {
        text: "heytherahti",
        icon: BsInstagram,
        link: "https://www.instagram.com/heythereahti/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
