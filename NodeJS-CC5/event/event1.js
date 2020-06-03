const EventEmiter = require('events')
const em1 = new EventEmiter()
const em2 = new EventEmiter()

setInterval(() => em1.emit('onesec',{id:1, txt:'One Second..'}), 1000);
setInterval(() => em1.emit('twosec'), 2000);

em1.on('onesec', function(e) {
    console.log(e.id + '=' + e.txt)
})

em2.on('onesec', function(e) {
    console.log('from em2')
})


// em1.on('twosec', function() {
//     console.log('two second')
// })