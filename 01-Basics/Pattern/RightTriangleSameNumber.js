let side = 5;
let str = "";
for (let i = 1; i <= side; i++) {
  for (let j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
  str = "";
}
