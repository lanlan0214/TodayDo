import React from 'react'
import styles from '../styles/Two.module.css'
import Image from 'next/image'

const Two = () => {
  return (
    <div className={styles.container} id="two">
      <div className={styles.text1}>今日事今日畢！</div>
      <div className={styles.text2}>簡潔畫面+完整時間軸，</div>
      <div className={styles.text3}>幫助你安排每天必須在特定時段</div>
      <div className={styles.text4}>完成的目標！</div>
      <div className={styles.Group875}> 
        <Image src="/img/Group 875.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group874}>
        <Image src="/img/Group 874.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Vector36}>
        <Image src="/img/Vector 36.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Ellipse47}>
        <Image src="/img/Ellipse 47.png" alt='' layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Two
