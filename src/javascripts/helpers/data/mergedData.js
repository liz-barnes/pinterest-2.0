import boardData from './boardData';
import userData from './userData';
import pinData from './pinData';

const getDataForBoardsView = () => new Promise((resolve, reject) => {
  boardData.getBoards().then((boardResponse) => {
    userData.getUsers().then((userResponse) => {
      const boards = [];
      boardResponse.forEach((board) => {
        const userObject = userResponse.find((user) => user.firebaseKey === board.userId);
        const userUse = {
          userName: userObject.name,
          userEmail: userObject.email
        };
        boards.push({ ...board, ...userUse });
        resolve(boards);
      });
    });
  }).catch((error) => reject(error));
});

const getSingleUserView = (userId) => new Promise((resolve, reject) => {
  userData.getSingleUser(userId)
    .then((userResponse) => {
      userData.getUserBoards(userResponse.uid)
        .then((boardResponse) => {
          const finalObject = { user: userResponse, boards: boardResponse };
          resolve(finalObject);
        });
    }).catch((error) => reject(error));
});

const getSingleBoardView = (boardId) => new Promise((resolve, reject) => {
  boardData.getSingleBoard(boardId)
    .then((boardResponse) => {
      console.warn(boardResponse);
      pinData.getBoardsPins(boardResponse.firebaseKey)
        .then((pinResponse) => {
          const finalObject = { board: boardResponse, pins: pinResponse };
          resolve(finalObject);
          console.warn(finalObject);
        });
    }).catch((error) => reject(error));
});

const getDataForPinsView = () => new Promise((resolve, reject) => {
  pinData.getPins().then((pinResponse) => {
    boardData.getBoards().then((boardResponse) => {
      const pins = [];
      pinResponse.forEach((pin) => {
        const boardObject = boardResponse.find((board) => board.firebaseKey === pin.boardFirebaseKey);
        const boardUse = {
          boardName: boardObject.boardId,
          boardUser: boardObject.userId
        };
        pins.push({ ...pin, ...boardUse });
        resolve(pins);
        console.warn(pins, 'pins in pinsviewdata');
      });
    });
  }).catch((error) => reject(error));
});

console.warn('get single board view', getSingleBoardView('-MHxowsBP06rER7DHJhT'));
export default {
  getDataForBoardsView,
  getSingleUserView,
  getSingleBoardView,
  getDataForPinsView
};
