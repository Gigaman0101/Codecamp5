// Logical operator
//exercise 1

alert( null || 2 || undefined );// 2
alert( alert(1) || 2 || alert(3) );// 1 ก่อนตามด้วย 2 
alert( 1 && null && 2 );// null
alert( alert(1) && alert(2) );// 1 ตามด้วย undefined
alert ( null || 2 && 3 || 4 );// 3

// exercise 2
let age = prompt("ใส่อายุ?");

if (age >=18 && age <= 60) {
    alert("ถูกต้อง")
} else {
    alert("ผิด")
}

// exercise 3 
let age = prompt("ใส่อายุ?");

if (age >= 18 && age <= 60 ) {
    alert("ผิด")
} else {
    alert("ถูกต้อง")
};

// exercise 4 

if (-1 || 0) alert('first');// run
if (-1 && 0) alert('second');// ไม่ run
if (null || -1 && 0) alert('third');// ไม่ run

// exercise 5 

let yourName = prompt("คุณคือใคร?");

if (yourName == "" || yourName == null) {
    alert("ยกเลิก")
} else if (yourName == "Admin") {
    let passWord = prompt("รหัสผ่านคืออะไร?")
    if (passWord == "" || passWord == null) {
        alert("ยกเลิก")
    } else if(passWord == "codecamp#5") {
        alert("ยินดีต้อนรับ")
    } else {
        alert("รหัสผ่านผิด")
    }
} else {
    alert("ฉันไม่รู้จักคุณ")
};