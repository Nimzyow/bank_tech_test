describe("Account.js", () => {
  //create spy here for rest of tests to use
  let log = jasmine.createSpyObj("log", ["history", "addToHistory"]);
  let transaction = jasmine.createSpyObj("transaction", [
    "withdrawal",
    "deposit",
  ]);
  let statement = jasmine.createSpyObj("statement", ["print"]);

  describe("function not to be undefined for", () => {
    let account;
    beforeEach(() => {
      account = new Account(log, transaction, statement);
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
    it("statement", () => {
      expect(account.statement).not.toBeUndefined();
    });
  });

  describe("initializes", () => {
    it("with log class", () => {
      account = new Account(log, transaction, statement);
      expect(account.log()).toEqual(log);
    });
  });

  describe("withdraw function", () => {
    it("withdraw delegates to Transaction.withdrawal", () => {
      account = new Account(log, transaction, statement);
      transaction.withdrawal.and.callFake(function () {
        return {};
      });
      account.withdraw();
      expect(account._transaction.withdrawal).toHaveBeenCalled();
    });
    it("withdraw delegates to Log.addToHistory", () => {
      account = new Account(log, transaction, statement);
      log.addToHistory.and.callFake(function () {
        return {};
      });
      account.withdraw();
      expect(account._log.addToHistory).toHaveBeenCalled();
    });
  });

  describe("deposit function", () => {
    it("deposit delegates to Transaction.deposit", () => {
      account = new Account(log, transaction, statement);
      transaction.deposit.and.callFake(function () {
        return {};
      });
      account.deposit();
      expect(account._transaction.deposit).toHaveBeenCalled();
    });
    it("deposit delegates to Log.addToHistory", () => {
      account = new Account(log, transaction, statement);
      log.addToHistory.and.callFake(function () {
        return {};
      });
      account.deposit();
      expect(account._log.addToHistory).toHaveBeenCalled();
    });
  });

  describe("statement function", () => {
    it("statement delegates to Statement.print", () => {
      account = new Account(log, transaction, statement);
      statement.print.and.callFake(function () {});
      account.statement();
      expect(account._statement.print).toHaveBeenCalled();
    });
  });
});
