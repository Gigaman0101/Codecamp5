let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is true thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

const checkIfItsDone = () => {
    isItDoneYet
        .then( ok => {
            console.log('come from resolve state in Promise')
            console.log(ok)
        })
        .catch( err => {
            console.log('come from reject state in Promise')
            console.error(err)
        })
}

checkIfItsDone()