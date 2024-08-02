/* api design : 
             createOrder will take : cart as parameter and will return a promise, 
                           success scenerion(resolve) : if card is valid then it will return order id , 
                           failure scenerio(reject):  it will send error message.
             if promise got success then we will make proceed to payment:
                     it will also return a promise */

const cart = ["item1", "item2", "item3"];
const calculateTotalAmmountAfterDiscount = (ammount, discount) => {
    return ammount - (ammount * discount) / 100;
  };
  
const pr = createOrder(cart);
pr.then((orderId) => {
  console.log("Order id is : ", orderId);
  return orderId;
})
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((ammount) => {
    console.log("thanks for shopping total payable ammout is",ammount
    );
  })
  .catch((errMsg) => {
    console.log(errMsg );
  });


function createOrder(cart){
  const promise = new Promise((resolve, reject) => {
    const isCardValid = checkCardIsValidity("9816723162492849");
    if (isCardValid) {
      setTimeout(() => {
        resolve("12345");
      }, 5000);
    } else {
      reject("card is not valid");
    }
  });
  return promise;
};

function checkCardIsValidity(cardNum){
  if (cardNum) {
    return true;
  }
  return false;
};

function proceedToPayment(orderId) {
  const promise = new Promise((resolve, reject) => {
    const ammount = 2345;
    const discountPr = 25;
    const totalAmmount = calculateTotalAmmountAfterDiscount(ammount, discountPr);
    if (totalAmmount) {
      resolve(totalAmmount);
    } else {
      reject("can't proceed to payment");
    }
  });
  return promise;
};



