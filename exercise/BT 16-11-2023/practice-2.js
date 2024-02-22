/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 *
 * Ví dụ:
 * calcFactorial(4)
 *
 * Output:
 * 24
 *
 * */

// Cách 1:
// function calcFactorial(number) {
//   var calcFactorial = 1;
//   for (let i = 1; i <= number; i++) {
//     calcFactorial *= i;
//   }
//   return calcFactorial;
// }

// console.log(calcFactorial(4));

// Cách 2:
function calcFactorial(number) {
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= 1;
  }
  return factorial;
}
console.log(calcFactorial(5));
