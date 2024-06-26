/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  for (let i = 0; i < transactions.length; i++) {
    // const element = transactions[i];
    const { category, price } = transactions[i];

    if (!totalSpentByCategory[category]) {
      totalSpentByCategory[category] = price; //creating a list of category and price
    } else {
      totalSpentByCategory[category] += price;
    }
  }
  //making a seperate list of category and price in a resultant list
  const resultList = Object.keys(totalSpentByCategory).map((category) => ({
    category,
    totalSpent: totalSpentByCategory[category],
  }));

  return resultList;
}
// if we print totalSpentByCategory we'll get similar output in different way

module.exports = calculateTotalSpentByCategory;

// const Transactions=[
//   {
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// },
//   {
//     id: 2,
//     timestamp: 1656076800000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Pizza',
//   },  {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 100,
//     category: 'Gym',
//     itemName: 'Pizza',
//   }]

// console.log(calculateTotalSpentByCategory(Transactions));
