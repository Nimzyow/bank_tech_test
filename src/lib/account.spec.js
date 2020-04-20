describe("Account.js", () => {
  let log = jasmine.createSpy("log", ["history", "addToHistory"]);
  let transaction = jasmine.createSpyObj("transaction", [
    "withdrawal",
    "deposit",
  ]);
  transaction.withdrawal.and.callFake(function () {});
  // transaction.withdrawal = function () {
  //   return "something";
  // };
  describe("function not to be undefined for", () => {
    let account;
    beforeEach(() => {
      account = new Account(log, transaction);
    });
    it("withdraw", () => {
      expect(account.withdraw).not.toBeUndefined();
    });
    it("deposit", () => {
      expect(account.deposit).not.toBeUndefined();
    });
    it("log", () => {
      expect(account.log).not.toBeUndefined();
    });
  });
  describe("initializes", () => {
    it("with log class", () => {
      account = new Account(log, transaction);
      expect(account.log()).toEqual(log);
    });
  });
  describe("function", () => {
    it("withdraw delegates to Transaction.withdrawal", () => {
      account = new Account(log, transaction);
      account.withdraw();
      expect(account._transaction.withdrawal).toHaveBeenCalledTimes(1);
    });
  });
});
