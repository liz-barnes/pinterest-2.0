import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const editPinForm = (pinObject) => {
  $('#edit-pin-form').html(`
        <h2>Add this Pin to a Board</h2>
        <div id="success-message"></div>
        <form>
          <div id="error-message"></div>
          <div class="form-group">
            <label for="board">Board</label>
              <select class="form-control" id="board">
                <option value="">Select a Board</option>
              </select>
          </div>
          <button id="update-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Update Pin</button>
        </form>
    `);
  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value=${item.uid}>${item.boardId}</option>`);
    });
  });
  $('#update-pin-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('add that cow biatch');

    const data = {
      board: $('#board').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');

      pinData.updatePin(pinObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your pin was updated!
          </div>`
          );
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
    }
  });
};

export default { editPinForm };
