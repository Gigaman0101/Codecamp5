// Promise all
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function pmRandon() {
    return new Promise ((rs, rj) => {
        let n = getRndInteger(1, 9)
            if(n < 7) rs(n)
            else rj(n)
    })
}

const pm1 = pmRandon()
const pm2 = pmRandon()
const pm3 = pmRandon()

Promise.all([pm1, pm2, pm3]).then(r => {
    console.log('Pass all')
    console.log(r)
}).catch(e => {
    console.log('not pass')
    console.log(e)
})

