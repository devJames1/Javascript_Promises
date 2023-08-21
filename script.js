
// basic Promise code
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })


// p.then((message) => {
//     console.log("This is in the then " + message)
// }).catch((error) => {
//     console.error("This is in the catch " + error);
// })




//refactoring a callback code with Promises which is a better way

// const userleft = true;
// const userWatchingCatMeme = false;

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userleft) {
//             reject({
//                 name: 'User left',
//                 message: ':('
//             });
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User watching cat meme',
//                 message: 'devJames < cat'
//             });
//         } else {
//             resolve("Thumbs up and Subscribe");
//         }
//     })
// }

// watchTutorialPromise()
//     .then((message) => { console.log('Success: ' + message) })
//     .catch((error) => { console.error(error.name + ' ' + error.message); })




// More stuff with promises

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})


// return all promise resolve state in an array all running asynchronously. doen't wait
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ])
//     .then((messages) => {
//         console.log(messages);
//     })


//return as soon as the first one is completed
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ])
//     .then((message) => {
//         console.log(message);
//     })




//   Recap Two   //

// const count = true;
// let countValue = new Promise((resolve, reject) => {
//     if (count) {
//         resolve('There is a count value.');
//     } else {
//         reject("There is no count value");
//     }
// })
// console.log(countValue);


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 3000);
// });
// promise.then((success) => console.log(success))


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Whoops!"), 2000);
// });
// promise.catch((error) => console.log(error))


// example showing catch block
let stat = true;
let exampleTask = new Promise((resolve, reject) => {
    if (stat) {
        resolve("Promise accepted");
    }
    reject("Promise rejected");
});
exampleTask
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Always gonna log");
    })