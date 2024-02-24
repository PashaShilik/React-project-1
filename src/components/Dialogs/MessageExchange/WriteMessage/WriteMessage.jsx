import styles from './WriteMessage.module.css'
import clipIco from '../././../../../Images/Page_Dialogs/Clip.png'
import EmojiIco from '../././../../../Images/Page_Dialogs/Emoji.png'
import WriteInput from '../../../common/Inputs/WriteInput/WriteInput'

function WriteMessage (props) {

    return (
        <div className={styles.write_message_container}>
            <img src={clipIco}/>
            <WriteInput newMessageText={props.newMessageText} dispatch={props.dispatch} name={props.name || 'Сообщение'}></WriteInput>
            <img src={EmojiIco}/>
        </div>
    )
}

export default WriteMessage 