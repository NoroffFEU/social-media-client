import apple from "./apple";

describe("My apple", () => {
  it("is red and juicy", () => {
    expect(apple.color).toEqual("red");
    expect(apple.texture).toEqual("juicy");
  });

  it("is delicious", () => {
    expect(apple.rating).toBeGreaterThan(4);
  });

  it("is vegan friendly", () => {
    expect(apple.animalProduct).not.toBeTruthy();
  });
});