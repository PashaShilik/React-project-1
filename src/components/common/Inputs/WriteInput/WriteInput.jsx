import styles from './WriteInput.module.css'

function WriteInput ({children}) {
    return(
        <div className={styles.input_container}>
            <input className={styles.write_input} placeholder={children}/>
        </div>
    )
}

export default WriteInput