import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import auth from '../../components/auth/auth';
import loginNavbar from '../../components/views/boards';
import logoutNavbar from '../../components/views/home';
import viewHelper from '../../components/viewHelpers';
// import userBoards from '../../components/views/userBoards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      loginNavbar.loginView(currentUser);
      viewHelper.viewListener('nav-boards-page');
      // userBoards.showUserBoards();
    } else {
      auth.loginButton();
      logoutNavbar.logoutView();
    }
  });
};

export default { checkLoginStatus };
