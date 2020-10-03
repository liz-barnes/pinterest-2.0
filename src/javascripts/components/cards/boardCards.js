import boardData from '../../helpers/data/boardData';

const buildBoardCard = (boardObject) => {
  const domString = `<div class="board-container">
                      <div class="project-card" id="${boardObject.id}" style="width: 18rem; background-image: url(${boardObject.imageUrl});">
                        <div class="board-btn-container d-flex justify-content-center align-items-end">
                          <button class="btn btn-danger" id="delete-board-btn">Delete Board</button>
                        </div>
                      </div>
                      <h5 class="board-id">${boardObject.boardId}</h5>
                    </div>`;
  $('body').on('click', '.project-card .btn #delete-board-btn', (e) => {
    e.stopImmediatePropagation();
    $(`.project-card#${e.currentTarget.id}`).remove();
    boardData.deleteboard(e.currentTarget.id);
  });
  return domString;
};

export default { buildBoardCard };
