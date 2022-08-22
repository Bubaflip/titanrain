import styles from '../styles/Popup.module.css'

const Popup = (props) =>{
    return(props.show) ? (
        <div className={styles.main}>
             <div className={styles.popupCard}>
                {props.children}
            </div>
        </div> ) : "";
}

export default Popup;