import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robson Trajano | Programmer and Computer Science Student',
  lang: 'English, Portuguese',
  description: 'Welcome to my portfolio website',
};

// HERO DATA
export const heroData = {
  title: 'Programmer | Computer Science Student | ESL Teacher',
  name: 'Robson Trajano',
  subtitle: "I'm a person who loves computer science and programming. I love to learn and teach.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `As a kid, I would love to open old computers and electronics just to see how they worked.
  I was fascinated by hardware so I started studying more abour computers and would fix other people's computers 
  and laptops. Then when I was drafted into the army in Brazil, I started working with IT and then I became
  more interested in programming. I went to college and studied a little of Java, then C++ and JavaScript 
  but the language that fascinated me was Python.
  `,
  paragraphTwo: `Unfortunately, I had to drop out of university and I was forced into a different career that
  took me away from programming but closer to working with hardware. I was in sales for a few months and I got an
  opportunity for a career change. I then became an English as a second language teacher and Portuguese immersion for 
  foreigners instructor and did that for almost 8 years.`,
  paragraphThree: `Finally, I decided to move for personal reasons and chose Canada where I again became very 
  interested in programming. Now with all these courses and information online, it has become very easy to study 
  and that is what I've been doing in the last four years. Besides learning and practicing Computer Science
  and Progamming concepts, I have worked on small projects, studied the best practices of different languages, and finally,
  I have become interested in mathematics and recently enrolled in the bachelor's in mathematics at university.`,
  resume: 'https://my.indeed.com/p/fuialsn', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Space Wars Game with Python',
    info: `This was the first game that I worked on with a collaborator. This game was built
    using Object Oriented Programming and by using classes and methods, it was easier to build 
    the project. The game is very simple and I still want to come back to it to change the 
    graphics and add more functionality such as the program closing when the user gets hit 
    three times.`,
    url: '',
    repo: 'https://github.com/roblivesinottawa/space_wars', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password.jpg',
    title: 'Password Cracker',
    info: `This is a simple program to crack a password that is run locally on the terminal.
    It asks the user for input and then runs a loop where the algorithm will try find a specific
    password.`,
    info2: '',
    url: '',
    repo: 'https://github.com/roblivesinottawa/password_cracker/blob/main/crack.py', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'computerscience.jpg',
    title: 'Computer Science Problems',
    info: `This is some scripts of computer science problems sometimes
    used in interviews and commonly taught in universities and bootcamps.`,
    info2: '',
    url: '',
    repo: 'https://github.com/roblivesinottawa/computer_science', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'computerscience.jpg',
    title: 'Currently working on:',
    info: `This is some of the code that I have currently been working
    on which is part of the 100-day code challenge.`,
    info2: '',
    url: '',
    repo: 'https://github.com/roblivesinottawa/intermediate_100_days', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github.png',
    title: 'Github Projects',
    info: `I have code that goes from basic to intermediate and advanced in languages
    such as Python, JavaScript,and SQL. Some of the code comes from university, bootcamps,
    online courses, and other sources. Check put my GitHb page to see the projects 
    I have been working on.`,
    info2: '',
    url: '',
    repo: 'https://github.com/roblivesinottawa', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tech.rob@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/roblivesinquebec',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robprogrammer/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/roblivesinottawa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
