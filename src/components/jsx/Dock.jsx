import React from 'react'
import iconsData from "../js/icons.js"
import Icons from "./Icons.jsx"

const iconElement = iconsData.map((icon) => {
  return <Icons key={icon.id} name={icon.name} link={icon.link} src={icon.src} />;
});

function Dock() {
  return <div className="dock">{iconElement}</div>;
}

export default Dock;