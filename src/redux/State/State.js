import avatarIco_1 from '../../Images/Common/Avatar/avatar_2.png'
import avatarIco_2 from '../../Images/Common/Avatar/avatar_3.png'
import avatarIco_3 from '../../Images/Common/Avatar/avatar_4.png'

import { rerenderEntriesThree } from '../../render'

const state = {

    pageProfile: {   //Массив передается в Profile
        oldPostContent: [ 
        {id:1, text:'Привет, я старый пост под номером 1', like: 0, name:'Pavel Shilik', data:'07.31.2023'},
        {id:2, text:'Привет, я старый пост под номером 2', like: 15, name:'Pavel Shilik', data:'07.01.2023'},
        {id:3, text:'Привет, я старый пост под номером 3', like: 19, name:'Pavel Shilik', data:'08.23.2023'},
        {id:4, text:'Привет, я старый пост под номером 4', like: 29, name:'Pavel Shilik', data:'10.05.2023'},
        {id:5, text:'Привет, я старый пост под номером 5', like: 7, name:'Pavel Shilik', data:'12.19.2023'},
        ],    
    },

    pageDialogs: {   //Массив передается в Dialogs
       usersData: [ 
        {id:1, name:'Паша Шилик', data:'09:22', message:'Зайди в переписку 1'},
        {id:2, name:'Арсений Сажин', data:'11:13', message:'Зайди в переписку 2'},
        {id:3, name:'Михаил Михадюк', data:'07:34', message:'Зайди в переписку 3'},
        {id:4, name:'Артем Марусалов',  data:'22:54', message:'Зайди в переписку 4'},
        {id:5, name:'Алина Шилик', data:'14:21', message:'Зайди в переписку 5'},
        {id:6, name:'Настя Фролова', data:'18:11', message:'Зайди в переписку 6'},
        {id:7, name:'Настя Занделова', data:'13:00', message:'Зайди в переписку 7'}
        ],  
    },

    navBarComponent: {
        friendsData:[
            {id:1, name:'Aрсен', avatar: avatarIco_1},
            {id:2, name:'Миша', avatar: avatarIco_2},
            {id:3, name:'Андрей', avatar: avatarIco_3}
        ]
    }
}


export const addPost = (postMessage) => { //Добавление нового поста после ввода текста в textarea

    const newPost = {
        id: 5,
        text: postMessage,
        like: 0,
        name: 'Pavel Shilik',
        data: 'дата',
    }

    state.pageProfile.oldPostContent.unshift(newPost);
    rerenderEntriesThree(state)

}

export default state