import React from 'react'
import styles from '../styles/Test2.module.css'
import Image from 'next/image'

const Test2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src="/img/Vector 35.png" alt='' layout='fill' objectFit='fill' />
            </div>
        </div>
    )
}

export default Test2
