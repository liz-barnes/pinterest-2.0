import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];
      if (allBoards) {
        Object.keys(allBoards).forEach((boardId) => {
          boards.push(allBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const getUserBoards = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => {
      const userBoards = response.data;
      const boards = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          boards.push(userBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json?orderBy="firebaseKey"&equalTo="${boardId}"`)
    .then((response) => {
      console.warn(response, 'board response');
      const board = Object.values(response.data);
      const thisBoard = board[0];
      console.warn('thisBoard array', thisBoard);
      resolve(thisBoard);
    }).catch((error) => reject(error));
});

getSingleBoard('-MHxowsBP06rER7DHJhT');

export default { getBoards, getUserBoards, getSingleBoard };
