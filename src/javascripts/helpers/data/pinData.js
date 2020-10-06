import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json`)
    .then((response) => {
      const thePins = response.data;
      const pins = [];
      if (thePins) {
        Object.keys(thePins).forEach((pinId) => {
          pins.push(thePins[pinId]);
        });
      }
      resolve(pins);
      console.warn(pins, 'get pins array');
    })
    .catch((error) => reject(error));
});

const getBoardsPins = (boardId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json?orderBy="boardFirebaseKey"&equalTo="${boardId}"`)
    .then((response) => {
      const boardsPins = response.data;
      console.warn(boardsPins, 'board pin response');
      const pins = [];
      if (boardsPins) {
        Object.keys(boardsPins).forEach((pinId) => {
          pins.push(boardsPins[pinId]);
        });
      }
      resolve(pins);
      console.warn(pins, 'board pins');
    })
    .catch((error) => reject(error));
});

getPins();
console.warn(getBoardsPins('-MHxowsBP06rER7DHJhT'), 'function help');

export default { getBoardsPins, getPins };
