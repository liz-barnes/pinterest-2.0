const pinMaker = (pinObject) => {
  const domString = `<div class="pin-container">
                      <div class="pin-card" id="${pinObject.id}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                      </div>
                    </div>`;
  return domString;
};

export default { pinMaker };
