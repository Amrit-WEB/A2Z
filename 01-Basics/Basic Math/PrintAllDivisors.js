function PrintAllDivisors(number) {
  let divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
//Time Complexity : O(N) , Space Complexity : O(N)

function DivisorsOptimal(number) {
  let divisors = [];
  let sqrtN = Math.sqrt(number);
  console.log(sqrtN);
  for (let i = 1; i <= sqrtN; i++) {
    if (number % i === 0) {
      divisors.push(i);
      if (i !== number / i) {
        divisors.push(number / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}
//Time Complexity : O(sqrt(N)) , Space Complexity : O(sqrt(N))

//Test Example
console.log(PrintAllDivisors(6));
console.log(PrintAllDivisors(278));
console.log(DivisorsOptimal(278));
console.log(DivisorsOptimal(27));
