import React from "react";
import avatar from "../../assets/images/avatar.png";
import { useTypingEffect } from "../js/typing";

function Header() {
  const Intro = useTypingEffect("Hi! My name is Cedric.", 50);
  const Description = useTypingEffect(
    "A mathematics student fron the university of Waterloo.",
    20
  );

  return (
    <header>
      <img src={avatar} alt="Avatar" className="avatar" />
      <div className="text-container">
        <h1 ref={Intro}></h1>
        <p ref={Description}></p>
      </div>
    </header>
  );
}

export default Header;
