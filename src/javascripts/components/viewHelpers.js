import pinData from '../helpers/data/pinData';
import userBoards from './views/userBoards';
import singleBoardView from './views/singleBoard';
import pinsView from './views/pinsView';
import editPinView from './views/editPin';
import addPinView from './views/addPin';
import addBoardView from './views/addBoard';

const viewHelper = (id, arg) => {
  $('#app').html('');
  switch (id) {
    case 'nav-boards-page':
      return userBoards.userBoardsView();
    case 'single-board':
      return singleBoardView.singleBoardView(arg);
    case 'show-pins':
      return pinsView.pinsView();
    case 'add-board-form-link':
      return addBoardView.addBoardView();
    case 'add-pin-form-link':
      return addPinView.addPinView();
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', '#add-board-form-link', (e) => {
    console.warn('add board clicked', e);
    const boardId = e.currentTarget.id;
    viewHelper('add-board-form-link', boardId);
  });

  $('body').on('click', '#add-pin-form-link', (e) => {
    console.warn('add pin clicked', e);
    const pinId = e.currentTarget.id;
    viewHelper('add-pin-form-link', pinId);
  });

  $('body').on('click', '.project-card', (e) => {
    const boardId = e.currentTarget.id;
    console.warn(boardId);
    viewHelper('single-board', boardId);
  });

  $('body').on('click', '.remove-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    console.warn('object clicked', e.currentTarget.id);
    $(`.pin-card#${firebaseKey}`).remove();
    pinData.removePin(firebaseKey);
  });

  $('body').on('click', '#edit-pin', (e) => {
    e.stopImmediatePropagation();
    console.warn('clicked bitch', e);
    editPinView.editPinView();
  });

  // $('body').on('click', '#remove-pin', (e) => {
  //   e.stopImmediatePropagation();
  //   console.warn(e, 'pin e');
  //   const pinId = e.currentTarget.id;
  //   console.warn(pinId);
  //   pinData.removePin(pinId);
  //   // viewHelper('single-board', boardId);
  // });
};

viewHelper('show-pins');

export default { viewListener };
