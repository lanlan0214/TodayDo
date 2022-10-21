import React from 'react'
import styles from '../styles/Six.module.css'
import Image from 'next/image'

const Six = () => {
    return (
        <div className={styles.container}>
            <div className={styles.lefcard}>
                <div className={styles.lion4}>
                    <Image src="/img/lion4.png" alt='' layout='fill' objectFit='contain' />
                </div>
            </div>
            <div className={styles.rightcard}>
                <div className={styles.text}>Today Do!</div>
                <div className={styles.text1}>- Healing ToDoList -</div>
                <div className={styles.text2}>從今天開始使用</div>
                <div className={styles.cardimg}>
                    <div className={styles.app}>
                        <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt='' width="200" height="100" objectFit='contain' />
                    </div>
                    <div className={styles.google}>
                        <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt='' width="200" height="100" objectFit='contain' />
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.newcard10241}>Today Do!</div>
                <div className={styles.newcard10242}>- Healing ToDoList -</div>
                <div className={styles.newcard10243}>從今天開始使用</div>
                <div className={styles.newcardapp}>
                    <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 2.png" alt='' width="460" height="132" objectFit='fill' />
                </div>
                <div className={styles.newcardgoogle}>
                    <Image src="/img/png-clipart-app-store-google-play-apple-apple-text-logo 1.png" alt='' width="460" height="132" objectFit='fill' />
                </div>
                <div className={styles.newcardlion4}>
                    <Image src="/img/lion4.png" alt='' layout='fill' objectFit='fill' />
                </div>
            </div>
        </div>
    )
}

export default Six
