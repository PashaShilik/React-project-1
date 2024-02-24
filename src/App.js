import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='main_content_container'>
          <NavMenu friendsData={props.state.navBarReducer.friendsData} /> 
            <Routes>
              <Route path="/profile"  
              element={<Profile 
              newPostText={props.state.profileReducer.newPostText} 
              oldPostContent={props.state.profileReducer.oldPostContent} 
              dispatch={props.dispatch}
              />}
              />

              <Route path="/dialogs/:id" element={<Dialogs 
              usersData={props.state.dialogsReducer.usersData}
              newMessageText={props.state.dialogsReducer.newMessageText}
              myOldMessage={props.state.dialogsReducer.myOldMessage}
              dispatch={props.dispatch}/>} /> 
            </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
