let canvas = document.getElementById("sample-canvas");

let context = canvas.getContext("2d");
// Image
let image = new Image();
image.onload = () => {
  context.drawImage(image, 0, 0);
};
image.src = "c:UserslehonOneDriveHình ảnh\tải xuống.jpg";

// Rectangle: Hình chữ nhật
context.fillStyle = "blue";
context.fillRect(150, 150, 200, 100);

// Circle: Hình tròn
// arc(x ,y, radius,startAngle, endAngle)
context.fillStyle = "green";
context.beginPath();
context.arc(150, 100, 40, Math.PI, 2 * Math.PI);
// context.stroke();
context.fill();

context.beginPath();
context.arc(350, 100, 40, Math.PI, 2 * Math.PI);
// context.stroke();
context.fill();

// Text
context.font = "30px Arial";
context.fillText("Hello Canvas!", 160, 290);
