import mergedData from '../../helpers/data/mergedData';
import card from '../cards/boardCards';
// import boardData from '../../helpers/data/boardData';

const userBoardsView = () => {
  mergedData.getDataForBoardsView()
  // boardData.getUserBoards()
    .then((response) => {
      console.warn('user boards view response', response);
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.buildBoardCard(item));
        });
      } else {
        $('#app').append('<h2>NO BOARDS</h2>');
      }
    });
};

const showBoards = () => {
  $('body').on('click', '#nav-boards-page', (e) => {
    // $('#app').html('');
    userBoardsView();
    // target = e.currentTarget.id;
    console.warn('clicked', e);
  });
};

export default { userBoardsView, showBoards };
