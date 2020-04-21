let Statement = function () {};

Statement.prototype.print = function (history) {
  let header = "\nDate\t\t||\t\tCredit\t\t||\t\tDebit\t\t||\t\tBalance\t\t\n";
  let historySort = history.sort((a, b) => b.date - a.date);
  this.checkHistoryEmpty(historySort, header);
  historySort.map((log) => {
    header += this.addToHeader(log);
  });
  return header;
};

Statement.prototype.checkHistoryEmpty = function (historySort, header) {
  if (historySort.length === 0) {
    return header;
  }
};

Statement.prototype.addToHeader = function (log) {
  return `${log.date.getFullYear()}-${
    log.date.getMonth() + 1
  }-${log.date.getDate()}\t||\t\t${
    "credit" in log ? log.credit.toFixed(2) : "\t"
  }\t\t||\t\t${
    "debit" in log ? log.debit.toFixed(2) : "\t"
  }\t\t||\t\t${log.balance.toFixed(2)}\n`;
};
