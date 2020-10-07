import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';

const addPinForm = () => {
  $('#add-pin-form').html(
    `<h2>Add a Pin</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="pinImageUrl">Image</label>
        <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
      </div>
      <div class="form-group">
            <label for="board">Board</label>
              <select class="form-control" id="board">
                <option value="">Select a Board</option>
              </select>
          </div>
      <button id="add-pin-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Pin</button>
    </form>`
  );
  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value=${item.boardFirebasekey}>${item.boardId}</option>`);
    });
  });

  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('add pin biatch');

    const data = {
      pinUrl: $('#pin-image-url').val() || false,
      boardFirebaseKey: $('#board').val() || false,

    };

    console.warn(data);

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');

      pinData.addPin(data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your pin was added!
          </div>`
          );
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);

      $('#pin-image-url').val('');
      $('#board').val('');
    }
  });
};

export default { addPinForm };
