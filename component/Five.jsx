import React from 'react'
import styles from '../styles/Five.module.css'
import Image from 'next/image'


const Five = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.text}>
                    五大核心功能！
                </div>
                <div className={styles.card1}>
                    <div className={styles.categoryL}>
                        <div className={styles.contentL1}>
                            當週事件快速檢視
                        </div>
                        <div className={styles.contentL2}>
                            檢視近期事件快速便利           一眼查看當週七天日期
                        </div>
                    </div>
                    <div className={styles.categoryR}>
                        <div className={styles.contentR1}>
                            自動整理未完事項
                        </div>
                        <div className={styles.contentR2}>
                            過期未完成事件自動順延          不再遺漏任何細小事項
                        </div>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.text2L}>
                        <div className={styles.contentL3}>
                            一鍵設定重複事件
                        </div>
                        <div className={styles.contentL4}>
                            定期必備必做事件                 一鍵設定輕鬆不費力
                        </div>
                    </div>
                    <div className={styles.text2R}>
                        <div className={styles.contentR3}>
                            完整日曆進階功能
                        </div>
                        <div className={styles.contentR4}>
                            點擊展開完整日曆                   一鍵搜尋特定日期
                        </div>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div className={styles.text3L}>
                        <div className={styles.contentL5}>
                            相同事件輕鬆複製
                        </div>
                        <div className={styles.contentL6}>
                            輕鬆「複製」不定期的相同待辦                                    不必再次打字編輯
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.lion3}>
                <Image src="/img/lion3.png" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.Vector37}>
                <Image src="/img/Vector 37.png" alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.Ellipse66}>
                <Image src="/img/Ellipse 66.png" alt='' layout='fill' objectFit='cover' />
            </div>
        </div>
    )
}

export default Five
