import profilePicture from '../assets/profile.png';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const colors = {
  first: '#232122',
  second: '#b3c100',
  third: '#4cb5f5',
  fourth: '#dddede',
};

export const headData = {
  title: 'Alejandro Ching | Software Developer',
  description: 'Welcome to my website',
};

export const mainData = {
  title: 'Hi, my name is ',
  name: 'Alejandro Ching',
  subtitle: 'I am a software developer',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `i'm a Software developer i have been studying by myself for 1 year and i have been working on personal projects. Code is my passion. I specialize in designing and developing highly functional back-end applications using Java 11+, Spring, SQL, MySQL, Git and GitHub.`,
  p2: `I like to Play VideoGames, play soccer and go te gym. I like coding because crafting code with Java and Spring to innovative web solutions makes me feel really glad and happy`,
  p3: `Currently i'm working on personal projects and looking up to a new professional experience 👀, i'm studying Systems  engineering and i'm studying Back-End technologies to improve my knowledge.`,
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'UserManagment System',
    description1: `This UserManagment System was built with Java 19+, SpringBoot, MySQL, Bootstrap and JavaScript, this project is a good practice because you can Create, Read, Edit and Delete data from a database. Basically it's a crud where i can operate a bunch of users from an admin account, this project may be useful for mobile plans applications`,
    description2: `This project define what you can do with Bootstrap and Java. Using MySQL was a really good idea becuase you need to create a table because all the data needs to be relational with each other`,
    liveUrl: 'https://github.com/AlejandroChing11/UserManagment-Java',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/AlejandroChing11/UserManagment-Java',
    sourceText: 'Source Code',
    img: { src: project1 },
  },
  {
    title: 'Super Market advisor',
    description1: `This is an application using React, JavaScript, HTML and CSS. This Application it's about a Mall that wants to provide to the user random 
    recipes that the can do during the week or the weekend, with their products`,
    description2: `For this application i used an API that provides me a bunch of 
    recipes so i can show them in 4 different cards. This was a really great practice in React`,
    liveUrl: 'https://alejandroching11.github.io/Rest-app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/AlejandroChing11/Rest-app',
    sourceText: 'Source Code',
    img: { src: project2 },
  },
  {
    title: 'Landing Page',
    description1: `This project is a Landing Page where you can find all the information about me. I used JavaScript vanilla, HTML and CSS`,
    description2: `I used an API that provides me the last videos of a youtube channel, so i used this and show this as a recommendation`,
    liveUrl: 'https://alejandroching11.github.io/Portfolio/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/AlejandroChing11/Portfolio',
    sourceText: 'Source Code',
    img: { src: project3 },
  },
];

export const contactData = {
  title: 'Contact',
  description: 'Send me an e-mail!',
  mailTo: 'mailto:alejandroching2004@hotmail.com',
};

export const FooterData = {
  githubUrl: 'https://github.com/AlejandroChing11',
  linkedinUrl: 'https://www.linkedin.com/in/alejandro-ching-7910b3210/',
};
