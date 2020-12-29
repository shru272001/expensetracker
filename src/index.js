import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import rootRed from "./store/reducers/rootRed";
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./components/config/Config";
import thunk from "redux-thunk";
import {useSelector } from 'react-redux'
import {isLoaded} from 'react-redux-firebase'

const store = createStore(
  rootRed,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};
function AuthIsLoaded({children}){
  const auth=useSelector(state=>state.firebase.auth);
  if(!isLoaded(auth))
  return(
    <div>
      Loading.......
    </div>
  )
  return children
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
    <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
