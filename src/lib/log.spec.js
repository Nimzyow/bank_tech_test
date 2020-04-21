describe("log.js", () => {
  it("Log can be initialized", () => {
    const log = new Log();
    expect(log).toBeInstanceOf(Log);
  });

  describe("function not to be undefined for", () => {
    let log;
    beforeEach(() => {
      log = new Log();
    });
    it("addToHistory", () => {
      expect(log.addToHistory).not.toBeUndefined();
    });
    it("getHistory", () => {
      expect(log.getHistory).not.toBeUndefined();
    });
  });
  describe("addToHistory function", () => {
    it("adds log to history", () => {
      const log = new Log();
      const date = new Date("2020-03-02");
      const logToAdd = { credit: 1000, date: date, balance: 2000 };
      log.addToHistory(logToAdd);
      expect(log.getHistory()).toEqual([
        {
          credit: 1000,
          date: date,
          balance: 2000,
        },
      ]);
    });
  });
});
