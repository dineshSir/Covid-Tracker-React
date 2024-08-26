import React from "react";
import Styles from "./Heading.module.css";
import coronaImage from "../../covid-19.png";
function Heading() {
  return (
    <>
      <div className={Styles.heading}>
        <img src={coronaImage} alt="CORONA"></img>
      </div>
    </>
  );
} 

export default Heading;
