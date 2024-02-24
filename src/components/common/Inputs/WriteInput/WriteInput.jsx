import React from 'react'
import styles from './WriteInput.module.css'
import { addMessageActionCreator, messageChangeActionCreator } from '../../../../redux/State/reducers/dialogsReducer.js';


function WriteInput (props) {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
  
    const onMessageChange = () => {
      let text = newMessageElement.current.value
      let action = messageChangeActionCreator(text)
      props.dispatch(action)
    }
  

    return(
        <div className={styles.input_container}>
            <input onChange={onMessageChange} ref={newMessageElement} className={styles.write_input} placeholder={props.name} value={props.newMessageText}/>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}

export default WriteInput