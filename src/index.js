import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import store from './redux/State/State'; */
import store from './redux/reduxStore/reduxStore';

 let rerenderEntriesThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntriesThree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntriesThree(state)
});