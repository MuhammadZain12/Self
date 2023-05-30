import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  console.log(props.children[0].key)
  return <div className={ props.className ? `${styles.buttonDiv} ${props.className}`:`${styles.buttonDiv}`}>{props.children}</div>;
}

export default Button;
