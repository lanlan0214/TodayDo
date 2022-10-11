import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const [open , setOpen] = useState(false)


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.img}>
                    <Image src="/img/Subtract.png" alt='' layout='fill' objectFit='cover' />
                </div>
                <Link href="/" >TODAY DO!</Link>
            </div>
            <div className={styles.right}>
                <a href="#two">
                    <div className={styles.text1} >功能簡介</div>
                </a>
                <div className={styles.text1}>聯繫我們</div>
                <div className={styles.text1}>
                    幫助中心
                    <div className={styles.discord}>
                        <Image src="/img/Discord.png" alt='' layout='fill' objectFit='cover' />
                    </div>
                </div>
                <div className={styles.appleicon}>
                    <Image src="/img/app store.png" alt='' layout='fill' objectFit='cover' />
                </div>
                <div className={styles.applestroe}>
                    <Image src="/img/google play.png" alt='' layout='fill' objectFit='cover' />
                </div>
            </div>
            <div className={styles.hamburger} onClick={() => setOpen(!open)} >
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <ul onClick={()=>setOpen(false)} className={styles.memu} style={{right : open ? "0px" : "-60vw"}}>
                <a className={styles.memutext1} href="#two">功能簡介</a>
                <div className={styles.memutext1}>聯繫我們</div>
                <div className={styles.memutext1}>
                    幫助中心
                </div>
                <div className={styles.memuappleicon}>
                    <Image src="/img/app store.png" alt='' layout='fill' objectFit='cover' />
                </div>
                <div className={styles.memuapplestroe}>
                    <Image src="/img/google play.png" alt='' layout='fill' objectFit='cover' />
                </div>
            </ul>
        </div>
    )
}

export default Navbar
