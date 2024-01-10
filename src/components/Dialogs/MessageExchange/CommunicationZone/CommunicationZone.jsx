import styles from './CommunicationZone.module.css'
import MyMessage from './MyMessage/MyMessage'
import FriendMessage from './FriendMessage/FriendMessage'

function CommunicationZone () {
    return(
        <div className={styles.communication_zone_container}>
            <p className={styles.communication_zone_day}>Сегодня</p>
            <MyMessage/>
            <FriendMessage/>
        </div>
    )
}

export default CommunicationZone