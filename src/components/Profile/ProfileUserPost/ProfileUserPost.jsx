import styles from './ProfileUserPost.module.css'
import ButtonSend from '../../common/Buttons/ButtonSend/ButtonSend'

function ProfileUserPost () {
    return(
        <div className={styles.user_post_container}>
          <h3 className={styles.title_post_block}>My post</h3>

          <div className={styles.new_post_container}>
            <textarea className={styles.write_new_post_textarea} placeholder='Your post'></textarea>
          </div>

          <ButtonSend>Send post</ButtonSend>
        </div>
    )   
}

export default ProfileUserPost 