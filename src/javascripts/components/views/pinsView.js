import mergedData from '../../helpers/data/mergedData';
import pinCard from '../cards/pinCards';
// import pinData from '../../helpers/data/pinData';
// import boardData from '../../helpers/data/boardData';

const pinsView = () => {
  $('#pins').html('');
  mergedData.getDataForPinsView()
    .then((response) => {
      console.warn('pins response for data review', response);
      if (response.length) {
        response.forEach((item) => {
          $('#pins').append(pinCard.pinMaker(item));
        });
      } else {
        $('#pins').append('<h2>NO PINS</h2>');
      }
    });
};

// const boardPinsView = (item) => {
//   if (pinData.getPins().boardFirebaseKey === boardData.getBoards().firebaseKey) {
//     $('#app').append(pinCard.pinMaker(item));
//   }
// };

// boardPinsView(item);

export default { pinsView };
