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
          <NavMenu friendsData={props.store.navBarComponent.friendsData} /> 
            <Routes>
              <Route path="/profile"  
              element={<Profile 
              newPostText={props.store.pageProfile.newPostText} 
              oldPostContent={props.store.pageProfile.oldPostContent} 
              addPost={props.addPost}
              changeNewPostText={props.changeNewPostText}
              />}
              />

              <Route path="/dialogs/:id" element={<Dialogs usersData={props.store.pageDialogs.usersData}/>} /> 
            </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
