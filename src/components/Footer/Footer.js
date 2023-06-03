import React from "react";
import styles from './Footer.module.css'

function Footer(props){
  return(
    <div className={styles.footer}>
      <div className={styles.copyright}>
      Copyright@2023 | Self co. limited
      </div>
      <div className={styles.terms}>
        <p>Terms & Agreements</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer