import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import Popup from '../components/Popup';
import { Howl } from 'howler';
import Navbar from '../components/Navbar.js'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  const [entered, setEntered] = useState(false)
  const [soundOn, setSoundOn] = useState(false)

  const clickEnterWithSound = () => {
    setSoundOn(true)
    playMusic(0, false)
    setEntered(true)
  }

  const getAudioClip = (id) => {
    if (id == 0) {
      return '/yo.mp3';
    }
  }

  const playMusic = (srcId, loopSound) => {
    let newSound = new Howl({
      src: [getAudioClip(srcId)],
      html5: true,
      loop: loopSound,
    })
    newSound.play()
  }

  const [loading, setLoading] = useState(false);

  useEffect (()=>{
    setLoading(true);
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return()=>{
      if(threeScript){
        threeScript.remove();
      }
    }
  },[]);

  useEffect (()=>{
    setLoading(true);
  }, []);

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head> */}
      <Navbar />
      <div>
        {
          entered ? <Component {...pageProps} /> : <></>
        }
        <Popup show={!entered}>
          <div className='wrapper'>
            <div className={styles.enterImage}>
                <img
                  src='./WhiteCircle.png'
                  onClick={clickEnterWithSound}
                  // le cana
                />
            </div>
            <div></div>
          </div>
        </Popup>
      </div>
    </>
  )
}

export default MyApp
