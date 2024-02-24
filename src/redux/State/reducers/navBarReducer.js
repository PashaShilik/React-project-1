import avatarIco_1 from '../../../Images/Common/Avatar/avatar_2.png'
import avatarIco_2 from '../../../Images/Common/Avatar/avatar_3.png'
import avatarIco_3 from '../../../Images/Common/Avatar/avatar_4.png'


let initialState = {
    friendsData:[
        {id:1, name:'Aрсен', avatar: avatarIco_1},
        {id:2, name:'Миша', avatar: avatarIco_2},
        {id:3, name:'Андрей', avatar: avatarIco_3}
    ]
};

const navBarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FRIENDS_DATA':
        return {
          ...state,
          friendsData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default navBarReducer;
  
