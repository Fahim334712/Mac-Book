document.getElementById('memory8ButtonClick').addEventListener('click', function () {
    // best Price
    const BestPrice = document.getElementById('bestPrice');
    const BestPriceNumber = parseInt(1299);
    BestPrice.innerText = BestPriceNumber;
    // Extra memory Cost
    const memoryCost = document.getElementById('extraMemoryCost');
    let memoryCostNumber = 0;
    memoryCost.innerText = memoryCostNumber;
    myFunction();

})
// Memory Cost
document.getElementById('memory16ButtonClick').addEventListener('click', function () {
    const memoryCost = document.getElementById('extraMemoryCost');
    let memoryCostNumber = 180;
    memoryCost.innerText = memoryCostNumber;
    myFunction();


})

// Storage
document.getElementById('storage256').addEventListener('click', function () {
    let storage256Price = document.getElementById('storagePrice');
    let storage256PriceText = 0;
    storage256Price.innerText = storage256PriceText;
    myFunction();


})
document.getElementById('storage512').addEventListener('click', function () {
    let storage512Price = document.getElementById('storagePrice');
    let storage512PriceText = 100;
    storage512Price.innerText = storage512PriceText;
    myFunction();

})
document.getElementById('storage1TB').addEventListener('click', function () {
    let storage1TBPrice = document.getElementById('storagePrice');
    let storage1TBPriceText = 180;
    storage1TBPrice.innerText = storage1TBPriceText;
    myFunction();

})

// Delivery

document.getElementById('freeDelivery').addEventListener('click', function () {
    const freeDeliveryPrice = document.getElementById('deliveryPrice');
    let freeDeliveryPriceText = 0;
    freeDeliveryPrice.innerText = freeDeliveryPriceText;
    myFunction();

})
document.getElementById('costDelivery').addEventListener('click', function () {
    const costDeliveryPrice = document.getElementById('deliveryPrice');
    let costDeliveryPriceText = 20;
    costDeliveryPrice.innerText = costDeliveryPriceText;
    myFunction();

})
// Total-Cost
function myFunction() {
    let priceOne = document.getElementById('bestPrice').innerText;
    let priceTwo = document.getElementById('extraMemoryCost').innerText;
    let priceThree = document.getElementById('storagePrice').innerText;
    let priceFour = document.getElementById('deliveryPrice').innerText;
    let TotalPrice = +priceOne + +priceTwo + +priceThree + +priceFour;
    document.getElementById('totalPrice').innerText = TotalPrice;
    document.getElementById('FinalAmount').innerText = TotalPrice;

}
document.getElementById('applyButton').addEventListener('click', function () {
    const codeField = document.getElementById('promo');
    const userCode = codeField.value;
    if (userCode == 'stevekaku') {
        let discount = document.getElementById('FinalAmount');
        let discountText = discount.innerText;
        let applyPromo = discountText - (discountText * 0.2);
        discount.innerText = applyPromo;
        codeField.value = '';
    }
})