import github from "../../assets/images/github.png";
import photo from "../../assets/images/photos.png";
import mail from "../../assets/images/mail.png";
import linkedin from "../../assets/images/linkedin.png";
import resume from "../../assets/images/resume.png";
import resumePdf from "../../assets/pdf/resume.pdf"
import { Link } from 'react-router-dom';

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
    name: "Photos",
    link: "new html",
    src: photo,
  },
  {
    id: 4,
    name: "Contact me",
    link: "/contact",
    src: mail,
  },
  {
    id: 5,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/cedric-leung-38637029a/",
    src: linkedin,
  },
];
