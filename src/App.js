import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">

      <Header/>

      <div className='main_content_container'>
        <NavMenu/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
