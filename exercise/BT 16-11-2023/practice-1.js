/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 *
 * Ví dụ:
 * isLeapYear(2016)
 *
 * Output:
 * false
 *  */

// cách 1:
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLeapYear(2016));

// Cách 2:
function isLeapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return true;
  else return false;
}
console.log(isLeapYear(2016));
