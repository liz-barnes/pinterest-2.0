import pinForm from '../forms/addPinForm';

const addPinView = () => {
  $('#app').append('<div id="add-pin-form">Add Pin Form</div>');
  pinForm.addPinForm();
};

export default { addPinView };
