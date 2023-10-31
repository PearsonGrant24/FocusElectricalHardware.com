

$('.plus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var val = this.parentNode.children[2]
    console.log("pid =",id) 
    $.ajax({
        type: 'GET', // form submit method get/post
        url: '/pluscart', // form action url         
        data:{
            prod_id:id // change submit button text
        },
        success: function(data) {
            console.log("data =", data)
            val.innertext=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})

$('.minus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var val = this.parentNode.children[2]
    $.ajax({
        url: '/minuscart', // form action url
        type: 'GET', // form submit method get/post
        data:{
            prod_id:id // change submit button text
        },
        success: function(data) {
            val.innertext=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})

$('.remove-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var val = this 
    $.ajax({
        type:"GET",
        url:"/removecart",
        data:{
            prod_id:id
        },
        success:function(data){
            document.getElementById("amount"),innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
            val.parentNode.parentNode.parentNode.parentNode.remove()
        }
    })
})

$('.plus-wishlist').click(function(){
    var id = $(this).attr("pid").toString(); 
    $.ajax({
        type:"GET",
        url:"/pluswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = 'http://127.0.0.1:8000/product-detail/${id}'
        }
    })
})

$('.minus-wishlist').click(function(){
    var id = $(this).attr("pid").toString(); 
    $.ajax({
        type:"GET",
        url:"/minuswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = 'http://127.0.0.1:8000/product-detail/${id}'
        }
    })
})