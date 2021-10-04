//  BÀI 1
/**
 * Khối 1 : Người dùng nhập số ngày làm 
 * Khối 2 : 
 * + Tạo hàm 
 * + Gọi tới các thẻ và lấy giá trị của thẻ
 * + Tạo biến tính tổng
 * + Gọi tới thẻ button và thêm sự kiện onclick cho thẻ 
 * + Hiển thị kết quả ra UI
 * Khối 3 : Hiển thị tổng ngày lương 
 */
function sumSalary() {
    var salary1 = document.getElementById("salary").value ;
    var dayWork = document.getElementById("day").value ;
    console.log(salary1,dayWork)
    var sum = salary1 * dayWork ;
    console.log(sum) ; 
    document.getElementById("total").value = new Intl.NumberFormat('vn-VN').format(sum) + " !! Bạn cần chăm chỉ hơn ^^"; 
}
document.getElementById("btnSalary").onclick = sumSalary ;

// Bài 2
/** 
 * Khối 1 : Nhập 5 số thực 
 * Khối 2 :
 * + Tạo hàm
 * + Gọi tới và lấy giá trị của thẻ ;
 * + Tính tổng của các thẻ ; 
 * + Gọi và thêm sự kiện onclick cho thẻ button
 * + Hiển thị giá trị trung bình ra UI
 * Khối 3 : Tính giá trị trung bình của 5 số và hiển thị ra màn hình
*/
function sumNumber() {
    var num1 = document.getElementById("num1").value ;
    var num2 = document.getElementById("num2").value ;
    var num3 = document.getElementById("num3").value ;
    var num4 = document.getElementById("num4").value ;
    var num5 = document.getElementById("num5").value ;
    console.log(num1,num2,num3,num4,num5);
    var sumOfNumber = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) ;
    console.log(sumOfNumber);
    document.getElementById("totalSum").value = sumOfNumber / 5 ;
}
document.getElementById("btnSum").onclick = sumNumber ;
 
// Bài 3
/**
 * Khối 1 : Nhập số tiền USD
 * Khối 2 : 
 * + Tạo hàm
 * + Gọi tới thẻ và lấy giá trị của thẻ
 * + Gọi và thêm sự kiện onclick cho thẻ button
 * + Hiển thị kết quả 
 * Khối 3 : Hiển thị giá tiền quy đổi sang VND
 */
function changeMoney() {
    var usdMoney = document.getElementById("dollar").value ;
    console.log(usdMoney)
    document.getElementById("vietNamDong").value = new Intl.NumberFormat('vn-VN').format(usdMoney * 23500) ;  
}
document.getElementById("btnChange").onclick = changeMoney ;

// Bài 4 
/**
 * Khối 1 : nhập chiều dài và chiều rộng của hình chữ nhật 
 * Khối 2 : 
 * + Tạo hàm 
 * + Gọi và lấy giá trị của thẻ
 * + Tính chu vi và diện tích 
 * + Gọi và thêm sự kiện onclick cho thẻ button
 * + Hiển thị kết quả lên UI
 * Khối 3 : Hiển thị diện tích và chu vi hình chữ nhật
 * */ 
function countMath() {
    var CD = document.getElementById("chieuDai").value ;
    var CR = document.getElementById("chieuRong").value ;
    console.log(CD,CR);
    var chuVi = (Number(CD)+Number(CR)) * 2 ;
    var dienTich = CD * CR ;
    console.log(dienTich,chuVi)
    document.getElementById("result").value =  " Diện tích hình chữ nhật là " + dienTich + " Chu vi hình chữ nhật là " + chuVi ;
}
document.getElementById("btnMath").onclick = countMath ;


// Bài 5
/**
 * Khối 1 : nhập 2 chữ số 
 * Khối 2 :
 * + Tạo hàm 
 * + Gọi và lấy giá trị của thẻ 
 * + Tạo biến hàng chục và hàng đơn vị
 * + Gọi và thêm sự kiện onclick cho thẻ button
 * + Xuất kết quả lên UI
 * Khối 3 : Hiển thị tổng 2 chữ số vừa nhập ra màn hình
 *  */ 
function sum2Num() {
    var number = document.getElementById("doubleNumber").value;
    console.log(number); 
    var ten = Math.floor(number / 10);
    var unit = Math.floor(number % 10) ;
    document.getElementById('totalCount').value = ten + unit ;
}

document.getElementById("totalNumber").onclick = sum2Num ;