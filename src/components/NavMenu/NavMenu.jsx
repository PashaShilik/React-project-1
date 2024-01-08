import styles from './NavMenu.module.css'

function NavMenu () {
    return(
        <nav className={styles.main_nav_menu}>
            <ul className={styles.main_nav_menu_list}>
            <li className={styles.main_nav_menu_list_item}>
                <a className={styles.main_nav_menu_list_item_link}>Profile</a>
            </li>
            <li className={styles.main_nav_menu_list_item}>
                <a className={styles.main_nav_menu_list_item_link}>Messages</a>
            </li>
            <li className={styles.main_nav_menu_list_item}>
                <a className={styles.main_nav_menu_list_item_link}>News</a>
            </li>
            <li className={styles.main_nav_menu_list_item}>
                <a className={styles.main_nav_menu_list_item_link}>Music</a>
            </li>
            <li className={styles.main_nav_menu_list_item}>
                <a className={styles.main_nav_menu_list_item_link}>Settings</a>
            </li>
            </ul>
        </nav>
    )
}

export default NavMenu