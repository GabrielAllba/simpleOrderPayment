import { checkItem , checkBalance} from "./library.mjs";

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
    .catch((rejectedValue) => {
        console.log(rejectedValue)
})