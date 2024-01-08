import styles from'./Header.module.css'

function Header () {
    return(
        <header className={styles.header}>
            <img className={styles.logo_header} src='https://cdn-icons-png.flaticon.com/512/187/187902.png'/>
        </header>
    )
}

export default Header