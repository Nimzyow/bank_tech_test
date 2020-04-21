let Transaction = function () {};

Transaction.prototype.withdrawal = function (amount, date, history) {
  this.firstDepositCheck(history);
  let dateConverted = new Date(date);
  history = history.sort((a, b) => b.date - a.date);
  this.dateCheck(dateConverted, history[0].date);
  let calcBalance = history[0].balance - amount;
  this.enoughMoneyInAccountCheck(calcBalance);
  return { debit: amount, date: dateConverted, balance: calcBalance };
};

Transaction.prototype.deposit = function (amount, date, history) {
  let dateConverted = new Date(date);
  if (history.length === 0) {
    return { credit: amount, date: dateConverted, balance: amount };
  } else {
    history = history.sort((a, b) => b.date - a.date);
    this.dateCheck(dateConverted, history[0].date);
    let calcBalance = history[0].balance + amount;
    return { credit: amount, date: dateConverted, balance: calcBalance };
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

Transaction.prototype.dateCheck = function (dateConverted, log) {
  if (dateConverted < log) {
    throw new Error(
      "cannot enter a date later than the latest account history"
    );
  }
};
