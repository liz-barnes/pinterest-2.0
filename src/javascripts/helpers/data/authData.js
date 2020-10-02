import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import navbar from '../../components/navbar/navbar';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      navbar.buildNavbar(currentUser);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
