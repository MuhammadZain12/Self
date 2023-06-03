import React from 'react'
import styles from './CoverBar.module.css'

function CoverBar(props){
  return(
  <div className={props.className ? `${props.className} ${styles.coverbar}`:`${styles.coverbar}`}>

  </div>)
}

export default CoverBar