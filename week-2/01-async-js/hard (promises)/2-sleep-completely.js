/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let start = new Date().getTime()
    let end = start + milliseconds
    for (let i = start; i <= end; i = new Date().getTime()) {

    }

    return new Promise((resolve, reject) => {
        resolve()
    })
}

module.exports = sleep;