import React from 'react'
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import discordlogo from '../../images/discord.png'
import wallet from '../../images/wallet.png'
import Button from '../UI/Button'


function Header(props){
return(
  <div className={`${styles.header}`}>
    <div className={`${styles.logo}`}>
      <img src={logo}/>
      <h3>SELF</h3>
    </div>
    <div className={`${styles.btns}`}>
      <div className={styles.discordbtn}><img key='img' src={discordlogo}/><p>DISCORD</p></div>
      <Button><img src={wallet}/> <p>Connect</p></Button>
    </div>
  </div>
)
}


export default Header