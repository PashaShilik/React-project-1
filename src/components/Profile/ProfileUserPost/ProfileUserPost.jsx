import React from 'react';
import styles from './ProfileUserPost.module.css';
import { addPostActionCreator, postChangeActionCreator } from '../../../redux/State/reducers/profileReducer.js';

function ProfileUserPost(props) {
  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = postChangeActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.user_post_container}>
      <h3 className={styles.title_post_block}>My post</h3>

      <div className={styles.new_post_container}>
        <textarea 
          className={styles.write_new_post_textarea} 
          placeholder='Your post'
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>

      <div className={styles.button_send_container}>
        <button onClick={addPost} className={styles.send_new_post_button}>Send post</button>
      </div>
    </div>
  );   
}

export default ProfileUserPost;
