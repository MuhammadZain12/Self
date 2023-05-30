import React from "react";
import styles from "./Box.module.css";
import CoverBar from "./CoverBar";

function Box(props) {
  console.log(props.key)
  if (props.type === "left") {
    return (
      <div className={props.className ? `${styles.bigWrapper} ${props.className}`:styles.bigWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.box}>{props.children}</div>
        </div>
        <CoverBar className={styles.leftbar} />
      </div>
    );
  } else {
    return (
      <div className={props.className ? `${styles.bigWrapper} ${props.className}`:styles.bigWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.box}>{props.children}</div>
        </div>
        <CoverBar className={styles.rightbar} />
      </div>
    );
  }
}

export default Box;
