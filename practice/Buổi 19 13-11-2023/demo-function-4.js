/*
 * Viết hàm isValidAge() nhận vào năm sinh và kiểm tra xem
 * Người dùng đã đủ 18 tuổi hay chưa
 * Trả kết quả kiểm tra về chương trình chính.
 */
yearOfBirth = 2005;
function isValidAge(yearOfBirth) {
  let currentYear = new Date().getFullYear();
  console.log(`Current year: ${currentYear}`);
  let result;
  if (currentYear - yearOfBirth >= 18) {
    result = true;
  } else {
    result = false;
  }
  // Trả kết quả về chương trình chính
  return result;
}
let testAgeResult = isValidAge(yearOfBirth);
console.log(testAgeResult);
