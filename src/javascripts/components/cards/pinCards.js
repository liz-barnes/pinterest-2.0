const pinMaker = (pinObject) => {
  const domString = `<div class="pin-container">
                      <div class="pin-card" id="${pinObject.pinFirebaseKey}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                        <div class="button-container-pins">
                          <button type="button" class="btn btn-info" id="edit-pin">edit</button>
                          <button type="button" class="btn btn-danger remove-pin" id="${pinObject.pinFirebaseKey}">remove</button>
                        </div>
                      </div>
                    </div>`;
  // $('body').on('click', '#remove-pin', (e) => {
  //   e.stopImmediatePropagation();
  //   // const firebaseKey = e.currentTarget.id;
  //   console.warn('object clicked', e.currentTarget.id);
  //   // $(`.card#${firebaseKey}`).remove();
  //   // cowData.deleteCow(firebaseKey);
  // });
  return domString;
};

export default { pinMaker };
