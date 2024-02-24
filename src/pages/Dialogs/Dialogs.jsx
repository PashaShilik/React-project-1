import styles from './Dialogs.module.css'
import Interlocutors from '../../components/Dialogs/Interlocutors/Interlocutors'
import MessageExchange from '../../components/Dialogs/MessageExchange/MessageExchange' 

function Dialogs (props) {

    return (
        <div className={styles.dialogs_wrapper}>
            <h3 className={styles.page_title}>Dialogs</h3>
            <div className={styles.messages_container}>
                <Interlocutors usersData={props.usersData}/>
                <MessageExchange myOldMessage={props.myOldMessage} newMessageText={props.newMessageText} dispatch={props.dispatch}/> 
            </div>
        </div>
    )
}

export default Dialogs