import Head from 'next/head'
import Image from 'next/image'
import Five from '../component/Five'
import Footer from '../component/Footer'
import Four from '../component/Four'
import Navbar from '../component/Navbar'
import One from '../component/One'
import Six from '../component/Six'
import Three from '../component/Three'
import Two from '../component/Two'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Today Do!</title>
        <meta name="description" content="Today Do! by create next app" />
      </Head>
      <Navbar />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Footer />
    </div>
  )
}
