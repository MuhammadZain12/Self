import React from "react";
import styles from "./ComingSoon.module.css";
import image2 from "../../../images/coming2.png";
import Pc from "../../UI/Pc";
import Button from "../../UI/Button";

function ComingSoon(props) {
  return (
    <div className={styles.comingSoon}>
      
      <div className={styles.textContent}>
        <h1>
          <Pc>COMING SOON: &nbsp;</Pc>SELF Liquidity Pool{" "}
        </h1>
        <img src={image2} />
        <div className={styles.expText}>
          <h3>🚀 Exciting News! 🚀 </h3>
          <p>
            Get ready to take part in the future of SELF token trading with our
            upcoming liquidity pool! 🌊💰
          </p>
          <h3>🔒 Secure your spot:</h3>
          <p>
            Be among the first to join the SELF token liquidity pool, where you
            can contribute to its liquidity and enjoy the benefits of
            decentralized trading.
          </p>
          <h3>📈 Boost your investment: </h3>
          <p>
            By adding liquidity, you'll benefit from increased trading
            efficiency and earn a portion of transaction fees. Don't miss out on
            potential incentives!
          </p>
          <h3>🌐 Stay informed: </h3>
          <p>
            Subscribe now to receive exclusive updates and be the first to know
            when the SELF token liquidity pool goes live. Don't miss this
            opportunity to enhance your DeFi experience!
          </p>
          <div className={styles.subForm}>
            <h2>Subscribe And get Latest news update about Liquidity Pool</h2>
            <div className={styles.input}>
              <input type="text" value={'Enter Your Email Address'}/>
              <Button className={styles.btn}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
