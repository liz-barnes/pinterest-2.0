import 'bootstrap';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
// import pinsView from './components/views/pinsView';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  // pinsView.pinsView();
};

init();
