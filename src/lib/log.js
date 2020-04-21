let Log = function () {
  this._history = [];
};

Log.prototype.addToHistory = function (logToAdd) {
  this._history.push(logToAdd);
  return this.addSuccess("debit" in logToAdd ? "debited from" : "credited to");
};

Log.prototype.getHistory = function () {
  return this._history;
};

Log.prototype.addSuccess = function (status) {
  return `successfully ${status} your account`;
};
