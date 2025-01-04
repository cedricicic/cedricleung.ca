import github from "../../assets/images/github.png"
import photo from "../../assets/images/photos.png"
import mail from "../../assets/images/mail.png"
import linkedin from "../../assets/images/linkedin.png"

function Dock(){
    return(
        <div className = "dock">
            <img className = "dock-icon" src = {github} alt = "github icon"/>
            <img className = "dock-icon" src = {photo} alt = "photo icon"/>
            <img className = "dock-icon" src = {mail} alt = "mail icon"/>
            <img className = "dock-icon" src = {linkedin} alt = "linkedin icon"/>
        </div>)
}

export default Dock