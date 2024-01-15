import styles from './BlockFriends.module.css'

function BlockFriends (props) {
    return(
            <div className={styles.block_friends_container}>
                <div className={styles.block_friends_header}>
                   <p className={styles.title}>Друзья</p> 
                   <button className={styles.button_open_all_friends}>Еще</button>
                </div>

                <div className={styles.friends_container}>
                    {props.friendsData.map( friend =>
                        <div key={friend.id} className={styles.friend_avatar_container}>
                            <div className={styles.avatar_friend}>
                                <img src={friend.avatar} alt='иконка'/>
                            </div>
                            <p className={styles.name_friends}>{friend.name}</p>
                        </div> 
                    )}
                    
                </div>
            </div>
    )
}

export default BlockFriends