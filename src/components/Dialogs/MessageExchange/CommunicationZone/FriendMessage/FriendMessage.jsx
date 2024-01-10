import styles from './FriendMessage.module.css'
import statusMessage from '../../../../../Images/Page_Dialogs/Chat.svg'


function FriendMessage () {
    return(
        <div className={styles.friend_message_container}>
            <div className={styles.message_content_container}>
                <p className={styles.message_content_text}>Первое сообщение друга</p>
                <div className={styles.time_and_status_message}>
                    <p className={styles.time_message}>22:14</p>
                    <img src={statusMessage}/>
                </div>
            </div>
        </div>
    )
}

export default FriendMessage