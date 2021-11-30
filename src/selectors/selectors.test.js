import { filteredUsersSelector } from "./selectors";

describe("filteredUsersSelector", () => {
  it("should return two of users", () => {
    const result = filteredUsersSelector.resultFunc(
      [{ name: "John" }, { name: "Jaren" }, { name: "Briana" }],
      "J"
    );
    expect(result).toEqual([{ name: "John" }, { name: "Jaren" }]);
  });
});
