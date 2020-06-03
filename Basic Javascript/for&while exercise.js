// for & while
//exercise 1

let i = 3;

while (i) {
    alert(i--);
}
// ตอบ 1

// exercise 2 => code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// อันแรก
let i = 0;
while (++i < 5) alert(i);
// ตอบ 1,2,3,4

//อันที่สอง
let i = 0;
while (i++ < 5) alert(i);
// ตอบ 1,2,3,4,5
// สรุปตอบไม่เหมือนกัน

// exercise 3 => code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
// ตอบ เหมือนกัน

// exercise 4 => ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา

for (let i = 2; i <= 10; i++) {
    console.log(i);
}

// exercise 5 => เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
// for loop
for (let i = 0; i < 3; i++) {
    alert ( `number ${i}!` );
}

// while loop
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// exercise 6 
let player1 = prompt("ใส่ตัวเลขที่ต้องการ 1 ถึง 100");
while (true){
    let player2 = prompt('จงทายว่าใส่ตัวเลขเท่าไหร่?');
    if (player2 == player1) {
        alert('ถูกต้องงงง');
        break
    } else {
        if (player2 < player1 ) {
            alert("น้อยไป")
        } else {
            alert("มากไป")
        }
    }
}