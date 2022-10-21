import React from 'react'
import styles from '../styles/Four1.module.css'
import Image from 'next/image'

const Four1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.lion2}>
                <Image src="/img/lion2.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.text2}>不費力新增管理<span className={styles.org}>重複事件</span> &        迅速<span className={styles.org}>複製待辦</span></div>
            <div className={styles.text3}>一秒計畫妥當！</div>
            <div className={styles.Group882}>
                <Image src="/img/Group 882.png" alt='' layout='fill' objectFit='fill' />
            </div>
        </div>
    )
}

export default Four1
