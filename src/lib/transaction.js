let Transaction = function () {};

Transaction.prototype.withdrawal = function (amount, date, history) {
  this.firstDepositCheck(history);
  let dateConverted = new Date(date);
  history = history.sort((a, b) => b.date - a.date);
  let calcBalance = history[0].balance - amount;
  this.enoughMoneyInAccountCheck(calcBalance);
  return { debit: amount, date: dateConverted, balance: calcBalance };
};

Transaction.prototype.deposit = function () {};

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
