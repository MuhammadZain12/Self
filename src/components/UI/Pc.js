import React from "react";
import styles from "./Pc.module.css";

function Pc(props) {
  return <p className={`${styles.pc} ${props.className}`}>{props.children}</p>;
}

export default Pc;
