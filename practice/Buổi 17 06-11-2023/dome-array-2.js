let nameList = ["Anne", "Balle", "Chirs", "Dan"];

// Duyệt từng phần tử bên trong Mảng
document.write(`Danh sách phần tử trong nameList : <br?`);

// Vòng lặp For
//for (let i = 0; i < nameList.length; i++); {
//    document.write(`${nameList[i]} <br>`);
//}

// Vòng lặp For-in
for (let i in nameList) {
    document.write(`${nameList[i]} <br>`);
}
let content = "HelloWork";
for (let i = 0; i < content.length; i++) {
    console.log(content);
}

