let product = [
  {
    id: 1,
    summmary: "productA",
    price: { value: 12, variation: "white" },
    description: "the best product in the shop",
    rating: 5,
    feature: ["clean", "clear"],
    care: ["easy clean", "easy care"],
    shipping: "free shipping",
    returns: "free return within 30 day of purchase",
  },
];

const getProducts = () => {
  return product;
};

module.exports = { getProducts };
