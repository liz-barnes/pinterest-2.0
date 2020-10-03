import navbar from '../navbar/navbar';

const loginView = (currentUser) => {
  $('#app').html('');
  navbar.buildNavbar(currentUser);
};

export default { loginView };
