const editPinForm = () => {
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
};

export default { editPinForm };
