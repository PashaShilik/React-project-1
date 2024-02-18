import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/State/State';

 let rerenderEntriesThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store) } />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntriesThree(store.getState());
store.subscribe(rerenderEntriesThree);