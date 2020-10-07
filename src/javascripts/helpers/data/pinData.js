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
      // console.warn(pins, 'get pins array');
    })
    .catch((error) => reject(error));
});

const getBoardsPins = (boardId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json?orderBy="boardFirebaseKey"&equalTo="${boardId}"`)
    .then((response) => {
      const boardsPins = response.data;
      console.warn('board pin response', boardsPins);
      const pins = [];
      if (boardsPins) {
        Object.keys(boardsPins).forEach((pinId) => {
          pins.push(boardsPins[pinId]);
        });
      }
      resolve(pins);
      console.warn('board pins resolve', pins);
    })
    .catch((error) => reject(error));
});

const getSinglePin = (pinFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinFirebaseKey}.json`)
    .then((response) => {
      const thisPin = response.data;
      resolve(thisPin);
    }).catch((error) => reject(error));
});

const removePin = (firebaseKey) => axios.delete(`${baseUrl}/pins/${firebaseKey}.json`);

// console.warn(getBoardsPins('-MHxowsBP06rER7DHJhT'), 'function help');

export default {
  getBoardsPins,
  getPins,
  removePin,
  getSinglePin
};
