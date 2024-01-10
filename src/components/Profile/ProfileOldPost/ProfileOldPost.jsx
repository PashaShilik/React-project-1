import styles from './ProfileOldPost.module.css'

function ProfileOldPost (props) {

    return(
      <div className={styles.old_user_post_container}>
        <div className={styles.old_user_post_card}>

          <div className={styles.old_post_avatar_and_name}>
            <div className={styles.old_post_user_avatar}>
              <img src='https://art.kartinkof.club/uploads/posts/2023-07/thumbs/1688921518_art-kartinkof-club-p-kartina-portret-art-15.jpg'/>
            </div>
            <div className={styles.old_post_user_name_and_data}>
              <p className={styles.old_post_user_name}>Pavel Shilik</p>
              <p className={styles.old_post_user_data}>08.12.2023</p>
            </div>
          </div>

          <div className={styles.old_post_text_container}>
            <p className={styles.old_post_text_content}>
              {props.text}
            </p>
          </div>

        </div>
      </div>
    )   
}

export default ProfileOldPost 