const pinMaker = (pinObject) => {
  const domString = `<div class="pin-container">
                      <div class="pin-card" id="${pinObject.id}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                        <div class="button-container-pins">
                          <button type="button" class="btn btn-info">edit</button>
                          <button type="button" class="btn btn-danger">remove</button>
                        </div>
                      </div>
                    </div>`;
  return domString;
};

export default { pinMaker };
