import styles from './MyMessage.module.css'
import statusMessage from '../../../../../Images/Page_Dialogs/Chat.svg'


function MyMessage () {
    return(
        <div className={styles.my_message_container}>
            <div className={styles.message_content_container}>
                <p className={styles.message_content_text}>Мое первое сообщение</p>
                <div className={styles.time_and_status_message}>
                    <p className={styles.time_message}>23:01</p>
                    <img src={statusMessage}/>
                </div>
            </div>
        </div>
    )
}

export default MyMessage