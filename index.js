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
    const price1 = getMoney('price-1');
    //total price...
    const totalPrice = getMoney('total-price');
    
    const finalPrice = price1 + totalPrice;
    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
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
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
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
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 4 event listener 
document.getElementById('card-4').addEventListener('click',function(){
    getHeadingAndShow('sports-back','show-heading');

    //product price...
    const price4 = getMoney('price-4');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price4 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 5 event listener 
document.getElementById('card-5').addEventListener('click',function(){
    getHeadingAndShow('full-jersey','show-heading');

    //product price...
    const price5 = getMoney('price-5');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price5 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 6 event listener 
document.getElementById('card-6').addEventListener('click',function(){
    getHeadingAndShow('sports-cates','show-heading');

    //product price...
    const price6 = getMoney('price-6');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price6 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 7 event listener 
document.getElementById('card-7').addEventListener('click',function(){
    getHeadingAndShow('single-relax','show-heading');

    //product price...
    const price7 = getMoney('price-7');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price7 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }else if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 8 event listener 
document.getElementById('card-8').addEventListener('click',function(){
    getHeadingAndShow('children-play','show-heading');

    //product price...
    const price8 = getMoney('price-8');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price8 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
// card 9 event listener 
document.getElementById('card-9').addEventListener('click',function(){
    getHeadingAndShow('flexible-sofa','show-heading');

    //product price...
    const price9 = getMoney('price-9');
    //total price...
    const totalPrice = getMoney('total-price');
    const finalPrice = price9 + totalPrice;

    if(finalPrice>=200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    if(totalPrice>=0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    document.getElementById('total-price').innerText = finalPrice;
});
//add event listener for apply button...
document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponString = document.getElementById('coupon-field');
    const couponValue = couponString.value;
    couponString.value = '';
    if(couponValue === 'SELL200'){
        const totalPrice = getMoney('total-price');
        const discount = (totalPrice * 20)/100;
        const previousDiscount = getMoney('discount');
        const newDiscount = previousDiscount + discount;
        const totalDiscount = newDiscount.toFixed(2);
        document.getElementById('discount').innerText = totalDiscount;
        //GRAND TOTAL...
        const payAbleAmount = totalPrice - totalDiscount;
        const previousGrandTotal = getMoney('grand-total');
        const newGrandTotal = payAbleAmount + previousGrandTotal;
        const totalGrandTotal = newGrandTotal.toFixed(2);
        document.getElementById('grand-total').innerText = totalGrandTotal;

    }else{
        alert('Provide a valid coupon code');
    }
});
//add event listener fo GO HOME button...
document.getElementById('go-home').addEventListener('click',function(){
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('grand-total').innerText = '00.00';
    document.getElementById('show-heading').innerHTML = '';
    document.getElementById('coupon-btn').setAttribute('disabled',true);
    document.getElementById('purchase-btn').setAttribute('disabled',true);
});