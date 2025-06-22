let side = 5;
let str = "";

for (let j = 1; j <= side; j++) {
  for (let i = side; i >= j; i--) {
    str += " *";
  }
  console.log(str);
  str = "";
}
