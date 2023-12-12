// TEST CODE
const { totalCost, createReceipt } = require("../src/cohortSearch.js");

describe("Total Cost", () => {
  it("Calculates total cost with items", () => {
    const basket = [
      {
        name: "Apple",
        price: 1.75,
        quantity: 2,
      },
      {
        name: "Pear",
        price: 2,
        quantity: 1,
      },
    ];

    const result = totalCost(basket);

    expect(result).toEqual(5.5);
  });
});

describe("Total Cost", () => {
  it("Calculates total cost without items", () => {
    const basket = [];

    const result = totalCost(basket);

    expect(result).toEqual(0);
  });
});

describe("Create Receipt", () => {
  it("creates a reciept if there are items", () => {
    const basket = [
      {
        name: "Apple",
        price: 1.75,
        quantity: 2,
      },
      {
        name: "Pear",
        price: 2,
        quantity: 1,
      },
    ];

    const result = createReceipt(basket);

    expect(result).toEqual(
      "2 Apples at £1.75 each, 1 pear at £2 each. Total: £5.5"
    );
  });
});

describe("Create Receipt", () => {
  it("creates a reciept if there are not items", () => {
    const basket = [];

    const result = createReceipt(basket);

    expect(result).toEqual("No items in basket");
  });
});
