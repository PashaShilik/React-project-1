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

        <ProfileOldPost/>

      </div>
    )
}

export default Profile