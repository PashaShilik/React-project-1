import styles from './MessageExchange.module.css'
import StatusUser from './StatusUser/StatusUser'
import CommunicationZone from './CommunicationZone/CommunicationZone'
import WriteMessage from './WriteMessage/WriteMessage'


function MessageExchange (props) {
   
    return(
        <div className={styles.message_exchange_container}>
            <StatusUser/>
            <CommunicationZone myOldMessage={props.myOldMessage}/>
            <WriteMessage newMessageText={props.newMessageText} dispatch={props.dispatch}/>
        </div>
    )
}

export default MessageExchange