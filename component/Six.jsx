import React from 'react'
import styles from '../styles/Six.module.css'
import Image from 'next/image'

const Six = () => {
    return (
        <div className={styles.container}>
            <div className={styles.lion4}>
                <Image src="/img/lion4.png" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.rightcard}>
                <div className={styles.text}>Today Do!</div>
                <div className={styles.text1}>- Healing ToDoList -</div>
                <div className={styles.text2}>從今天開始使用</div>
            </div>
            <div className={styles.app}>
                <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.google}>
                <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt='' layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default Six
