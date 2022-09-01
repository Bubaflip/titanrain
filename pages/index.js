import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import trlogo from '../public/tr_test.gif'
import HALO from 'vanta/dist/vanta.waves.min'
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
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
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



      <Image src={trlogo} width={150} height={150}></Image>

    </div>
  )
}
