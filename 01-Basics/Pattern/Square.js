let side = 5;

let str = "";

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    str += " *";
  }
  console.log(str);
  str = "";
}
