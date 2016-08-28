// model
var model = {
    cart : [],
    products : [
        { 
            id : 'HR0001',
            name : 'Harry Potter and the Philosopher\'s Stone',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/1.jpg'
        },
        { 
            id : 'HR0002',
            name : 'Harry Potter and the Chamber of Secrets',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/2.jpg'
        },
        { 
            id : 'HR0003',
            name : 'Harry Potter and the Prisoner of Azkaban',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/3.jpg'
        },
        { 
            id : 'HR0004',
            name : 'Harry Potter and the Goblet of Fire',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/4.jpg'
        },
        { 
            id : 'HR0005',
            name : 'Harry Potter and the Order of the Phoenix',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/5.jpg'
        },
        { 
            id : 'HR0006',
            name : 'Harry Potter and the Half-Blood Prince',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/6.jpg'
        },
        { 
            id : 'HR0007',
            name : 'Harry Potter and the Deathly Hallows',
            price : 100.00,
            amount : 1,
            imgUrl : 'imgs/7.jpg'
        },
    ]
};

// init instance
new Vue({
    el: '#app',
    data: model,
    methods: {
        addToCart: function (item) {
            if(this.cart.length > 0){
                for(var i=0; i < this.cart.length; i++){
                    if(item.id == this.cart[i].id){
                        this.cart[i].amount += 1;
                        break;
                    }else if(i == this.cart.length-1){
                        this.cart.push(item);
                        break;
                    }
                }
            } else {
                this.cart.push(item);
            }
        }
    },
    computed: {
        cartSummary: function () {
            if(this.cart.length > 0){
                // all promotion logic here just for display
                return calculateSummary(this.cart);
            } else {
                return '0.00';
            }
        }
    }
})


// calculate summary for all item in cart
function calculateSummary(refCart){
    var cartList = JSON.parse(JSON.stringify(refCart));

    // just in case
    // if it's has non harry potter book catch it here
    // loop to check if item[index].id is not harry then remove it from cartList and sum all amount
    // then return calculateSummary(cartList) + 100*sumAmount and when carList have only harry potter it'll' pass this section to another promotion below

    // harry potter promotion below
    if(cartList.length == 2){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*2*0.9;
    } else if(cartList.length == 3){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*3*0.8;
    } else if(cartList.length == 4){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*4*0.7;
    } else if(cartList.length == 5){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*5*0.6;
    } else if(cartList.length == 6){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*6*0.5;
    } else if(cartList.length == 7){
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100*7*0.4;
    } else if (cartList.length == 1) {
        cartList = cutAllItem(cartList);
        return calculateSummary(cartList) + 100;
    } else {
        return 0;
    }

    // other promotion
    // --  --
}

// Cut all item amount by 1 if the amount is zero remove the item from cartList
function cutAllItem(refCart){
    var cartList = JSON.parse(JSON.stringify(refCart));
    for(var i = 0 ; i < cartList.length; i++){
        if(cartList[i].amount > 0){
            cartList[i].amount -= 1;
            if(cartList[i].amount == 0){
                cartList.splice(i, 1);
                i--;
            }
        } 
    }
    return cartList;
}
