import styles from './StatusUser.module.css'
import avatar from '../../../../Images/Common/Avatar/avatar_1.png'

function StatusUser () {
    return(
        <div className={styles.status_user_container}>
            <img src={avatar}/>
            <div className={styles.name_and_status_container}>
                <p className={styles.name_user}>Паша Шилик</p>
                <p className={styles.status_user}>Online</p>
            </div>
        </div>
    )
}

export default StatusUser