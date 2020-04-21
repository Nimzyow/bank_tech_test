let Log = function () {
  this._history = [];
};

Log.prototype.addToHistory = function (logToAdd) {
  this._history.push(logToAdd);
};

Log.prototype.getHistory = function () {
  return this._history;
};
