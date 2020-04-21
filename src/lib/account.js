let Account = function (log, transaction, statement) {
  this._log = log || new Log();
  this._transaction = transaction || new Transaction();
  this._statement = statement || new Statement();
};

Account.prototype.withdraw = function (amount, date) {
  this._log.addToHistory(
    this._transaction.withdrawal(amount, date, this._log.getHistory())
  );
};

Account.prototype.deposit = function (amount, date) {
  this._log.addToHistory(
    this._transaction.deposit(amount, date, this._log.getHistory())
  );
};

Account.prototype.log = function () {
  return this._log;
};

Account.prototype.statement = function () {
  return this._statement.print(this._log.getHistory());
};
