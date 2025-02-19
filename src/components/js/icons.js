import github from "../../assets/images/github.png";
import mail from "../../assets/images/mail.jpeg";
import linkedin from "../../assets/images/linkedin.png";
import resume from "../../assets/images/resume.png";
import resumePdf from "../../assets/pdf/Resume.pdf"
import about from "../../assets/images/about.jpeg";
import WW4M from "../../assets/images/WW4M-icon.png"
import Prompt from "../../assets/images/promptection-icon.png"
import Journal from "../../assets/images/Notes.jpeg"
import Grailed from "../../assets/images/HolyGrailed.jpg"


export default [
  // {
  //   id: 1,
  //   name: "Resume",
  //   link: resumePdf,
  //   src: resume,
  // },

  // {
  //   id: 2,
  //   name: "Github",
  //   link: "https://github.com/cedricicic",
  //   src: github,
  // },
  // {
  //   id: 3,
  //   name: "Linkedin",
  //   link: "https://www.linkedin.com/in/cedric-leung-38637029a/",
  //   src: linkedin,
  // },

  {
    id: 1,
    name: "Journal",
    link: "/journals",
    src: Journal,
  },

  {
    id: 2,
    name: "Contact me",
    link: "/contact",
    src: mail,
  },
  {
    id: 3,
    name: "About me",
    link: "/about",
    src: about,
  },


  {
    id: 4,
    name: "Promptection",
    link: "/promptection",
    src: Prompt,
  },

  {
    id: 5,
    name: "Holy Grailed",
    link: "https://holy-grailed-static.pages.dev/#resultspage",
    src: Grailed,
  },
  {
    id: 6,
    name: "WW4M",
    link: "https://ww4m.pages.dev/",
    src: WW4M,
  },
];
