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
          <NavMenu/>
            <Routes>
              <Route path="/profile"  element={<Profile oldPostContent={props.oldPostContent}/>}/>
              <Route path="/dialogs/:id" element={<Dialogs usersData={props.usersData}/>} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
