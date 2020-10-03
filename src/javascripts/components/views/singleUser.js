import mergedData from '../../helpers/data/mergedData';
import userBoards from './userBoards';

const singleFarmerView = (userId) => {
  console.warn(userId);
  mergedData.getSingleUserView(userId)
    .then((response) => {
      const { user, boards } = response;

      $('#app').append(`<div id="single-view">
                          <h1>${user.name}'s Cows!</h1>
                        </div>`);
      if (userBoards.userBoardsView().length) {
        boards.forWach((board) => {
          $('#single-view').append(`<h3>${board.name}</h3>`);
        });
      } else {
        $('#single-view').append('<h1>NO COWS!</h1>');
      }
      console.warn(response.user, response.boards);
    });
};

export default { singleFarmerView };
