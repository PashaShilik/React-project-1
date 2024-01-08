import styles from './ButtonSend.module.css'

function ProfileUserPost ({children}) {
    return(
        <div className={styles.button_send_container}>
            <button className={styles.send_new_post_button}>{children}</button>
        </div>
    )   
}

export default ProfileUserPost 