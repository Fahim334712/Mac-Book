document.getElementById('memory8ButtonClick').addEventListener('click', function () {
    const BestPrice = document.getElementById('bestPrice');
    // const BestPriceText = BestPrice.innerText;
    const BestPriceNumber = 1299;
    BestPrice.innerText = BestPriceNumber;
    const memoryCost = document.getElementById('extraMemoryCost');
    let memoryCostNumber = 0;
    memoryCost.innerText = memoryCostNumber;


})
document.getElementById('memory16ButtonClick').addEventListener('click', function () {
    const memoryCost = document.getElementById('extraMemoryCost');
    // const memoryCostText = memoryCost.innerText;
    // const memoryCostNumber = parseInt(memoryCostText);
    let memoryCostNumber = 180;
    memoryCost.innerText = memoryCostNumber;
})
document.getElementById('storage256').addEventListener('click', function () {
    let storage256Price = document.getElementById('storagePrice');
    let storage256PriceText = 0;
    storage256Price.innerText = storage256PriceText;
})
document.getElementById('storage512').addEventListener('click', function () {
    let storage512Price = document.getElementById('storagePrice');
    let storage512PriceText = 100;
    storage512Price.innerText = storage512PriceText;
})
document.getElementById('storage1TB').addEventListener('click', function () {
    let storage1TBPrice = document.getElementById('storagePrice');
    let storage1TBPriceText = 180;
    storage1TBPrice.innerText = storage1TBPriceText;
})
document.getElementById('freeDelivery').addEventListener('click', function () {
    const freeDeliveryPrice = document.getElementById('deliveryPrice');
    let freeDeliveryPriceText = 0;
    freeDeliveryPrice.innerText = freeDeliveryPriceText;
})
document.getElementById('costDelivery').addEventListener('click', function () {
    const costDeliveryPrice = document.getElementById('deliveryPrice');
    let costDeliveryPriceText = 20;
    costDeliveryPrice.innerText = costDeliveryPriceText;
})
