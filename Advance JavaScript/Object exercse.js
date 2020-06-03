// Object 
// exercise 1 (4.6.1)

let object = {};//1. สร้าง object ขึ้นมา
object.name = "Jui";
object.age = 23;
object.adress = "Bangkok";
object.single = false;
object.smartNumber = 8;

console.log(object);

// exercise 2 (4.7.1) computed properties

let key = prompt("โปรดใส่ key: ")
let obj = {};

while (key != "stop") {
    value = prompt("Enter value: ");
    obj[key] = value;
    key = prompt("โปรดใส่ key: ")
} 

console.log(obj);

// exercise 3 (4.7.2)

let fruit = prompt("Enter key: ");
let obj1 = {};

while (fruit != "stop") {
    value = Number(prompt("Enter number: "));
    if (value > 1) {
        fruit = fruit + "s";
    }
    obj1[fruit] = value;
    fruit = prompt("Enter key: ");
}

console.log(obj1);

// exercise 4 (4.18.1)

let obj2 = {};//a
obj2.name = "Sonter";//b
obj2.surname = "Pakorn";//c
obj2.name = "Boy";//d
delete obj2.name;//e
console.log(obj2);

// exercise 5 (4.18.2)

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

// exercise 6 (4.18.3) => การเขียนต่อไปนี้ Error ไหม

const user = {
    name: "John"
};

// dose it work?
user.name = "Pete";
// ตอบ ไม่ Error

// exercise 7 (4.18.4)
function sum(obj) {
    let totalSalary = 0;
    for (let key in obj) {
        totalSalary = totalSalary + obj[key]; 
    }
    return totalSalary;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// exercise 8 (4.18.5)
function multiplyNumeric(obj, times) {
    for (let key in obj) {
        if (typeof obj[key] !== "number") continue;
        obj[key] *= times;
    };
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};