// Thêm số vào mảng
var listNumber = [];
function BT78() {
  var number = Number(document.getElementById("number").value);
  listNumber.push(number);
  document.getElementById("themSo").innerHTML = listNumber;
}

// bài 1: tổng các số dương trong mảng
function Bai1() {
  var result1 = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 0) {
      result1 += listNumber[i];
    }
  }
  document.getElementById("Bai1").innerHTML = "Tổng số dương: " + result1;
}

// bài 2: Đếm có bao nhiêu số dương trong mảng
function Bai2() {
  var result2 = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 0) {
      result2 += 1;
    }
  }
  document.getElementById("Bai2").innerHTML = "Số dương: " + result2;
}

// bài 3: Tìm số nhỏ nhất trong mảng
function Bai3() {
  var result3 = listNumber[0];
  for (var i = 1; i < listNumber.length; i++) {
    if (result3 > listNumber[i]) {
      result3 = listNumber[i];
    }
  }
  document.getElementById("Bai3").innerHTML = "Số nhỏ nhất: " + result3;
}

// bài 4: Tìm số dương nhỏ nhất trong mảng.
function Bai4() {
  var listNumber4 = listNumber.filter((number) => number > 0);
  if (listNumber4.length === 0) {
    document.getElementById("Bai4").innerHTML = "Không có số dương trong mảng";
    return;
  }
  var min4 = listNumber4[0];
  for (var i = 1; i < listNumber4.length; i++) {
    if (min4 > listNumber4[i]) {
      min4 = listNumber4[i];
    }
  }
  document.getElementById("Bai4").innerHTML = "Số dương nhỏ nhất: " + min4;
}

// bài 5:
function Bai5() {
  for (var i = listNumber.length - 1; i >= 0; i--) {
    if (listNumber[i] % 2 == 0) {
      document.getElementById("Bai5").innerHTML =
        "Số chẵn cuối cùng: " + listNumber[i];
      break;
    } else {
      document.getElementById("Bai5").innerHTML = "-1";
    }
  }
}

// bài 6:
function Bai6() {
  var viTri1 = Number(document.getElementById("viTri1").value);
  var viTri2 = Number(document.getElementById("viTri2").value);
  // var temp = listNumber[viTri1];
  // listNumber[viTri1] = listNumber[viTri2];
  // listNumber[viTri2] = temp;
  listNumber[viTri1] += listNumber[viTri2];
  listNumber[viTri2] = listNumber[viTri1] - listNumber[viTri2];
  listNumber[viTri1] -= listNumber[viTri2];
  result6 = "Mảng sau khi đổi: " + listNumber;
  document.getElementById("Bai6").innerHTML = result6;
}

// bài 7:
function Bai7() {
  var result7 = listNumber.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("Bai7").innerHTML =
    "Mảng sau khi sắp xếp: " + result7;
}

// bài 8
function Bai8() {
  for (var i = 0; i < listNumber.length; i++) {
    var check = KiemtraSNT(listNumber[i]);
    if (check == true) {
      var result8 = "Số nguyên tố đầu tiên: " + listNumber[i];
      break;
    } else {
      result8 = -1;
    }
  }
  document.getElementById("Bai8").innerHTML = result8;
}
function KiemtraSNT(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Bài 9
var listNumber9 = [];
function Bai9themso() {
  var number9 = Number(document.getElementById("number9").value);
  listNumber9.push(number9);
  document.getElementById("themSobai9").innerHTML = listNumber9;
}

function Bai9() {
  var dem9 = 0;
  for (var i = 0; i < listNumber9.length; i++) {
    if (Number.isInteger(listNumber9[i])) {
      dem9 += 1;
    }
  }
  var result9 = "Số nguyên: " + dem9;
  document.getElementById("Bai9").innerHTML = result9;
}

// Bài 10
function Bai10() {
  var sosanh = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      sosanh += 1;
    } else if (listNumber[i] < 0) {
      sosanh -= 1;
    }
  }
  var result10 = "";
  if (sosanh > 0) {
    result10 = "Số âm < Số Dương";
  } else if (sosanh < 0) {
    result10 = "Số âm > Số dương";
  } else {
    result10 = "Số âm = Số dương";
  }
  document.getElementById("Bai10").innerHTML = result10;
}
