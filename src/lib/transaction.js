let Transaction = function () {};

Transaction.prototype.withdrawal = function (amount, date, history) {
  this.firstDepositCheck(history);
  history = this.sortHistory(history);
  let calcBalance = history[0].balance - amount;
  this.enoughMoneyInAccountCheck(calcBalance);
  return { debit: amount, date: date, balance: calcBalance };
};

Transaction.prototype.deposit = function (amount, date, history) {
  if (history.length === 0) {
    return { credit: amount, date: date, balance: amount };
  } else {
    history = this.sortHistory(history);
    let calcBalance = history[0].balance + amount;
    return { credit: amount, date: date, balance: calcBalance };
  }
};

Transaction.prototype.firstDepositCheck = function (history) {
  if (history.length === 0) {
    throw new Error("Please make your first deposit before withdrawing money");
  }
};

Transaction.prototype.enoughMoneyInAccountCheck = function (calcBalance) {
  if (calcBalance < 0) {
    throw new Error("not enough money in your account to withdraw that amount");
  }
};

Transaction.prototype.sortHistory = function (history) {
  return history.sort((a, b) => b.date - a.date);
};
