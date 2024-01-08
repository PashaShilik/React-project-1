import styles from './ProfileDescription.module.css'

function ProfileDescription () {
    return(
        <div className={styles.avatar_description_container}>
            <div className={styles.avatar_container}>
                <img src='https://art.kartinkof.club/uploads/posts/2023-07/thumbs/1688921518_art-kartinkof-club-p-kartina-portret-art-15.jpg'/>
            </div>
            <div className={styles.description_container}>
                <h3 className={styles.description_name_user}>Pavel Shilik</h3>
                <ul className={styles.description_user_list}>
                    <li className={styles.description_user_list_item}>
                        <strong>Name:</strong> Pavel Shilik
                    </li>
                    <li className={styles.description_user_list_item}>
                        <strong>City:</strong> Minsk
                    </li>
                    <li className={styles.description_user_list_item}>
                        <strong>Education:</strong> Rs-school
                    </li>
                    <li className={styles.description_user_list_item}>
                        <strong>Work position:</strong> Junior Frontend Developer
                    </li>
                </ul>
            </div>
        </div>
    )   
}
 
export default ProfileDescription