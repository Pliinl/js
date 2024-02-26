/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 *
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 *
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 *
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
  constructor(ownerName, vehicleType, cylinderCapacity, cost) {
    this.ownerName = ownerName;//Tên chủ sở hữu
    this.vehicleType = vehicleType; //Loại phương tiện
    this.cylinderCapacity = cylinderCapacity;// Dung tích xy lanh
    this.cost = cost;// Trị giá
  }
  taxValue() {
    let taxValue = 0; // Giá trị thuế

    if (this.cylinderCapacity < 100) {
      taxValue = 0.01 * this.cost;
    } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
      taxValue = 0.03 * this.cost;
    } else {
      taxValue = 0.05 * this.cost;
    }

    return taxValue;
  }
  showInfo() { // Hiển thị thông tin
    console.log("-----------");
    console.log(`OwnerName: ${this.ownerName}`);
    console.log(`VehicleType: ${this.vehicleType}`);
    console.log(`CylinderCapacity: ${this.cylinderCapacity}`);
    console.log(`Cost: ${this.cost}`);
    console.log(`Tax Value: ${this.taxValue()}`);
    console.log("-----------");
  }
}
vehicle1 = new Vehicle("Nguyen Van A","Wave", "125", "95000000");
vehicle2 = new Vehicle("Nguyen Van B","SH", "150", "125000000");

vehicle1.showInfo();
vehicle2.showInfo();


