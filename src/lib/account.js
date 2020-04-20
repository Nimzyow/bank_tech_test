let Account = function (log) {
  this._log = log || new Log();
};

Account.prototype.withdraw = function () {};

Account.prototype.deposit = function () {};

Account.prototype.log = function () {
  return this._log;
};
