describe("Account.js", () => {
  describe("function not to be undefined for", () => {
    it("withdraw", () => {
      const account = new Account();
      expect(account.withdraw).not.toBeUndefined();
    });
  });
});
