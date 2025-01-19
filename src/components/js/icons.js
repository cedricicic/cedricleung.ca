import github from "../../assets/images/github.png";
import mail from "../../assets/images/mail.png";
import linkedin from "../../assets/images/linkedin.png";
import resume from "../../assets/images/resume.png";
import resumePdf from "../../assets/pdf/Resume.pdf"
import about from "../../assets/images/about.png";
import WW4M from "../..//assets/images/WW4M-icon.png"
import Journal from "../..//assets/images/notes.png"


export default [
  {
    id: 1,
    name: "Resume",
    link: resumePdf,
    src: resume,
  },

  {
    id: 2,
    name: "Github",
    link: "https://github.com/cedricicic",
    src: github,
  },
  {
    id: 3,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/cedric-leung-38637029a/",
    src: linkedin,
  },
  {
    id: 4,
    name: "Contact me",
    link: "/contact",
    src: mail,
  },
  {
    id: 5,
    name: "About me",
    link: "/about",
    src: about,
  },
  {
    id: 6,
    name: "Journal",
    link: "/journals",
    src: Journal,
  },
  {
    id: 7,
    name: "WW4M",
    link: "https://waterloo-works-for-me.pages.dev/",
    src: WW4M,
  },
 
];
