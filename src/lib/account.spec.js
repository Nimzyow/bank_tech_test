describe("Account.js", () => {
  describe("function not to be undefined for", () => {
    let account;
    let log = jasmine.createSpy("log", ["history"]);
    beforeEach(() => {
      account = new Account(log);
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
      let log = jasmine.createSpy("log", ["history"]);
      account = new Account(log);
      expect(account.log()).toEqual(log);
    });
  });
});
