describe("log.js", () => {
  let log;
  beforeEach(() => {
    log = new Log();
  });

  it("Log can be initialized", () => {
    expect(log).toBeInstanceOf(Log);
  });

  describe("function not to be undefined for", () => {
    it("addToHistory", () => {
      expect(log.addToHistory).not.toBeUndefined();
    });
    it("getHistory", () => {
      expect(log.getHistory).not.toBeUndefined();
    });
  });

  describe("addToHistory function", () => {
    it("displays 'credited to' success message on deposit", () => {
      const date = new Date("2020-03-02");
      const logToAdd = { credit: 1000, date: date, balance: 2000 };
      expect(log.addToHistory(logToAdd)).toEqual(
        "successfully credited to your account"
      );
    });
    it("displays 'debited from' success message on withdrawal", () => {
      const date = new Date("2020-03-02");
      const logToAdd = { debit: 1000, date: date, balance: 2000 };
      expect(log.addToHistory(logToAdd)).toEqual(
        "successfully debited from your account"
      );
    });
  });
  describe("getHistory function", () => {
    it("returns history", () => {
      const date = new Date("2020-03-02");
      const logToAdd = { debit: 1000, date: date, balance: 2000 };
      log.addToHistory(logToAdd);
      expect(log.getHistory().length).toEqual(1);
    });
  });
});
