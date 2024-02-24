import style from './Profile.module.css'
import ProfileMainImg from './ProfileMainImg/ProfileMainImg'
import ProfileDescription from './ProfileDescription/ProfileDescription'
import ProfileUserPost from './ProfileUserPost/ProfileUserPost'
import ProfileOldPost from './ProfileOldPost/ProfileOldPost'


function Profile (props) {


    return(
        <div className={style.main_content}>

        <ProfileMainImg/>

        <ProfileDescription/>

        <ProfileUserPost newPostText={props.newPostText} dispatch={props.dispatch}/>

      {props.oldPostContent.map(content => <ProfileOldPost 
        key={content.id} 
        text={content.text} 
        like={content.like}
        name={content.name}
        data={content.data}
        />)} 

      </div>
    )
}

export default Profile