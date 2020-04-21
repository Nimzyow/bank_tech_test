describe("Transaction.js", () => {
  let transaction;
  beforeEach(() => {
    transaction = new Transaction();
  });

  it("can be instantiated", () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });

  describe("function not to be undefined for", () => {
    it("withdrawal", () => {
      expect(transaction.withdrawal).not.toBeUndefined();
    });
    it("deposit", () => {
      expect(transaction.deposit).not.toBeUndefined();
    });
  });

  describe("withdraw function", () => {
    it("to return object with withdrawal amount, date and balance", () => {
      const history = [
        { credit: 2000, date: new Date("2020-02-01"), balance: 2000 },
      ];
      let dateSend = new Date("2020-02-03");
      expect(transaction.withdrawal(1000, dateSend, history)).toEqual({
        debit: 1000,
        date: dateSend,
        balance: 1000,
      });
    });
    it("to return object with withdrawal amount, date and balance of 3000", () => {
      const history = [
        { credit: 2000, date: new Date("2020-02-01"), balance: 2000 },
        { credit: 1000, date: new Date("2020-02-02"), balance: 3000 },
        { credit: 1000, date: new Date("2020-02-03"), balance: 4000 },
      ];
      let dateSend = new Date("2020-02-04");
      expect(transaction.withdrawal(2000, dateSend, history)).toEqual({
        debit: 2000,
        date: dateSend,
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
  describe("deposit function", () => {
    it("to return object with withdrawal amount, date and balance", () => {
      const history = [];
      let dateSend = new Date("2020-02-03");
      expect(transaction.deposit(1000, dateSend, history)).toEqual({
        credit: 1000,
        date: dateSend,
        balance: 1000,
      });
    });
    it("to return object with withdrawal amount, date and 3000 balance", () => {
      const history = [
        { credit: 1000, date: new Date("2020-02-01"), balance: 1000 },
        { credit: 1000, date: new Date("2020-02-02"), balance: 2000 },
      ];
      let dateSend = new Date("2020-02-06");
      expect(transaction.deposit(1000, dateSend, history)).toEqual({
        credit: 1000,
        date: dateSend,
        balance: 3000,
      });
    });
  });
});
