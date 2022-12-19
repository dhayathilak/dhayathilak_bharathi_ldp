
async function getData(uId) {
let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Fetched the data!");
    resolve("skc@gmail.com")
}, 4000);
})

let email = await promise
console.log("start");
console.log("Email id of the user id is: " + email)
console.log("end");
}


getData("skc");
            
