import userBoards from './views/userBoards';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'nav-boards-page':
      return userBoards.userBoardsView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
};

export default { viewListener };
