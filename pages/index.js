import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import trlogo from '../public/tr_test.gif'
import HALO from 'vanta/dist/vanta.net.min.js'
import circle from '../public/BlackCircle.png'
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
      

      <div className={styles.blackCircle}>
      <Image src={trlogo} width={200} height={200}></Image>
      <p>web3 adventures. <br></br>game development.</p>
      </div>
      

    </div>
  )
}
