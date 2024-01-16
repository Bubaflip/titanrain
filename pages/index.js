import Image from 'next/image'
import styles from '../styles/Home.module.css'
import trlogo from '../public/tranim2.webm'
import HALO from 'vanta/dist/vanta.net.min.js'
import * as THREE from "three"
import { useState, useRef, useEffect } from 'react'
import { global } from 'styled-jsx/css'

export default function Home() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  // text effect
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const originalTexts = ["BUILDING TOMORROW'S INTERNET.", "ONE DREAM AT A TIME."];
  const [text, setText] = useState(originalTexts);

  // vantaEffect
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

  // text effect
  useEffect(() => {
    let iterations = [0, 0];
    let interval;

    interval = setInterval(() => {
      setText(oldTexts => {
        return oldTexts.map((oldText, i) => {
          return oldText.split("")
            .map((letter, index) => {
              if (index < iterations[i]) {
                return originalTexts[i][index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        });
      });

      for (let i = 0; i < originalTexts.length; i++) {
        if (iterations[i] < originalTexts[i].length) {
          iterations[i] += 1 / 3;
          break;
        }
      }

      if (iterations[0] >= originalTexts[0].length && iterations[1] >= originalTexts[1].length) {
        clearInterval(interval);
      }
    }, 10);

    // clean up function
    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.bg} ref={vantaRef}>
      </div>
      <div className={styles.topSection}>
        <div className={styles.topText}>
          <h1 className={styles.titleText}>
            <span className={styles.titleSpans}>{text[0]}</span>
            <br />
            <span className={styles.titleSpans}>{text[1]}</span>
          </h1>
        </div>
        {/* <video className={styles.videoInside} autoPlay muted loop controls=''>
          <source src={trlogo} type="video/webm" />
        </video> */}
      </div>

      {/* infos 1 */}

      {/* <div className={styles.section}>
        <div className={styles.subSection}>
          <h1 className={styles.sectionTitles}>Adventurers of the Cyber-Space</h1>
          <p>We are a digital content studio specialising in Game Development and Blockchain.
            <br></br>
            Our tech stack extends from Unity to front-end to Smart-Contracts development and deployment.
            <br></br>
            We wrap images, sound and logic into meaningful adventures. </p>
        </div>
      </div> */}

      {/* infos 2 */}

      {/* <div className={styles.section}>
        <div className={styles.subSection}>
          <h1 className={styles.sectionTitles}>Hypergamification</h1>
          <p>Games are everything. Our extensive knowledge of game loops and user experience allows us to craft
            unique experiences driving fun and engagement.
          </p>
        </div>
      </div> */}

      {/* projects */}

      {/* <div className={styles.section}>
        <div className={styles.subSection}>
          <h1 className={styles.sectionTitles}>Works</h1>
          <div className={styles.projectCard}>
            <div className={styles.projectCardText}>
              <h2>Cel Mates</h2>
            </div>
            <div className={styles.bigImage}>
              <Image src={celogo} height={300} width={300}></Image>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className={styles.projectCard}>
              <div className={styles.projectCardText}>
                <h2>Mojo</h2>
              </div>
              <div className={styles.bigImage}>
                <Image src={mojoLogo} height={300} width={300}></Image>
              </div>
            </div> */}

      {/* contact */}
      {/* <div className={styles.section}>
        <div className={styles.subSection}>
          <p>martin.m@titanrain.xyz</p>
          <p>martin.b@titanrain.xyz</p>
        </div>
      </div> */}
    </div>
  )
}
