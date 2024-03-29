import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import Popup from '../components/Popup';
import { Howl } from 'howler';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import styles from '../styles/Home.module.css'
import trlogo from '../public/tranim2.webm'

function MyApp({ Component, pageProps }) {
  const [entered, setEntered] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const onVideoError = () => {
    setIsVideoLoaded(false);
  };

  const clickEnterWithSound = () => {
    setSoundOn(true)
    playMusic(0, false)
    setEntered(true)
  };

  const getAudioClip = (id) => {
    if (id == 0) {
      return '/yo.mp3';
    }
  };

  const playMusic = (srcId, loopSound) => {
    let newSound = new Howl({
      src: [getAudioClip(srcId)],
      html5: true,
      loop: loopSound,
    })
    newSound.play()
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Titan Rain</title>
      </Head>
      <Navbar />
      <div>
        {
          entered ? <Component {...pageProps} /> : <></>
        }
        <Popup show={!entered}>
          <div className='wrapper'>
            <div className={styles.enterImage}>
              <video
                className={styles.mainVideo}
                onClick={clickEnterWithSound}
                autoPlay
                muted
                loop
                controls=''
              >
                <source src={trlogo} type="video/webm" />
              </video>

              <img
                // src='./tr4_2_small.png'
                src='./tranim2.gif'
                onClick={clickEnterWithSound}
                width={250}
                alt='TR Logo'
              />
            </div>
            <div></div>
          </div>
        </Popup>
      </div>
      <Footer />
    </>
  )
}

export default MyApp