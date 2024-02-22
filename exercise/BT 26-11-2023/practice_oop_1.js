/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 *
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle {
  constructor(width, length) {
    this.length = length; //Dài
    this.width = width;//Rộng
  }

  area() {
    return this.width * this.length;
  }

  perimeter() { //Chu vi
    return (this.length + this.width) * 2;
  }
  showInfo() {
    console.log("----------");
    console.log(`Length:${this.length}`);
    console.log(`Width:${this.width}`);
    console.log(`Perimeter:${this.perimeter()}`);
    console.log(`Area:${this.area()}`);
    console.log("----------");
  }
}
rec1 = new Rectangle(100, 50);
rec2 = new Rectangle(20, 10);

rec1.showInfo();
rec2.showInfo();