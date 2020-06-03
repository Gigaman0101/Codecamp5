const fs = require('fs')

 function getFile(fileName)  {
//const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        if (fileName == 'f02.txt') reject('Error from f02')
        fs.readFile(fileName, (err, data) => resolve(`${data}`) )
    })
}

(async () => {
    try{
    let data = await getFile('./start.txt');
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    data = await getFile(data)
    console.log(`${data}`)
    } catch(err) {
        console.error('error : ' + err)
    }
}) () // IIFE การเขียนเรียกใช้ฟังชันแบบไม่ต้องเรียกชื่อไฟล์ใหม่

//runGetFile();

//getFile('./start.txt')
//.then(data => {
//    console.log(`${data}`)
//    return getFile(`${data}`) })
//    .then(data => {
//    console.log(`${data}`)
//    return getFile(`${data}`) })
//    .then(data => {
//    console.log(`${data}`)
//    return getFile(`${data}`) })
        