import styles from './CommunicationZone.module.css'
import MyMessage from './MyMessage/MyMessage'
import FriendMessage from './FriendMessage/FriendMessage'

function CommunicationZone (props) {
    return(
        <div className={styles.communication_zone_container}>
            <p className={styles.communication_zone_day}>Сегодня</p>

            {props.myOldMessage.map((content)=> (
               <MyMessage 
               key={content.id}
               text={content.text}
               time={content.time}
               status={content.status}
               /> 
            ))} 
          
            <FriendMessage/>
        </div>
    )
}

export default CommunicationZone