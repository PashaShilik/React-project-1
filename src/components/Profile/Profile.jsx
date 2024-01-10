import style from './Profile.module.css'
import ProfileMainImg from './ProfileMainImg/ProfileMainImg'
import ProfileDescription from './ProfileDescription/ProfileDescription'
import ProfileUserPost from './ProfileUserPost/ProfileUserPost'
import ProfileOldPost from './ProfileOldPost/ProfileOldPost'


function Profile () {
    return(
        <div className={style.main_content}>

        <ProfileMainImg/>

        <ProfileDescription/>

        <ProfileUserPost/>

        <ProfileOldPost text='Привет, я старый пост под номером 1'/>
        <ProfileOldPost text='Привет, я старый пост под номером 2'/>

      </div>
    )
}

export default Profile