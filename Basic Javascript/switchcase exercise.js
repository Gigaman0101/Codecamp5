// switch case exercise 
// exercise 1 => แปลง code ดังกล่าวเป็น if else statement

let browser = prompt("คุณใช้ browser อะไร?");
if (browser == 'Edge'){
    alert("You 've got the Edge!")

} else if (browser == 'Chrome') {
    alert('Okay we support these browsers too');

} else if(browser == 'Firefox' ){
    alert('Okay we support these browsers too');

} else if (browser ==  'Safari' ) {
    alert('Okay we support these browsers too');

} else if (browser == 'Opera') {
    alert ('Okay we support these browsers too');

} else {
    alert('We hope that this page looks ok!');
}

// exercise 2 => แปลง code ดังกล่างเป็น switch cases

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
    default:
        alert('ไม่ใช่');
}
