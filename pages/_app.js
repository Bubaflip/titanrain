import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import { useState } from 'react';
import Popup from '../components/Popup';
import { Howl } from 'howler';

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
      return '/Stone.mp3';
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


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <div>
        {
          entered ? <Component {...pageProps} /> : null
        }
        <Popup show={!entered}>
          <div className='wrapper'>
            <div>
                <img
                  className='enterImage'
                  src='./enterImage.jpeg'
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
