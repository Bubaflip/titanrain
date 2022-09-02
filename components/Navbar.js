import styles from '../styles/Navbar.module.css'
import circle from '../public/WhiteCircle.png'
import Image from 'next/image'

const Navbar = () => {
    return (<>
        <div className={styles.nav}>
            <div className={styles.container}>
            <Image src={circle} height={20} width={20}/>
            <Image src={circle} height={20} width={20}/>
            <Image src={circle} height={20} width={20}/>
            
            </div>
            <h3>titan rain</h3>
        </div>
    </>
    )
}

export default Navbar;