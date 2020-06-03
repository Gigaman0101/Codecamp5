// If
// exercise 1

if ("0") {
    alert('Hello Codecamp #5');
}
// ตอบ แสดง

// exercise 2

let myName = prompt("จงบอกชื่อของฉัน");

if (myName == "Sarit") {
    alert('เก่งมาก')
} else {
    alert('คุณไม่รู้จักชื่อฉัน')
}

// exercise 3

let g = prompt("ใส่ตัวเลข");

if (g < 50) {
    alert("F")
} else if (g >= 50) {
    alert("D")
} else if (g >= 60) {
    alert("C")
} else if (g >= 70) {
    alert("B")
} else if (g >= 80) {
    alert("A")
}

// exercise 4 
// แบบปกติ
let age = prompt('How old are you?');
let price;
if (age < 18) {
    price = 2000;
} else {
    price = 3500;
}

// เปลื่ยนเป็นแบบ ternary operators
let age = prompt('How old are you?');
let price;

price = (age < 18) ? 2000 : 3500;

alert(price);