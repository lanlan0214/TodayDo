import React from 'react'
import styles from '../styles/One.module.css'
import Image from 'next/image'

const One = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src="/img/Vector 35.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group10}>
        <Image src="/img/Group 10.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group}>
        <Image src="/img/Group.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group8}>
        <Image src="/img/Group 8.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group6}>
        <Image src="/img/Group 6.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Group7}>
        <Image src="/img/Group 7.png" alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.white}>
        <div className={styles.left}>
          <div className={styles.ltext1}>簡潔又療癒的 TODAY DO!</div>
          <div className={styles.ltext2}>主功能畫面直覺簡潔，無需花費大量時間心力熟悉功能，第一秒使用就上手！</div>
        </div>
        <div className={styles.right}>
          <div className={styles.Group848}>
            <Image src="/img/Group 848.png" alt='' layout='fill' objectFit='cover' />
          </div><div className={styles.Group35}>
            <Image src="/img/Group 35.png" alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.text}>
          TODAY DO!
        </div>
        <div className={styles.textcard}>
          <div className={styles.text1}>Healing</div>
          <div className={styles.text1}>ToDoList</div>
        </div>
      </div>
      <div className={styles.text2}>幫你有效簡易管理</div>
      <div className={styles.text3}>每·日·計·畫</div>
    </div>
  )
}

export default One
