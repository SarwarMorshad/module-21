// ! Who is the tallest? Find the max number in an array
function tallest(people) {
  if (people.length === 0) return null; // Handle empty array case

  let maxHeight = people[0]; // Assume the first person is the tallest initially

  for (let i = 1; i < people.length; i++) {
    if (people[i] > maxHeight) {
      maxHeight = people[i]; // Update maxHeight if a taller person is found
    }
  }

  return maxHeight; // Return the tallest height found
}

const peopleHeights = [160, 200, 180, 175, 190, 165];
console.log(tallest(peopleHeights)); // Output: 190
