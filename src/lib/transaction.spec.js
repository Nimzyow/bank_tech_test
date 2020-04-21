describe("Transaction.js", () => {
  it("can be instantiated", () => {
    const transaction = new Transaction();
    expect(transaction).toBeInstanceOf(Transaction);
  });
  describe("function not to be undefined for", () => {
    it("withdrawal", () => {
      const transaction = new Transaction();
      expect(transaction.withdrawal).not.toBeUndefined();
    });
    it("deposit", () => {
      const transaction = new Transaction();
      expect(transaction.deposit).not.toBeUndefined();
    });
  });
  //TODO: amend test to also include balance in object.
  describe("withdraw function", () => {
    let transaction;
    beforeEach(() => {
      transaction = new Transaction();
    });
    it("to return object with withdrawal amount, date and balance", () => {
      const history = [
        { credit: 2000, date: new Date("2020-02-01"), balance: 2000 },
      ];
      let date = new Date("2020-02-03");
      expect(transaction.withdrawal(1000, "2020-02-03", history)).toEqual({
        debit: 1000,
        date: date,
        balance: 1000,
      });
    });
    it("to return object with withdrawal amount, date and balance of 3000", () => {
      const history = [
        { credit: 2000, date: new Date("2020-02-01"), balance: 2000 },
        { credit: 1000, date: new Date("2020-02-02"), balance: 3000 },
        { credit: 1000, date: new Date("2020-02-03"), balance: 4000 },
      ];
      expect(transaction.withdrawal(2000, "2020-02-04", history)).toEqual({
        debit: 2000,
        date: new Date("2020-02-04"),
        balance: 2000,
      });
    });
    it("to throw error if no history is logged when withdrawing", () => {
      const history = [];
      expect(() =>
        transaction.withdrawal(1000, "2020-02-05", history)
      ).toThrowError("Please make your first deposit before withdrawing money");
    });
    it("to throw error if balance is less than withdrawal amount", () => {
      const history = [
        { credit: 1000, date: new Date("2020-02-01"), balance: 1000 },
      ];
      expect(() =>
        transaction.withdrawal(2000, "2020-02-05", history)
      ).toThrowError(
        "not enough money in your account to withdraw that amount"
      );
    });
  });
});
