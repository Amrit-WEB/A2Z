function ReverseNumber(number) {
  let remainder = 0;

  while (number !== 0) {
    remainder += number % 10;
    remainder *= 10;

    number = Math.floor(number / 10);
  }
  return remainder / 10;
}

console.log(ReverseNumber(1234));
console.log(ReverseNumber(10400));
