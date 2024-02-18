import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

import BlockFriends from './BlockFriends/BlockFriends'

function NavMenu (props) {

    return(
        <nav className={styles.main_nav_menu}>
            <ul className={styles.main_nav_menu_list}>
                <li className={styles.main_nav_menu_list_item}>
                    <Link to='/profile' className={styles.active_link}>Profile</Link>
                </li>
                <li className={styles.main_nav_menu_list_item}>
                    <Link to='/dialogs/:id' className={styles.main_nav_menu_list_item_link}>Messages</Link>
                </li>
                <li className={styles.main_nav_menu_list_item}>
                    <Link to='/News' className={styles.main_nav_menu_list_item_link}>News</Link>
                </li>
                <li className={styles.main_nav_menu_list_item}>
                    <Link to='/Music' className={styles.main_nav_menu_list_item_link}>Music</Link>
                </li>
                <li className={styles.main_nav_menu_list_item}>
                    <Link to='/Settings' className={styles.main_nav_menu_list_item_link}>Settings</Link>
                </li>
            </ul>

            <BlockFriends friendsData={props.friendsData}/>
        </nav>
    )
}

export default NavMenu