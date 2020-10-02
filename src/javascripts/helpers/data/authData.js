import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import loginNavbar from '../../components/views/boards';
import logoutNavbar from '../../components/views/home';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      loginNavbar.loginView(currentUser);
    } else {
      auth.loginButton();
      logoutNavbar.logoutView();
      // $('#nav').html('hi');
    }
  });
};

export default { checkLoginStatus };
