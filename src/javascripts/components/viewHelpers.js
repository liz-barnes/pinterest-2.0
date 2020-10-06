import userBoards from './views/userBoards';
import singleBoardView from './views/singleBoard';
import pinsView from './views/pinsView';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'nav-boards-page':
      return userBoards.userBoardsView();
    case 'single-board':
      return singleBoardView.singleBoardView(arg);
    case 'show-pins':
      return pinsView.pinsView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', '.project-card', (e) => {
    const boardId = e.currentTarget.id;
    console.warn(boardId);
    viewHelper('single-board', boardId);
  });
};

viewHelper('show-pins');

export default { viewListener };
