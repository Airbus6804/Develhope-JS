function sum(...nums) {
    return nums.reduce((total, now) => total + now, 0);
}

console.log(sum(1, 2, 3, 4, 5));