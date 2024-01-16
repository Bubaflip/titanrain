import styles from '../styles/Navbar.module.css'
import circle from '../public/TRlogo_halfcard.png'
import Image from 'next/image'

const Navbar = () => {
    return (<>
        <div className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logoCard}>
                    <Image src={circle} height={50} width={35} />
                </div>
                <h3>titan rain</h3>
            </div>
        </div>
    </>
    )
}

export default Navbar;