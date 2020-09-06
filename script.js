let vorona = ['01', '21','31','41','51','61','71','81','91','101']
let voroni = ['02','03','04',22,23,24,32,33,34,42,43,44,52,53,54,62,63,64,72,73,74,82,83,84,92,93,94]
let voron  = ['00','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30,35,36,37,38,39,40,45,46,47,48,49,50,55,56,57,58,59,60,65,66,67,68,69,70,75,76,77,78,79,80,85,86,87,88,89,90,95,96,97,98,99]
function crowsAndPencils(n) {
  n += "";
  if (n < 10 && n > -10) {
    let newNum = '0' + Math.abs(n)
    if (vorona.find((el) => el == newNum)) {
      return n + " ворона ";
    } else if (voroni.find((el) => el == newNum)) {
      return n + " вороны";
    } else if (voron.find((el) => el == newNum)) {
      return n + " ворон";
    }
  } else {
    let arr = n.split("");
    let newNum = arr[arr.length - 2] + arr[arr.length - 1];
    if (vorona.find((el) => el == newNum)) {
      return n + " ворона";
    } else if (voroni.find((el) => el == newNum)) {
      return n + " вороны";
    } else if (voron.find((el) => el == newNum)) {
      return n + " ворон";
    }
  }
}
console.log(crowsAndPencils(0));
console.log(crowsAndPencils(1));
console.log(crowsAndPencils(2));
console.log(crowsAndPencils(5));
console.log(crowsAndPencils(101));
console.log(crowsAndPencils(-1));
console.log(crowsAndPencils(-5));
console.log(crowsAndPencils(-1862589));
console.log(crowsAndPencils(-232140000));
console.log(crowsAndPencils(-542142101));