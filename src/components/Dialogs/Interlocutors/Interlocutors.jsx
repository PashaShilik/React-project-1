import styles from './Interlocutors.module.css'
import { Link } from 'react-router-dom'

import SearchInput from '../../common/Inputs/SearchInput/SearchInput'
import Messages from './Messages/Messages'


function Interlocutors () {

    const usersData = [
        {id:1, name:'Паша Шилик', data:'09:22', message:'Зайди в переписку 1'},
        {id:2, name:'Арсений Сажин', data:'11:13', message:'Зайди в переписку 2'},
        {id:3, name:'Михаил Михадюк', data:'07:34', message:'Зайди в переписку 3'},
        {id:4, name:'Артем Марусалов',  data:'22:54', message:'Зайди в переписку 4'},
        {id:5, name:'Алина Шилик', data:'14:21', message:'Зайди в переписку 5'},
        {id:6, name:'Настя Фролова', data:'18:11', message:'Зайди в переписку 6'},
        {id:7, name:'Настя Занделова', data:'13:00', message:'Зайди в переписку 7'}
    ]


    return (
        <div className={styles.interlocutors_container}>
            <div className={styles.search_input_container}>
                <SearchInput>Поиск людей...</SearchInput>
            </div>
            <div className={styles.users_list_container}>
                {usersData.map(user => <Link to={`/dialogs/${user.id}`}><Messages data={user.data} message={user.message} name={user.name}/></Link>)}
            </div>
        </div>
    )
}

export default Interlocutors