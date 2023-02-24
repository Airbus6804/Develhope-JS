function sum(...nums) {
  return nums.reduce((total, now) => total + now, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
