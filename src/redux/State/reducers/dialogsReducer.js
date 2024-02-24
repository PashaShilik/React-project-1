const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

let initialState =  { 
  usersData: [ 
   {id:1, name:'Паша Шилик', data:'09:22', message:'Зайди в переписку 1'},
   {id:2, name:'Арсений Сажин', data:'11:13', message:'Зайди в переписку 2'},
   {id:3, name:'Михаил Михадюк', data:'07:34', message:'Зайди в переписку 3'},
   {id:4, name:'Артем Марусалов',  data:'22:54', message:'Зайди в переписку 4'},
   {id:5, name:'Алина Шилик', data:'14:21', message:'Зайди в переписку 5'},
   {id:6, name:'Настя Фролова', data:'18:11', message:'Зайди в переписку 6'},
   {id:7, name:'Настя Занделова', data:'13:00', message:'Зайди в переписку 7'}
   ],  
   myOldMessage:[
     {id:1, text:'Привет', time: '13.11', name: 'Pavel Shilik', data: '12.02.2024', status: true},
     {id:1, text:'Ау', time: '13.19', name: 'Pavel Shilik', data: '12.02.2024', status: true},
   ],
   newMessageText:''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {       
        case ADD_MESSAGE: {
          state.myOldMessage.push({id:6, text:state.newMessageText});
          state.newMessageText = '';
          return state
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state
        }
        default:
          return state
          break;
    }

    return state
} 

export const addMessageActionCreator = () => {
    return {
      type:'ADD-MESSAGE'
    }
}
export const messageChangeActionCreator = (text) => {
    return {
      type:'CHANGE-NEW-MESSAGE-TEXT',
      newText:text
    }
}

export default dialogsReducer