const fs = require('fs');
let data, jsobj, users, newData

data = fs.readFileSync('./sample.json')
//console.log(`${data}`)

jsobj = JSON.parse(data)
//console.log(jsobj)
//console.log(jsobj.users[2])

users = jsobj.users
users.map( x => {
    x.phoneNumber = x.userId.toString().repeat(7)
    if (x.lastName === 'mac') x.lastName = 'Apple'
    console.log(`${x.firstName} : ${x.lastName}`)
})

newData = JSON.stringify(jsobj)
fs.writeFileSync('./output.json', newData)
console.log('Save output.json OK')