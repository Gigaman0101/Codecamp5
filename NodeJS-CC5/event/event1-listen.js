const Em1 = require('./event1-emit')
const em1 = new Em1()


em1.on('twosec', (e) => {
    console.log(e)
}
)
em1.emit2()