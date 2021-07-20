const store = {
    sunglasses: {
        amount: 0,
        cost: 10
    },
    pants: {
        amount: 0,
        cost:20
    },
    bags: {
        amount: 0,
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
            }
        },3000)
        console.log('Your order are being checked in our storage...please be patient..')
    })
}
export {checkItem};