import styles from '../styles/Footer.module.css'
import circle from '../public/TRlogo_halfcard.png'
import Image from 'next/image'

const Navbar = () => {
    return (<>
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>martin.m@titanrain.xyz</p>
                <p>martin.b@titanrain.xyz</p>
            </div>
        </div>
    </>
    )
}

export default Navbar;