import tekionLogo from "../assets/tekion-logo.png";
import iiitBhopalLogo from "../assets/iiitbhopalLogo.png";
import xavierRanchiLogo from "../assets/xavierRanchiLogo.png";
import splitLogo from '../assets/splitLogo.jpg'
import blinkitLogo from "../assets/blinkit-logo.png"

const infoData = {
  experience: [
    {
      id: 0,
      logoAlt: "Tekion",
      logoSrc: tekionLogo,
      name: "Tekion",
      Url: "https://tekion.com/",
      role: "Software Engineer (Frontend)",
      textColor: "#05deba",
      duration: "jan 2023 – july 2023",
      aboutRolePara1:
        " Part of the Analytics Team worked as a Frontend Developer. Worked on features of Internal App which involves visualisation tools such as Form Builder, Table Manager, and charts.",
      aboutRolePara2: 
        "Implemented a critical feature that aimed to enhance the application by introducing a easy option for creating Approval Requests for Restricted API Templates. In addition, I designed a seamless user experience by enabling users to select their desired environments and clusters before being directed to the Approval Request creation page.",
      aboutRolePara3:
        "Implemented a custom Hook for a crucial feature that involved polling Jenkins logs during a branch-triggered build-in-progress. This optimised the development workflow by providing real-time updates on the build status. Collaborated with cross-functional teams to ensure seamless integration of visualisation tools features into the app. Also ensuring the reliability and robustness of the implemented features, I diligently performed unit testing using JEST, a powerful testing framework. By creating test cases and writing assertions, I verified the functionality of the specific features I worked on, ensuring they met the required specifications and behaved as expected.",  
        technologies: "React.js, Redux, SASS, Jest, GIT",
    },
    {
      id: 1,
      logoAlt: "Tekion",
      logoSrc: iiitBhopalLogo,
      name: "IIIT-Bhopal",
      Url: "https://iiitbhopal.ac.in/#!/",
      role: "Training and Placement Cell, Representative",
      textColor: "#05deba",
      duration: "oct 2021 – May 2023",
      aboutRolePara1:
        "Team Mentor: Managing T&P Team and mentored the upcoming Team.",
      aboutRolePara2: 
        "Drive Coordinator: Coordinated among 50+ on campus companies drive",
      aboutRolePara3:
        "Social Media Manager: Handling Official Linkedin page of Training and Placement Cell, IIIT-Bhopal.",  
        technologies: "",
    },
  ],
  education: [
    {
      id: 1,
      logoAlt: "IIIT-Bhopal",
      logoSrc: iiitBhopalLogo,
      name: "IIIT-Bhopal",
      Url: "https://iiitbhopal.ac.in/#!/",
      role: "Bachelor of Technology",
      textColor: "#d3080b",
      duration: "August 2019 – July 2023",
      aboutRolePara1: "B.Tech. in Information Technology – 8.07 CGPA",
    },
    {
      id: 2,
      logoAlt: "ST.Xavier's Ranchi",
      logoSrc: xavierRanchiLogo,
      name: "St.Xavier's Ranchi",
      Url: "https://www.sxcran.org/",
      role: "Intermediate of Science",
      textColor: "#d3080b",
      duration: "July 2016 – July 2018",
      aboutRolePara1: "I.Sc. (Maths, Physics, Chemistry) – 81 %",
    },
  ],
  projects: [
    {
      id: 1,
      logoAlt: "SplitWise",
      logoSrc: splitLogo,
      name: "Split-Wise",
      Url: "https://splitwise-itskarya.netlify.app/",
      technologies: "React.js, Redux, Netlify",
      about1:
        "Intuitive Expense Management: The application features an easy-to-use interface that allows users to add expenses and split them among friends. It supports both equal and percentage-based splitting, ensuring a seamless expense management experience.",
      about2:
        "Flexible Category System and Analytics: Users can choose from predefined categories or create new ones, making it easy to categorize expenses. The application provides a comprehensive expense summary, displaying amounts owed to and by the user. Additionally, users can analyze their expenses using filters like date range and category selection, gaining valuable insights into their spending habits.",
    },
    {
      id: 2,
      logoAlt: "BlinkIT",
      logoSrc: blinkitLogo,
      name: "BlinkIT",
      Url: "https://master--blinkit-sample.netlify.app/",
      technologies: "React.js, Redux, Netlify",
      about1:
        "User-friendly grocery shopping app, Blinkit. Seamless selection of grocery items and quantity customization. Convenient cart functionality for adding selected items",
    },
  ],
  skills: [
    {
      id: 1,
      title: "Languages",
      value: ["HTML", "CSS", "JavaScript", "c++", "ES6"],
    },
    {
      id: 2,
      title: "Frameworks",
      value: [
        "Bootstrap",
        "React.js",
        "Redux",  
        "Jest", 
      ],
    },
    {
      id: 3,
      title: "Development & Design Tools",
      value: ["Git/GitHub", "VS Code", "Chrome Devtools"],
    },
  ],
};

export default infoData;
