function Armstrong(number) {
  let digit = Math.floor(Math.log10(number) + 1);
  let sum = 0;
  let original = number;

  while (number !== 0) {
    sum += Math.pow(number % 10, digit);
    number = Math.floor(number / 10);
  }

  if (sum === original) {
    return true;
  } else {
    return false;
  }
}

console.log(Armstrong(153));
console.log(Armstrong(1534));
