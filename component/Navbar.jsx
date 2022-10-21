import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.img}>
                    <Image src="/img/Subtract.png" alt='' layout='fill' objectFit='fill' />
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
                        <Image src="/img/Discord.png" alt='' layout='fill' objectFit='fill' />
                    </div>
                </div>
                <div className={styles.appleicon}>
                    <Image src="/img/app store.png" alt='' layout='fill' objectFit='fill' />
                </div>
                <div className={styles.applestroe}>
                    <Image src="/img/google play.png" alt='' layout='fill' objectFit='fill' />
                </div>
            </div>
            <div className={styles.se}>
                <div className={styles.seimg}>
                    <Image src="/img/Subtract.png" alt='' layout='fill' objectFit='fill' />
                </div>
                <Link href="/" >TODAY DO!</Link>
            </div>

            <div className={styles.hamburger} onClick={() => setOpen(!open)} >
                <div className={styles.line} style={{ rotate: open ? '45deg' : '0deg', transform: open ? 'translateY(12px)' : '' }} />
                <div className={styles.line} style={{ opacity: open ? '0' : '1' }} />
                <div className={styles.line} style={{ rotate: open ? '-45deg' : '0deg', transform: open ? 'translateY(-12px)' : '' }} />
            </div>
            <ul onClick={() => setOpen(false)} className={styles.memu} style={{ right: open ? "0px" : "-100vw" }}>
                <a className={styles.memutext1} href="#two">功能簡介</a>
                <div className={styles.memutext1}>聯繫我們</div>
                <div className={styles.memutext1}>
                    幫助中心
                </div>
                <div className={styles.memudown}>Download:</div>
                <div className={styles.memutable}>
                    <div className={styles.memuappleicon}>
                        <Image src="/img/app store.png" alt='' layout='fill' objectFit='cover' />
                    </div>
                    <div className={styles.memuapplestroe}>
                        <Image src="/img/google play.png" alt='' layout='fill' objectFit='cover' />
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
