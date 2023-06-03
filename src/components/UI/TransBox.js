import React from "react";
import styles from './TransBox.module.css'

function TransBox(props){
  return(
  <div className={`${styles.transBox} ${props.className}`}>
    {props.children}
  </div>)
}

export default TransBox