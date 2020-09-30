import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.warn('help');
    //   const currentUser = userData.setCurrentUser(user);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
