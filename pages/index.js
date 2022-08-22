import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Titan Rain</title>
        <meta name="description" content="pour les zozos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
      className={styles.frontLogo}
      src='./tr_logo_temp.png'
      >
      </img>
    </div>
  )
}
