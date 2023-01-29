let users = [
  {
    id: 1,
    name: "userA",
  },
  {
    id: 2,
    name: "userB",
  },
];

// Mock - get all products
const getUsers = () => {
  return users;
};

module.exports = { getUsers };
