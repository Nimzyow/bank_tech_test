describe("Statement.js", () => {
  let statement;
  beforeEach(() => {
    statement = new Statement();
  });
  it("initializes without error", () => {
    expect(statement).toBeInstanceOf(Statement);
  });
  describe("function to not be undefined for", () => {
    it("print", () => {
      expect(statement.print).not.toBeUndefined();
    });
  });
  describe("print function", () => {
    it("prints empty balance correctly", () => {
      const history = [];
      expect(statement.print(history)).toEqual(
        "\nDate\t\t||\t\tCredit\t\t||\t\tDebit\t\t||\t\tBalance\t\t\n"
      );
    });
    it("prints entry of 1 log correctly", () => {
      let dateConverted = new Date("2020-02-03");
      const history = [{ credit: 1000, date: dateConverted, balance: 1000 }];
      expect(statement.print(history)).toEqual(
        "\nDate\t\t||\t\tCredit\t\t||\t\tDebit\t\t||\t\tBalance\t\t\n" +
          "2020-2-3\t||\t\t1000.00\t\t||\t\t\t\t\t||\t\t1000.00\n"
      );
    });
    it("prints entry of 2 logs from credit correctly", () => {
      let dateConverted = new Date("2020-02-03");
      let dateConverted2 = new Date("2020-02-04");
      const history = [
        { credit: 1000, date: dateConverted2, balance: 4000 },
        { credit: 2000, date: dateConverted, balance: 3000 },
      ];
      expect(statement.print(history)).toEqual(
        "\nDate\t\t||\t\tCredit\t\t||\t\tDebit\t\t||\t\tBalance\t\t\n" +
          "2020-2-4\t||\t\t1000.00\t\t||\t\t\t\t\t||\t\t4000.00\n" +
          "2020-2-3\t||\t\t2000.00\t\t||\t\t\t\t\t||\t\t3000.00\n"
      );
    });

    it("prints entry of 2 logs from credit and 1 from debit correctly", () => {
      let dateConverted = new Date("2020-02-03");
      let dateConverted2 = new Date("2020-02-04");
      let dateConverted3 = new Date("2020-02-05");
      const history = [
        { debit: 1000, date: dateConverted3, balance: 3000 },
        { credit: 1000, date: dateConverted2, balance: 4000 },
        { credit: 2000, date: dateConverted, balance: 3000 },
      ];
      expect(statement.print(history)).toEqual(
        "\nDate\t\t||\t\tCredit\t\t||\t\tDebit\t\t||\t\tBalance\t\t\n" +
          "2020-2-5\t||\t\t\t\t\t||\t\t1000.00\t\t||\t\t3000.00\n" +
          "2020-2-4\t||\t\t1000.00\t\t||\t\t\t\t\t||\t\t4000.00\n" +
          "2020-2-3\t||\t\t2000.00\t\t||\t\t\t\t\t||\t\t3000.00\n"
      );
    });
  });
});
