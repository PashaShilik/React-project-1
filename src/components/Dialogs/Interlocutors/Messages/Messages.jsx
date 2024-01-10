import styles from './Messages.module.css'
import avatar from '../../../../Images/Common/Avatar/avatar_1.png'




function Messages () {
    return (
        <div className={styles.message_user_container}>
            <div className={styles.avatar_and_name_container}>
                <img src={avatar}/>
                <div className={styles.name_and_text_container}>
                    <p className={styles.name_user}>Паша Шилик</p>
                    <p className={styles.message_user_text}>Зайди в переписку</p>
                </div>
            </div>
            <div className={styles.time_message_container}>
                <p className={styles.time_message}>20:30</p>
                <p className={styles.number_of_messages}>1</p>
            </div>
        </div>
    )
}

export default Messages