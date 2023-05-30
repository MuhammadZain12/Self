import React from "react";
import styles from "./Stake.module.css";
import foreground1 from "../../../images/foreground1.png";
import Pc from "../../UI/Pc";
import Button from "../../UI/Button";

function Stake(props) {
  return (
    <>
    <div className={styles.stake}>
      <div className={styles.textContent}>
        <div className={styles.heading}>
          <div className={styles.headingBar}></div>
          <div className={styles.headingText}>
            BOOST YOUR SELF <Pc>STAKE NOW!</Pc>
          </div>
        </div>
        <div className={styles.expText}>Unlock a universe of possibilities in the SELF ecosystem with a simple act - staking your SELF tokens! Revel in a spectrum of unique perks, earn delightful rewards and shape your digital journey. Unleash the true essence of your SELF. Embark on your staking adventure today!</div>
        <Button>Stake Now</Button>
      </div>
      <img className={styles.image} src={foreground1} />
    </div>
    </>
  );
}

export default Stake;
