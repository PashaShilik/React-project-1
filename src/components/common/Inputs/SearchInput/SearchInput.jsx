import styles from './SearchInput.module.css'

import SearcIco from '../../../../Images/Common/search_ico.png'

function SearcInput ({children}) {
    return(
        <div className={styles.input_container}>
            <img src={SearcIco}/>
            <input className={styles.search_input} placeholder={children}/>
        </div>
    )
}

export default SearcInput