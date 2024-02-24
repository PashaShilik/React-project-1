import styles from './Interlocutors.module.css'
import { Link } from 'react-router-dom'

import SearchInput from '../../common/Inputs/SearchInput/SearchInput'
import Messages from './Messages/Messages'


function Interlocutors (props) {
    return (
        <div className={styles.interlocutors_container}>
            <div className={styles.search_input_container}>
                <SearchInput>Поиск людей...</SearchInput>
            </div>
            <div className={styles.users_list_container}>
             {props.usersData.map(user => <Link key={user.id} to={`/dialogs/${user.id}`}>
                <Messages
                data={user.data} 
                message={user.message} 
                name={user.name}/>
                </Link>)}
            </div>
        </div>
    )
}

export default Interlocutors