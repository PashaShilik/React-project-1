const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'



let initialState =  {  
    oldPostContent: [ 
    {id:1, text:'Привет, я старый пост под номером 1', like: 0, name:'Pavel Shilik', data:'07.31.2023'},
    {id:2, text:'Привет, я старый пост под номером 2', like: 15, name:'Pavel Shilik', data:'07.01.2023'},
    {id:3, text:'Привет, я старый пост под номером 3', like: 19, name:'Pavel Shilik', data:'08.23.2023'},
    {id:4, text:'Привет, я старый пост под номером 4', like: 29, name:'Pavel Shilik', data:'10.05.2023'},
    {id:5, text:'Привет, я старый пост под номером 5', like: 7, name:'Pavel Shilik', data:'12.19.2023'},
    ],    
    newPostText:'',
}

const profileReducer = (state = initialState, action) => {

 switch(action.type) {
        case ADD_POST: 
            state.oldPostContent.unshift({id:6, text:state.newPostText });
            state.newPostText = '';
            return state
        case CHANGE_NEW_POST_TEXT:
          state.newPostText = action.newText;
          return state
        default:
            return state
          break;
    }
    return state
} 

export const addPostActionCreator = () => {
    return {
      type:'ADD-POST'
    }
} 
export const postChangeActionCreator = (text) => {
    return {
      type:'CHANGE-NEW-POST-TEXT',
      newText:text
    }
}

export default profileReducer