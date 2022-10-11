import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Vector38}>
                <Image src="/img/Vector 38.png" alt='' layout='fill' />
            </div>
            {/* <div>
                <div className={styles.text}>隱私權政策</div>
                <div className={styles.Rectangle325}>
                    <Image src="/img/Rectangle 325.png" alt='' layout='fill' objectFit='cover' />
                </div>
            </div> */}

            <div className={styles.card}>
                <div className={styles.text1}>隱私權政策</div>
                <div className={styles.text2}>©2022 FreeCo Limited All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer
