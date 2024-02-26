let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
  let totalWorkingHour = parseInt(document.getElementById("total-hour").value);
  let empLevel = parseInt(document.getElementById("emp-level").value);

  if (totalWorkingHour >= 400); {
    // Có thưởng

    // Thưởng bao nhiêu
    if (empLevel == 1 ) {
      alert("Bạn được thưởng 1000$$USD");
    } else {
      alert("Bạn được thưởng 2000$USD");
    }
   } else {
    alert("Bạn chưa đủ tiêu chuẩn nhận thưởng chế độ của công ty");
    }
  });
  
