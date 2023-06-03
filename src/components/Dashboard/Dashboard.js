import React from "react";
import Pc from "../UI/Pc";
import styles from "./Dashboard.module.css";
import Button from "../UI/Button";
import TransBox from "../UI/TransBox";

function Dashboard(props) {
  return (
    <div className={styles.dashboard}>
      <h1>
        SELF <Pc className={styles.pc}>Staking</Pc> Dashboard
      </h1>
      <div className={styles.type}>
        <h3>Choose Staking Type : </h3>
        <div>
          <Button className={`${styles.lglightbtn} ${styles.typebtns}`}>
            Public
          </Button>
          <Button className={`${styles.darkbtn} ${styles.typebtns}`}>
            Waitlist
          </Button>
        </div>
      </div>
      <TransBox>HIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHI</TransBox>
    </div>
  );
}

export default Dashboard;
