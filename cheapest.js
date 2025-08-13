// !  Find the cheapest phone from an array of phone objects
function cheapest(phones) {
  if (phones.length === 0) return null; // Handle empty array case

  let minPricePhone = phones[0].price; // Assume the first phone is the cheapest initially

  for (let i = 1; i < phones.length; i++) {
    if (phones[i].price < minPricePhone) {
      minPricePhone = phones[i].price; // Update minPricePhone if a cheaper phone is found
    }
  }

  return minPricePhone; // Return the cheapest phone found
}
const phones = [
  { name: "Phone A", price: 300 },
  { name: "Phone B", price: 100 },
  { name: "Phone C", price: 250 },
  { name: "Phone D", price: 150 },
  { name: "Phone E", price: 400 },
];
console.log(cheapest(phones)); // Output: { name: 'Phone D', price: 150 }
