import React, { useState } from 'react'
import styles from '../styles/Three.module.css'
import Image from 'next/image'



const Three = () => {

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.text1} >
                    <div className={styles.cardtext1}>Today Do!</div>
                    <div className={styles.cardtext12}>利用 App 迅速安排待辦事項，
                        開啟每個有朝氣的日子！</div>
                    <div className={styles.TodayDo}>
                        <Image src="/img/Today Do.png" alt='' layout='fill' objectFit='fill' />
                    </div>
                </div>
                <div className={styles.text2} >
                    <div className={styles.cardtext1}>Memo</div>
                    <div className={styles.cardtext12}>每天想做的零碎小事項，
                        就讓 Memo 幫你記錄。</div>
                    <div className={styles.Memo}>
                        <Image src="/img/Memo.png" alt='' layout='fill' objectFit='fill' />
                    </div>
                </div>
            </div>
            <div className={styles.Group51}>
                <Image src="/img/Group 51.png" alt='' layout='fill' objectFit='fill' />
            </div>
        </div>
    )
}



export default Three
