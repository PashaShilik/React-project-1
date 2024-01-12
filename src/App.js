import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Profile/Profile';
import Dialogs from './pages/Dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='main_content_container'>
          <NavMenu/>
            <Routes>
              <Route path="/profile"  element={<Profile/>}/>
              <Route path="/dialogs/:id" element={<Dialogs/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
