import mergedData from '../../helpers/data/mergedData';
import pinCard from '../cards/pinCards';

const pinsView = () => {
  $('#app').html('');
  mergedData.getDataForPinsView()
    .then((response) => {
      console.warn(response);
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(pinCard.pinMaker(item));
        });
      } else {
        $('#app').append('<h2>NO PINS</h2>');
      }
    });
};

export default { pinsView };
