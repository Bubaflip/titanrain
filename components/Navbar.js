import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import circle from '../public/TRlogo_halfcard.png'
import Image from 'next/image'
import PopupPanel from './PopupPanel'

const Navbar = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (<>
        <div className={styles.nav}>
            <div className={styles.container}>
                <div
                    className={styles.logoCard}
                    onClick={togglePopup}
                >
                    <Image
                        src={circle}
                        height={50}
                        width={35}
                    />
                </div>
                <h3>titan rain</h3>
            </div>
        </div>
        <PopupPanel
            show={showPopup}
            onClose={togglePopup}
        />
    </>
    )
}

export default Navbar;