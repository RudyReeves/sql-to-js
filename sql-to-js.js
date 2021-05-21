/***
 * (Problem statement omitted)
 */

const f = () =>
    productInfo.reduce((partialResult, pInfo) => {
        const { sales }  = salesInfo.find((sInfo) => sInfo.product === pInfo.product);
        partialResult[pInfo.category] = (partialResult[pInfo.category] || 0) + sales;
        return partialResult;
    }, {});

const productInfo = [
    {"product":"Apples","category":"Fruit"},
    {"product":"Bananas","category":"Fruit"},
    {"product":"Celery","category":"Vegetables"}
];

const salesInfo = [
    {"product":"Apples","sales":300},
    {"product":"Bananas","sales":50},
    {"product":"Celery","sales":200}
];

console.log(f());