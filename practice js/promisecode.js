// ordering online payment design
const cart = ['item1','item2','item3'];
const promise = createOrder(cart) // it will return order id
// create order will return a promise (will get order id from there), once promise resolved then only we proceed to payment
promise.then((orderID)=>{
    //then is having success callback
   console.log("order id is : ",orderID);
}).catch((err)=>{
    //catch is having failure callback
console.log(err.message);
})

console.log("after promise ")

function createOrder(cart){
    const promise = new Promise((resolve,reject)=>{
       // here we will erite logic , like first we will check if card is valid or not 
       const cardDetails = "xyz";
       const isCardValid = checkCardIsValid(cardDetails);
       if(isCardValid){
        const orderID = "12345";
        setTimeout(()=>{
            resolve(orderID)
        },5000)
       
       }
       if(!isCardValid){
        // if card is not valid then will return error and reject the promise 
        const err = new Error("Sorry, your card is not valid");
        reject(err);
       }
    })

    return promise;
}

function checkCardIsValid(cardDetails){
   return false;
    
}