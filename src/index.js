import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import GlobalStyle from './GlobalStyle'
import reportWebVitals from './reportWebVitals';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode> 
    <FirebaseContext.Provider value = {{firebase}}>
    <GlobalStyle/>
    <App />
    </FirebaseContext.Provider>
    
  </React.StrictMode>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
