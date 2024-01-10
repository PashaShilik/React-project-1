import styles from './MessageExchange.module.css'
import StatusUser from './StatusUser/StatusUser'
import CommunicationZone from './CommunicationZone/CommunicationZone'
import WriteMessage from './WriteMessage/WriteMessage'


function MessageExchange () {
    return(
        <div className={styles.message_exchange_container}>
            <StatusUser/>
            <CommunicationZone/>
            <WriteMessage/>
        </div>
    )
}

export default MessageExchange