import boardData from './boardData';
import userData from './userData';

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
      console.warn(userResponse, 'user response');
      userData.getUserBoards(userResponse.uid)
        .then((boardResponse) => {
          const finalObject = { user: userResponse, boards: boardResponse };
          resolve(finalObject);
        });
    }).catch((error) => reject(error));
});

// const getSingleFarmerView = (farmerUid) => new Promise((resolve, reject) => {
//   farmerData.getSingleFarmer(farmerUid)
//     .then((farmerResponse) => {
//       cowData.getFarmerCows(farmerResponse.uid)
//         .then((cowResponse) => {
//           const finalObject = { farmer: farmerResponse, cows: cowResponse };
//           resolve(finalObject);
//         });
//     }).catch((error) => reject(error));
// });
export default { getDataForBoardsView, getSingleUserView };
