describe("random Test", () => {
  it("not to be undefined", function () {
    const airport = new Airport();
    expect(airport.landPlane).not.toBeUndefined();
  });
  it("not tdas undefined", function () {
    const airport = new Airport();
    expect(airport.hello).not.toBeUndefined();
  });
  it("returns hello kate", () => {
    const airport = new Airport();
    expect(airport.hello()).toBe("hello kate");
  });
});
