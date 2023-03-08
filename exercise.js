const number = 15;

const promise = new Promise((resolve, reject) => {
    if(number > 10) resolve("Number is more then 10")
    reject("Number is less than 10")
}).then((r) => {
    console.log(r)
}).catch((c) => {
    console.log(c)
}).finally(() => {
    console.log("Number compared")
})
