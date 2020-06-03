//console.log('1')
//console.log('2')
//console.log('3')

const pm = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2')
        resolve()
    }, 1000)
})

console.log('1')
pm.then(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3')
            resolve()
        }, 1000)})
        .then(() => setTimeout(() => {
            console.log('4')
        }, 1000))
})