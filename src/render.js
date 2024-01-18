import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost } from './redux/State/State';


export let rerenderEntriesThree = (state) =>{

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
);
}

rerenderEntriesThree(state)