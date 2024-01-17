import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/PopupPanel.module.css';
import Image from 'next/image';

const PopupPanel = ({ show, onClose }) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (show && ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show, onClose]);

    const ref = React.createRef();

    if (!show) {
        return null;
    }
    return (
        <div className={styles.popupPanel} ref={ref}>
            <div className={styles.infoText}>
                <h2>Who are we?</h2>
                <p>We are a digital content studio specialising in Game Development and Blockchain.
                    <br></br>
                    <br></br>
                    Our tech stack extends from full-stack development to Unity Game dev or Smart-Contracts development and deployment.
                    <br></br>
                    <br></br>
                    We wrap images, sound and logic into meaningful adventures.
                </p>

                <br></br>
                <h2>Hypergamification</h2>
                <p>
                    Games are everything.
                    <br></br>
                    <br></br>
                    Our extensive knowledge of game loops and user experience allows us to craft
                    unique experiences driving fun and engagement.
                </p>
            </div>
            {/* <div className={styles.links}>
                <Link href="/link1">Link 1</Link>
                <Link href="/link2">Link 2</Link>
                <Link href="/link3">Link 3</Link>
            </div> */}
            <div className={styles.logoCardImage}>
                <Image
                    src={'/TRlogo_fullcard.png'}
                    height={636}
                    width={404}
                />
            </div>
        </div>
    );
};

export default PopupPanel;



{/* infos 1 */ }
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

{/* infos 2 */ }

{/* <div className={styles.section}>
        <div className={styles.subSection}>
          <h1 className={styles.sectionTitles}>Hypergamification</h1>
          <p>Games are everything. Our extensive knowledge of game loops and user experience allows us to craft
            unique experiences driving fun and engagement.
          </p>
        </div>
      </div> */}

{/* projects */ }

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

{/* contact */ }
{/* <div className={styles.section}>
        <div className={styles.subSection}>
          <p>martin.m@titanrain.xyz</p>
          <p>martin.b@titanrain.xyz</p>
        </div>
      </div> */}


