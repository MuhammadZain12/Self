import React from "react";
import styles from "./StakingForm.module.css";
import Button from "./Button";

function StakingForm(props) {
  return (
    <div className={`${styles.stakingForm} ${props.className}`}>
      {props.children}
      <div className={styles.valueSelector}>
        <div className={styles.valChanger}>-</div>
        <input type="number" value={0}/>
        <div className={styles.valChanger}>+</div>
      </div>
      <Button className={props.btnClass ? `${styles.btn} ${props.btnClass}`:`${styles.btn}`}>{props.stake ? "Stake":"Unstake"}</Button>
    </div>
  );
}

export default StakingForm;
