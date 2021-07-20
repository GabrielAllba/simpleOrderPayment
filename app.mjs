import { checkItem } from "./library.mjs";

const order = {
    items: [
        ['sunglasses',60],
        ['bags',20],
        ['pants',20]
    ],
    giftcardBalances: 10000000
}

checkItem(order).then((resolvedValue) => {
    console.log(resolvedValue);
}).catch((rejectedValue) => {
    console.log(rejectedValue)
})