import styles from './ProfileOldPost.module.css'

function ProfileOldPost () {
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
            Вчера друг позвал в гости. На вопрос "какой повод", ответил - сочельник и Рождество. Друг татарин. 
            За столом были 5 татар, 1 русский и 1 чувашин. Первый тостующий начал говорить на ломаном русском, 
            на что русский сказал "татарча сойлэшегез, мин анлыйм" (говорите по татарски, я всё понимаю). 
            А чувашин шпарит на татарском, как на родном. В полночь пошли к церкви, но заходить не стали, посчитали,
            что в подпитом состоянии это неправильно и харам. Посмотрели салют и пошли в баню. 
            Я это к чему - для нормальных людей нет никаких различий и по национальности и по религии. Обожаю свой Татарстан.
            </p>
          </div>

        </div>
      </div>
    )   
}

export default ProfileOldPost 