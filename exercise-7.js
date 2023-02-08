function sumUntil(maxValue) {
  let ret = 0;
  for(let i = 1; i <= maxValue; i++) ret += i;
  return ret;
}

console.log(sumUntil(5));