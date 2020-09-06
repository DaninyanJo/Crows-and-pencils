
let arr1 = [10 ,11 , 12 , 13 , 14]
let arr2 = [5 , 6 , 7 , 8 , 9]
let arr3 = [2 , 3 , 4]
function getEnding(num) {
  if ( arr1.find(i => i == num % 100)) {
    return num + " ворон";
  } else if (arr2.find(i => i == num % 10)) {
    return num + " ворон";
  } else if (arr3.find(i => i == num % 10)) {
    return num + " вороны";
  } else if (num % 10 == 1) {
    return num + " ворона";
  } else if (num % 10 == 0) {
    return num + " ворон";
  }
}
console.log(getEnding(0))