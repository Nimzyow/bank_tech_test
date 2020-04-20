let Account = function (log, transaction) {
  this._log = log || new Log();
  this._transaction = transaction || new Transaction();
};

Account.prototype.withdraw = function () {
  this._transaction.withdrawal();
};

Account.prototype.deposit = function () {};

Account.prototype.log = function () {
  return this._log;
};
