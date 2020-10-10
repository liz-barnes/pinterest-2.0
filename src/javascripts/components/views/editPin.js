import form from '../forms/editPinForm';
import pinData from '../../helpers/data/pinData';

const editPinView = (pinFirebaseKey) => {
  $('#app').html('<div id="edit-pin-form"></div>');
  pinData.getSinglePin(pinFirebaseKey).then((response) => {
    form.editPinForm(response);
    console.warn('edit pin view', response);
  });
};

editPinView('-MI10oPmJuguK9T2vGTc');

export default { editPinView };
