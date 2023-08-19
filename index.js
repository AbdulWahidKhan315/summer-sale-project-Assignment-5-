//global function...
function getMoney(idName){
    moneyString = document.getElementById(idName).innerText;
    money = parseFloat(moneyString);
    return money;
}
function getHeadingAndShow(headingId,showHeadingId){
    const heading = document.getElementById(headingId).innerText;
    const showHeading = document.getElementById(showHeadingId);
    const p = document.createElement('p');
    const count = showHeading.childElementCount;
    p.innerHTML = `${count + 1}. ${heading}`;
    showHeading.appendChild(p);
}


//add event listener....
document.getElementById('card-1').addEventListener('click',function(){
    getHeadingAndShow('access1','show-heading');
    // const heading = document.getElementById('access1').innerText;
    // const showHeading = document.getElementById('show-heading');
    // const p = document.createElement('p');
    // const count = showHeading.childElementCount;
    // p.innerHTML = `${count + 1}. ${heading}`;
    // showHeading.appendChild(p);
    //product price...
    const price1 = getMoney('price-1');
    //total price...
    const totalPrice = getMoney('total-price');
    
    const finalPrice = price1 + totalPrice;
    if(finalPrice>=200){
        const couponButton = document.getElementById('coupon-btn');
        couponButton.removeAttribute('disabled');
    }else if(totalPrice>=0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
//card 2 event listener....
document.getElementById('card-2').addEventListener('click',function(){
    getHeadingAndShow('access2','show-heading');

    //product price...
    const price2 = getMoney('price-2');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price2 + totalPrice;

    if(finalPrice>=200){
        const couponButton = document.getElementById('coupon-btn');
        couponButton.removeAttribute('disabled');
    }else if(totalPrice>=0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 3 event listener 
document.getElementById('card-3').addEventListener('click',function(){
    getHeadingAndShow('home-cooker','show-heading');

    //product price...
    const price3 = getMoney('price-3');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price3 + totalPrice;

    if(finalPrice>=200){
        const couponButton = document.getElementById('coupon-btn');
        couponButton.removeAttribute('disabled');
    }else if(totalPrice>=0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 3 event listener 
document.getElementById('card-4').addEventListener('click',function(){
    getHeadingAndShow('sports-back','show-heading');

    //product price...
    const price4 = getMoney('price-4');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price4 + totalPrice;

    if(finalPrice>=200){
        const couponButton = document.getElementById('coupon-btn');
        couponButton.removeAttribute('disabled');
    }else if(totalPrice>=0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});