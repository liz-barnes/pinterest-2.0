import navbar from '../navbar/navbar';

const loginView = (currentUser) => {
  navbar.buildNavbar(currentUser);
};

export default { loginView };
