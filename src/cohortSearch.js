// SOURCE CODE

const totalCost = (basket) => {
  let num = 0;
  basket.forEach((item) => (num += item.price * item.quantity));
  return num;
};

const createReceipt = (basket) => {
  if (basket.length > 1) {
    let recieptItems = [];

    for (let i = 0; i < basket.length; i++) {
      recieptItems.push(
        `${basket[i].quantity} ${
          basket[i].quantity > 1 ? `${basket[i].name}s` : basket[i].name
        } at £${basket[i].price} each --`
      );
    }

    return recieptItems.join(" ") + `- Total: £${totalCost(basket)}`;
  } else {
    return "No items in basket";
  }
};

module.exports = {
  totalCost,
  createReceipt,
};
