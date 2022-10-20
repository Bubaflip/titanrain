import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import celogo from '../public/celmates_logo.gif'
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

            <h1>Building tomorrow's internet<br></br>One dream at a time.</h1>
          </div>
        </div>

        {/* infos 1 */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Adventurers of the Cyber-Space</h1>
            <h3>We are a digital content studio specialising in Game Development and Blockchain. 
              <br></br>
              Our tech stack extends from Unity to front-end to Smart-Contracts development and deployment.
              <br></br>
              We wrap images, sound and logic into meaningful adventures. </h3>
          </div>
        </div>

        {/* infos 2 */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Hypergamification</h1>
            <h3>Games are everything. Our extensive knowledge of game loops and user experience allows us to craft
              unique experiences driving fun and engagement.
            </h3>
          </div>
        </div>

        {/* projects */}

        <div className={styles.section}>
          <div className={styles.subSectionCelmates}>
            <h1>Projects</h1>
            <div className={styles.projectCardContainer}>

              <div className={styles.projectCard}>
                <div className={styles.projectCardText}>
                  <h2>Celmates</h2>
                </div>
                <div className={styles.bigImage}>
                  <Image src={celogo} height={400} width={400}></Image>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* contact */}

        <div className={styles.section}>
          <div className={styles.subSection}>
            <h1>Contact</h1>
            <p>martin.m@titanrain.xyz</p>
            <p>martin.b@titanrain.xyz</p>
          </div>
        </div>
    </div>
  )
}
