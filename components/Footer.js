import styles from '../styles/Footer.module.css'
import circle from '../public/TRlogo_fullcard.png'
import Image from 'next/image'
import trlogo from '../public/tranim2.webm'

const Navbar = () => {
    return (<>
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>martin.m@titanrain.xyz</p>
                {/* <video className={styles.videoFooter} autoPlay muted loop controls=''>
                    <source src={trlogo} type="video/webm" />
                </video> */}
                <Image src={circle} height={106} width={67.33} />
                <p>martin.b@titanrain.xyz</p>
            </div>
        </div>
    </>
    )
}

export default Navbar;