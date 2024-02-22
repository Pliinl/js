/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 *
 * Ví dụ:
 * isPrimeNumber(4)
 *
 * Output:
 * false
 *
 * */

// Cách 1:
// function isPrimeNumber(number) {
//   if (number <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// console.log(isPrimeNumber(4));

// Cách 2:
function isPrimeNumber(number) {
  let check = true; // assumption

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      check = false;
      break;
    }
  }
  return check;
}
// console.log(isPrimeNumber(5));
