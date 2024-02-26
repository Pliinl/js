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
// Cách 1:
class Vehicle {
  constructor(vehicleID, ownerName, vehicleType, cylinderCapacity, cost) {
    this.vehicleID = vehicleID; // Mã xe
    this.ownerName = ownerName; // Owner Name: Tên chủ sở hữu
    this.vehicleType = vehicleType; // vehicle Type: Loại phương tiện
    this.cylinderCapacity = cylinderCapacity; //Cylinder Capacity: Dung tích xy lanh
    this.cost = cost; //Cost: Trị giá
  }
  taxValue() {
    let taxValue = 0; //TaxValue: Giá trị thuế

    if (this.cylinderCapacity < 100) {
      taxValue = 0.01 * this.cost;
    } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
      taxValue = 0.03 * this.cost;
    } else {
      taxValue = 0.05 * this.cost;
    }

    return taxValue;
  }
  showInfo() {
    //ShowInfo: Hiển thị thông tin
    console.log("-----------");
    console.log(`Vehicle ID: ${this.vehicleID}`);
    console.log(`OwnerName: ${this.ownerName}`);
    console.log(`VehicleType: ${this.vehicleType}`);
    console.log(`CylinderCapacity: ${this.cylinderCapacity}`);
    console.log(`Cost: ${this.cost}`);
    console.log(`Tax Value: ${this.taxValue()}`);
    console.log("-----------");
  }
}
// vehicle1 = new Vehicle("Nguyen Van A","Wave", "125", "95000000");
// vehicle2 = new Vehicle("Nguyen Van B","SH", "150", "125000000");

// vehicle1.showInfo();
// vehicle2.showInfo();
function addVehicle() {
  //Function: Chức năng - AddVehicle: Thêm xe
  let vehicleID = document.getElementById("vehicle-id").value;
  let ownerName = document.getElementById("owner-name").value;
  let vehicleType = document.getElementById("vehicle-type").value;
  let cylinderCapacity = parseInt(
    document.getElementById("cylinder-capacity").value
  );
  let cost = parseFloat(document.getElementById("cost").value); // Parsefloat: Phân tích cú pháp
  // create new vehicle object: tạo đối tượng xem mới
  let newVehicle = new Vehicle(
    vehicleID,
    ownerName,
    vehicleType,
    cylinderCapacity,
    cost
  );
  // add new object to array: thêm đối tượng mới vào mảng
  vehicleArray.push(newVehicle);

  alert("Vehicle is added successfully! - Xe đã được thêm thành công!"); // Xe đã được thêm thành công
  console.log(vehicleArray);

  updateVehicleTable(vehicleArray);
}

function searchVehicle() {
  let searchID = document.getElementById("search-value").value;

  for (let i in vehicleArray) {
    let vehicle = vehicleArray[i];
    if (vehicle.vehicleID == searchID) {
      vehicle.showInfo();
      alert(
        `Owner Name - Tên chủ sở hữu: ${
          vehicle.ownerName
        }.\n Vehicle Type - Loại phương tiện: ${
          vehicle.vehicleType
        }.\nCylinder Capacity: Dung tích xy lanh: ${
          vehicle.cylinderCapacity
        }.\n Tax Vlaue - Giá trị thuế: ${vehicle.taxValue()}`
      );
      break;
    }
  }
}

function deleteVehicle() {
  let searchID = document.getElementById("search-value").value;

  for (let i in vehicleArray) {
    let vehicle = vehicleArray[i];
    if (vehicle.vehicleID == searchID) {
      // TOOO: delete item at index in array: xóa mục tại chỉ mục trong mảng
      vehicleArray.splice(i, 1);
      alert("Vehicle is deleted successfully! - Xe đã được xóa thành công!");
      updateVehicleTable(vehicleArray);
      break;
    }
  }
}

function updataVehicle() {
  let vehicleID = document.getElementById("vehicle-id").value;
  let ownerName = document.getElementById("owner-name").value;
  let vehicleType = document.getElementById("vehicle-type").value;
  let cylinderCapacity = parseInt(
    document.getElementById("cylinder-capacity").value
  );
  let cost = parseFloat(document.getElementById("cost").value);
  // Parsefloat: Phân tích cú pháp

  for (let i in vehicleArray) {
    let vehicle = vehicleArray[i];
    if (vehicle.vehicleID == vehicleID) {
      vehicle.ownerName = ownerName;
      vehicle.vehicleType = vehicleType;
      vehicle.cylinderCapacity = cylinderCapacity;
      vehicle.cost = cost;
      alert(
        "Vehicle is updated successfully!- Xe đã được cập nhật thành công!"
      );
      updateVehicleTable(vehicleArray);
      break;
    }
  }
}

// Update vehicle table based on data array: Cập nhật bảng xe dựa trên mảng dữ liệu
function updateVehicleTable(data) {
  let tableElem = document.getElementById("vehicle-table");
  tableElem.remove();

  // Create new table again: Tạo lại bảng mới
  let newTableElem = document.createElement("table");

  // Set ID for new table: Đặt ID cho bảng mới
  newTableElem.setAttribute("id", "vehicle-table");

  //Create heading row: Tạo hàng tiêu đề
  let newRowElem = document.createElement("tr");
  let heading1 = document.createElement("th");
  let heading2 = document.createElement("th");
  let heading3 = document.createElement("th");
  let heading4 = document.createElement("th");
  let heading5 = document.createElement("th");
  let heading6 = document.createElement("th");

  heading1.innerText = "No.";
  heading2.innerText = "Owner Name";
  heading3.innerText = "Vehicle Type";
  heading4.innerText = "Cylinder Capacity";
  heading5.innerText = "Cost";
  heading6.innerText = "Tax Value";

  newRowElem.appendChild(heading1);
  newRowElem.appendChild(heading2);
  newRowElem.appendChild(heading3);
  newRowElem.appendChild(heading4);
  newRowElem.appendChild(heading5);
  newRowElem.appendChild(heading6);

  // Append row to table: Nối hàng vào bảng
  newTableElem.appendChild(newRowElem);

  // Add data row: Thêm hàng dữ liệu
  for (let i in data) {
    let vehicle = data[i];
    newRowElem = document.createElement("tr");
    let info1 = document.createElement("td");
    let info2 = document.createElement("td");
    let info3 = document.createElement("td");
    let info4 = document.createElement("td");
    let info5 = document.createElement("td");
    let info6 = document.createElement("td");

    info1.innerText = i;
    info2.innerText = vehicle.ownerName;
    info3.innerText = vehicle.vehicleType;
    info4.innerText = vehicle.cylinderCapacity;
    info5.innerText = vehicle.cost;
    info6.innerText = vehicle.taxValue();

    newRowElem.appendChild(info1);
    newRowElem.appendChild(info2);
    newRowElem.appendChild(info3);
    newRowElem.appendChild(info4);
    newRowElem.appendChild(info5);
    newRowElem.appendChild(info6);

    // Append row to table: Nối hàng vào bảng
    newTableElem.appendChild(newRowElem);
  }
  document.body.appendChild(newTableElem);
}

let vehicleArray = [];
