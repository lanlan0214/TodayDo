import React from 'react'
import styles from '../styles/Four.module.css'
import Image from 'next/image'

const Four = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.text}>優先級排序<span className={styles.text1}>功能,                  一眼辨識輕重緩急</span>
                </div>
            </div>
            <div className={styles.Group878}>
                <Image src="/img/Group 878.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group11}>
                <Image src="/img/Group 878.svg" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.新建任務}>
                <Image src="/img/新建任務.png" alt='' layout='fill' objectFit='fill' />
            </div>
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

export default Four
