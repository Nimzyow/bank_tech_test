let Account = function (log, transaction, statement) {
  this._log = log || new Log();
  this._transaction = transaction || new Transaction();
  this._statement = statement || new Statement();
};

Account.prototype.withdraw = function (amount, date) {
  this._log.addToHistory(this._transaction.withdrawal(amount, date));
};

Account.prototype.deposit = function (amount, date) {
  this._log.addToHistory(
    this._transaction.deposit(amount, date, this._log.history)
  );
};

Account.prototype.log = function () {
  return this._log;
};

Account.prototype.statement = function () {
  this._statement.print();
};
