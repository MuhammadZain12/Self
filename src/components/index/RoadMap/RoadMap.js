import React from "react";
import styles from "./RoadMap.module.css";
import Pc from "../../UI/Pc";
import Box from "../../UI/Box";
import image1 from "../../../images/roadMap1.png";
import image2 from "../../../images/roadMap2.png";
import image3 from "../../../images/roadMap3.png";

function RoadMap(props) {
  return (
    <div className={styles.roadMap}>
      <h1>
        Your SELF <Pc>&nbsp;Roadmap&nbsp;</Pc> to Staking
      </h1>
      <div className={styles.firstStep}>
        <Box type="left">
          <h3>Acquire SELF Tokens:</h3>
          <p>
            tart by acquiring SELF tokens on any participating exchange.
            Remember, these tokens are your keys to a myriad of opportunities.
          </p>
        </Box>
        <img src={image1} />
      </div>
      <div className={styles.firstStep}>
        <img src={image2} />
        <Box type="right">
          <h3>Stake your SELF Tokens:</h3>
          <p>
            Visit the staking section on our platform, select the amount of SELF
            tokens you wish to stake, and click on 'Stake Now.' Our intuitive
            user interface makes staking a seamless process.
          </p>
        </Box>
      </div>
      <div className={styles.firstStep}>
        <Box type="left">
          <h3>Earn Rewards:</h3>
          <p>
            Once your tokens are staked, sit back, and watch your digital wealth
            grow. You will start earning rewards in the form of new SELF tokens.
          </p>
        </Box>
        <img src={image3} />
      </div>
    </div>
  );
}

export default RoadMap;
