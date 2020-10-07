import boardData from '../../helpers/data/boardData';

const addBoardForm = () => {
  $('#add-board-form').html(
    `<h2>Add a Board</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: Workouts">
      </div>
      <div class="form-group">
        <label for="breed">Image</label>
        <input type="text" class="form-control" id="board-image-url" placeholder="Place Image URL">
      </div>
      <button id="add-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Board</button>
    </form>`
  );

  $('#add-board-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('add board biatch');

    const data = {
      name: $('#name').val() || false,
      imageUrl: $('#board-image-url').val() || false,
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

      boardData.addBoard(data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Mooooo! Your cow was added!
          </div>`
          );
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);

      $('#name').val('');
      $('#board-image-url').val('');
    }
  });
};

export default { addBoardForm };
