import React from "react";
import Pc from "../UI/Pc";
import styles from "./DashboardPanel.module.css";
import Button from "../UI/Button";
import StakingForm from "../UI/StakingForm";
import claimimg from '../../images/claim.png'
function DashboardPanel(props) {
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
      <div className={styles.stakingInfo}>
        <div className={`${styles.transBox} ${styles.stakingSelect}`}>
          <h3>My SELF staking</h3>

          <div className={`${styles.rowDisplay}`}>
            <StakingForm className={styles.stakingFormDiv} stake={true}>
              <h4>Available In Wallet</h4>
              <div className={styles.stakingMax}>
                <p>0</p>
                <h5>Max</h5>
              </div>
            </StakingForm>

            <StakingForm className={styles.stakingFormDiv} btnClass={styles.darkbtnsmall} stake={false}>
              <h4>Total Stacked</h4>
              <div className={styles.stakingMax}>
                <p>0</p>
                <h5>Max</h5>
              </div>
            </StakingForm>
          </div>
          <div className={styles.rewards}>
            <p> Pending Rewards : 0</p>
            <Button className={styles.darkbtnsmall}>
              <img src={claimimg}/>
              <p>Claim</p>
            </Button>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.topData}>
            <div className={`${styles.transBox} ${styles.totalStaking}`}>
              <h3>Total Staking</h3>
              <h2>
                <Pc className={styles.pc}>
                  {10000000} SELF
                </Pc>
              </h2>
            </div>
            <div className={styles.colDiv}>
              <h3>Estimated Reward</h3>
              <div>
              <h2>{110.218}%</h2>
              <p>ARP</p>
              </div>
            </div>
          </div>
          <div className={`${styles.lowerData}`}>
            <div className={`${styles.transBox} ${styles.lowerDataTrans}`}>
            <h2>SELF Stats</h2>
            <div className={styles.dataWrapper}>
              <div className={styles.indwrapper}><p className={styles.wrapperHeading}>SELF Price</p><p className={styles.wrapperStats}>${0.03}</p></div>
              <div className={styles.indwrapper}><p className={styles.wrapperHeading}>Daily Rewards</p><p className={styles.wrapperStats}>{0}</p></div>
              <div className={styles.indwrapper}><p className={styles.wrapperHeading}>Total Supply</p><p className={styles.wrapperStats}>{0}</p></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
