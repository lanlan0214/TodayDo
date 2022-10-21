import React from 'react'
import styles from '../styles/Test.module.css'
import Image from 'next/image'

const Test = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src="/img/Vector 35.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.background1}>
                <Image src="/img/Vector 35.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group10}>
                <Image src="/img/Group 10.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group}>
                <Image src="/img/Group.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group8}>
                <Image src="/img/Group 8.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group6}>
                <Image src="/img/Group 6.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.Group7}>
                <Image src="/img/Group 7.png" alt='' layout='fill' objectFit='fill' />
            </div>
            <div className={styles.container2}>
                <div className={styles.card1}>
                    <div className={styles.card11}>TODAY DO!</div>
                    <div className={styles.card12}>
                        <div className={styles.card121}>Healing  </div>
                        <div className={styles.card122}>ToDoList</div>
                    </div>
                </div>
                <div className={styles.card2}>幫你有效簡易管理</div>
                <div className={styles.card3}>每·日·計·畫</div>
                <div className={styles.white}>
                    <div className={styles.whitel}>
                        <div className={styles.whitesmall}># Healing ToDoList</div>
                        <div className={styles.whitel1}>簡潔又療癒的 TODAY DO! </div>
                        <div className={styles.whitel2}>主功能畫面直覺簡潔,無需花費大量時間心力熟悉功能，第一秒使用就上手！</div>
                    </div>
                    <div className={styles.whiter}>
                        <div className={styles.Group848}>
                            <Image src="/img/Group 848.png" alt='' width="80%" height="80%" objectFit='fill' />
                        </div>
                        <div className={styles.Group35} >
                            <Image src="/img/Group 35.png" alt='' width="80%" height="80%" objectFit='fill' />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Test
