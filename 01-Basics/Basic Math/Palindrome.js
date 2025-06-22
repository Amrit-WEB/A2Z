function PalindromeString(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
//Time Complexity : O(N) , Space Complexity : O(1)

function PalindromeNumber(number) {
  //Retain original number
  let temp = number;

  //Reverse that number
  let remainder = 0;
  while (number !== 0) {
    remainder += number % 10;
    remainder *= 10;

    number = Math.floor(number / 10);
  }
  remainder = remainder / 10;

  //Check for palindrome
  if (remainder === temp) {
    return true;
  } else {
    return false;
  }
}

//Test Examples
console.log(PalindromeString("abac"));
console.log(PalindromeString("aba"));
console.log(PalindromeNumber(12321));
console.log(PalindromeNumber(123));
