//Brute Force Approach (By calculating Division)
function countDigitBrute(number) {
  let digit = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    digit++;
  }
  return digit;
}
//Time Complexity : O(N) , Space Complexity : O(1)

//Optimal Approach (By calculating (log10 N) + 1)
function countDigitOptimal(number) {
  return Math.floor(Math.log10(number) + 1);
}
//Time Complexity : O(1) , Space Complexity : O(1)

//Testing Examples
console.log(countDigitOptimal(12653));
console.log(countDigitOptimal(569));
console.log(countDigitBrute(45));
console.log(countDigitBrute(5785));
