// Khai báo Mảng
let nameList = ["Anne", "Bella","Chirs", "Dan"];
let ageList = [19, 21, 20, 18];
let averageMarkList = [6.5, 7.5, 6.2, 7.2];
let hobbyList = [[],["music", "book"], ["badminton", "swimming"], ["movie"]];

document.write(`Name List of Student: ${nameList}<br>`);
document.write(`Age List of Student: ${ageList}<br><br>`);

// Kiểm tra kiểu dữu liệu
document.write(`Kiểu dữ liệu của Mảng nameList: ${typeof(nameList)}`);

// Truy vấn phần tử trong mảng
document.write(`Phần tử thứ 3 trong nameList: ${nameList[2]}`)
document.write("<br><br>");

// Chirs -> Colle
// Thay thế giá trị phần tử trong Mảng
document.write(`Mảng ban đầu : ${nameList}`);
nameList[2] = "Colle"; // Thảy đổi giá trị tại index 2
document.write("<br><br>");
document.write(`Mảng sau khi thay đổi giá trị: ${nameList}`);