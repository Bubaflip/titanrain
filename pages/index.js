import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import trlogo from '../public/tranim.webm'
import HALO from 'vanta/dist/vanta.net.min.js'
import celmateImg from '../public/tr4_2_small.png'
import * as THREE from "three"
import { useState, useRef, useEffect } from 'react'

export default function Home() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f82ff,
          backgroundColor: 0x0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect])


  return (
    <div className={styles.container}>
      <div className={styles.bg} ref={vantaRef}>
      </div>
        <div className={styles.topSection}>
          <div className={styles.topText}>

            <p>web3 adventures. <br></br>game development.</p>
          </div>
        </div>

        {/* infos 1 */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Pushing the boundaries of web3</h1>
            <p>asdfasdfasdfasdfasdfasdfasdf</p>
          </div>
        </div>

        {/* infos 2 */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Hypergamification</h1>
            <p>asdfasdfasdfasdfasdfasdfasdf</p>
          </div>
        </div>

        {/* projects */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Projects</h1>
            <div className={styles.projectCardContainer}>

              <div className={styles.projectCard}>
                <div className={styles.projectCardText}>
                  <h2>Celmates</h2>
                </div>
                <div className={styles.projectCardImage}>
                  <Image src={celmateImg} height={200} width={200}></Image>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* contact */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Contact</h1>
            <p>asdfasdfasdfasdfasdfasdfasdf</p>
          </div>
        </div>
    </div>
  )
}
