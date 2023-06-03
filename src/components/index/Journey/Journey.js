import React from "react";
import styles from "./Journey.module.css";
import foreground2 from "../../../images/foreground2.png";
import Pc from "../../UI/Pc";
import Button from '../../UI/Button'

function Journey(props) {
  return (
    <div className={styles.journey}>
      <img className={styles.foreground2} src={foreground2} />
      <div className={styles.textContent}>
        <div className={styles.heading}>
          Journey <Pc> &#160;Begins Here</Pc>
        </div>
        <div className={styles.expText}>
          Start your journey with SELF, enter the world of digital
          opportunities. Stake now and begin exploring. This isn't just an
          investment—it's an adventure. Stake now, and begin your exploration of
          the ever-evolving landscape of SELF.
        </div>
        <Button className={styles.btn}>Stake Now</Button>
      </div>
    </div>
  );
}

export default Journey;
