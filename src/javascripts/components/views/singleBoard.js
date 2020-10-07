import mergedData from '../../helpers/data/mergedData';
import pinsView from './pinsView';

const singleBoardView = (boardId) => {
  // console.warn(boardId);
  mergedData.getSingleBoardView(boardId)
    .then((response) => {
      const { board, pins } = response;
      $('#app').append(`<div id="single-view">
                            <h1>${board.boardId}</h1>
                          </div>`);
      if (pinsView.pinsView().length) {
        pins.forEach((pin) => {
          $('#single-view').append(`<div>${pin.pinUrl}</div>`);
        });
      } else {
        $('#single-view').append('<h1>NO PINS!</h1>');
      }
      // console.warn(response.board, response.pins);
    });
};

export default { singleBoardView };
