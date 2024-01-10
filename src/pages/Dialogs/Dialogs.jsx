import styles from './Dialogs.module.css'
import Interlocutors from '../../components/Dialogs/Interlocutors/Interlocutors'
import MessageExchange from '../../components/Dialogs/MessageExchange/MessageExchange' 

function Dialogs () {
    return (
        <div className={styles.dialogs_wrapper}>
            <h3 className={styles.page_title}>Dialogs</h3>
            <div className={styles.messages_container}>
                <Interlocutors/>
                <MessageExchange/> 
            </div>
        </div>
    )
}

export default Dialogs