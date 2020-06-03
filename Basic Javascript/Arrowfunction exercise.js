// Arrpw Function 
// exercise 1 => แปลง function ข้างล่างให้อยู้ในรูป arrow function

let ask = ( question, yes, no) =>{
    if(confirm(question)) yes()
    else no();
}

ask("Do you agree?", 
() => { alert("You agreed.");},
() => { alert("You canceled the execution.");}
);