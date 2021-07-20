const store = {
    sunglasses: {
        amount: 100,
        cost: 10
    },
    pants: {
        amount: 1000,
        cost:20
    },
    bags: {
        amount: 100,
        cost: 25
    }
}

const checkItem = (order) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const itemArrs = order.items
            let inStock = itemArrs.every(item => store[item[0]].amount >= item[1])
            if(inStock){
                let total = 0;
                itemArrs.forEach(item => {
                    total += store[item[0]].cost * item[1]
                })
                console.log("All of the items are in stock. Your total payment are $" + total )
                resolve([order,total])
            }
            else{
                let notInStock = itemArrs.filter(item => {
                    return store[item[0]].amount < item[1]
                })
                let itemName = []
                let amountList = []
                notInStock.forEach(item => {
                    itemName.push(item[0])
                    amountList.push(store[item[0]].amount)
                })
                for(let i = 0; i < itemName.length; i++){
                    console.log("Your order can't be completed because " + itemName[i] + " are " + amountList[i] + " in our storage.")
                }
                reject("Couldn't processed to the payment check.")
            }
        },2000)
        console.log('Your order are being checked in our storage...please be patient..')
    })
}

const checkBalance = (responseArray) => {
    const order = responseArray[0]
    const totalPayment = responseArray[1]
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let hasEnoughMoney = order.giftcardBalances >= totalPayment;
            if(hasEnoughMoney){
                console.log("Payment processed with giftcard. Generating shipping label...")
                let number = generateTrackingNum()
                resolve([order,number])
            }
            else{
                reject("Can't processed order: giftcard balance was insufficient. ")
            }
        },3000)
    })
}
const shipOrder = (responseArray) => {
    const order = responseArray[0]
    const trackingNum = responseArray[1]
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Your order has been shipped. Your tracking number is " + trackingNum)
        },4000)
    })
}
const generateTrackingNum = () => {
    return Math.floor(Math.random() * 10000000)
}
export {checkItem,checkBalance,shipOrder};