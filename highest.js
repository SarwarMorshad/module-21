// Highest value in an array
function highest(phones) {
  if (phones.length === 0) return null; // Handle empty array case

  let maxPricePhone = phones[0]; // Assume the first phone is the highest initially

  for (let i = 1; i < phones.length; i++) {
    if (phones[i].price > maxPricePhone.price) {
      maxPricePhone = phones[i]; // Update maxPricePhone if a higher priced phone is found
    }
  }

  return maxPricePhone; // Return the highest priced phone found
}

const phones = [
  { name: "Phone A", price: 300 },
  { name: "Phone B", price: 100 },
  { name: "Phone C", price: 250 },
  { name: "Phone D", price: 150 },
  { name: "Phone E", price: 400 },
];
console.log(highest(phones)); // Output: { name: 'Phone E', price:
