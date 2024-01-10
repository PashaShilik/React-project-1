import styles from './Interlocutors.module.css'
import SearchInput from '../../common/Inputs/SearchInput/SearchInput'
import Messages from './Messages/Messages'




function Interlocutors () {
    return (
        <div className={styles.interlocutors_container}>
            <div className={styles.search_input_container}>
                <SearchInput>Поиск людей...</SearchInput>
            </div>
            <div className={styles.users_list_container}>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
            </div>
        </div>
    )
}

export default Interlocutors