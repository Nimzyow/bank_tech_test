describe("Statement.js", () => {
  it("initializes without error", () => {
    const statement = new Statement();
    expect(statement).toBeInstanceOf(Statement);
  });
  it("print not to be undefined", () => {
    const statement = new Statement();
    expect(statement.print).not.toBeUndefined();
  });
});
