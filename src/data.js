import HTML5Icon from './images/html5-icon.svg';
import css3Icon from './images/css3-icon.svg';
import javaScriptIcon from './images/javascript-icon.svg';
import reactIcon from './images/react-icon.svg';
import nodeIcon from './images/node-icon.svg';
import mongoDbIcon from './images/mongodb-icon.svg';
import cppIcon from './images/cpp-icon.svg';
import blockly1 from './images/blockly-SS1.png';
import blockly2 from './images/blockly-SS2.png';
import blockly3 from './images/blockly-SS3.png';
import blockly4 from './images/blockly-SS4.png';
import flowers1 from './images/flowers-SS1.png';
import flowers2 from './images/flowers-SS2.png';
import flowers3 from './images/flowers-SS3.png';
import flowers4 from './images/flowers-SS4.png';
import flowers5 from './images/flowers-SS5.png';
import nfl1 from './images/nfl-SS1.png';
import nfl2 from './images/nfl-SS2.png';
import nfl3 from './images/nfl-SS3.png';
import nfl4 from './images/nfl-SS4.png';
import ide from './images/ide.png';

export const designations = ["Front-end Developer", "Software Engineer"];
export const hello = ["Hi"]
export const about = "👋 I'm Ankit Anand. A software Engineer at Persistent Systems :). Currently I'm working with ReactJS library. If you like this portfolio and want to reach out to me please contact me through my linkedIn or at ankit854100@gmail.com. Thank you 💜";

export const resumeProjects = [
  {
    title: "Early Coding",
    images: [blockly1, blockly2, blockly3, blockly4],
    startDate: "2020",
    technologies: [{ icon: HTML5Icon, name: "HTML5" }, { icon: css3Icon, name: "CSS3" }, { icon: javaScriptIcon, name: "JavaScript" }, {icon: reactIcon, name: "ReactJS"}],
    description: "It is a drag and drop programming environment just like Scratch and Code.org made in ReactJS using google blockly library. It enable user to learn about programming without being worrying about complex programming syntax. It has different activity with different levels. There is also one drag and drop procedural programming IDE.",
    url: "https://blockly-using-router.vercel.app/"
  },
  {
    title: "Flowers and Cakes",
    images: [flowers1, flowers2, flowers3, flowers4, flowers5],
    startDate: "2021",
    technologies: [{ icon: HTML5Icon, name: "HTML5" }, { icon: css3Icon, name: "CSS3" }, { icon: javaScriptIcon, name: "JavaScript" }, {icon: reactIcon, name: "ReactJS"}, {icon: nodeIcon, name: "NodeJS"}],
    description: "It is an e-commerce application for buying flowers and cakes. It has two types of users first admin who can view, add, delete and update a product also Admin can view the sales stats in form of bar graphs and the second is customers who can buy products and use functionality like Signup, login, forget password, searching and sorting, add to cart, buy, edit profile, etc.",
    url: "https://flowers-and-cakes.web.app/"
  },
  {
    title: "NFL Fantasy Gaming",
    images: [nfl1, nfl2, nfl3, nfl4],
    startDate: "2021",
    technologies: [{ icon: HTML5Icon, name: "HTML5" }, { icon: css3Icon, name: "CSS3" }, { icon: javaScriptIcon, name: "JavaScript" }, {icon: reactIcon, name: 'ReactJS'}],
    description: "A fantasy gaming front-end application that will show you the optimized player in your lineup for fantasy gaming based on your choice of players and constraints. In order to use the website please install this chrome entension 'Allow CORS: Access-Control-Allow-Origin' and turn it on.",
    url: "https://nfl-silk.vercel.app/"
  },
  {
    title: "Online IDE",
    images: [ide],
    startDate: "2022",
    technologies: [{ icon: HTML5Icon, name: "HTML5" }, { icon: css3Icon, name: "CSS3" }, { icon: javaScriptIcon, name: "JavaScript" }, {icon: reactIcon, name: "ReactJS"}],
    description: "This is an online IDE which lets you write and test your html, css and javascript code.",
    url: "https://codepen-clone-mu.vercel.app/"
  }
];

export const resumeBasicInfo = {
  section_name: {
    projects: "Projects",
    skills: "Skills",
    experience: "Experience"
  }
}

export const sharedSkills = [{
  icon: HTML5Icon,
  name: "HTML5"
}, {
  icon: css3Icon,
  name: "CSS3"
}, {
  icon: javaScriptIcon,
  name: "JavaScript"
},
{
  icon: reactIcon,
  name: "ReactJS"
},
{
  icon: nodeIcon,
  name: "NodeJS"
},
{
  icon: mongoDbIcon,
  name: "MongoDB"
},
{
  icon: cppIcon,
  name: "C++"
}
]

export const resumeExperience = [
  {
    technologies: [ 'HTML5', 'CSS3', 'React', 'JavaScript', 'Java'],
    mainTech: ['React'],
    years: 'June 2021 - present',
    title: 'Software Engineer',
    company: 'Persistent System'
  },
  {
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    mainTech: ['React'],
    years: 'September 2020 - November 2020',
    title: 'Intern',
    company: 'Curiosity Live'
  },
  {
    technologies: ['Android', 'Kotlin'],
    mainTech: ['Android'],
    years: 'June 2020 - August 2020',
    title: 'Intern',
    company: 'Stealth mode startup'
  }
]

export const sharedBasicInfo = {
  social: [
    {
      name: 'github',
      url: 'https://github.com/ankit854100',
      class: 'fa fa-brands fa-github'
    }, {
      name: 'linkedIn',
      url: 'https://www.linkedin.com/in/ankit-anand-087254177/',
      class: 'fa fa-brands fa-linkedin'
    }
  ],
  name: 'Ankit Anand'
}