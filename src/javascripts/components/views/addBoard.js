import boardForm from '../forms/addBoardForm';

const addBoardView = () => {
  $('#app').append('<div id="add-board-form">Add Board Form</div>');
  boardForm.addBoardForm();
};

export default { addBoardView };
