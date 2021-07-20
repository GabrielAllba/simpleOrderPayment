import { checkItem , checkBalance, shipOrder} from "./library.mjs";

const order = {
    items: [
        ['sunglasses',60],
        ['bags',20],
        ['pants',20]
    ],
    giftcardBalances: 10000
}

checkItem(order)
    .then((resolvedValue) => {
        return checkBalance(resolvedValue)
    })
    .then((resolvedValue) => {
        return shipOrder(resolvedValue)
    })
    .catch((rejectedValue) => {
        console.log(rejectedValue)
})