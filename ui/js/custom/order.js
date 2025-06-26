var productPrices = {};

$(function () {
    //Json data by api call for order table
    $.get(productListApiUrl, function (response) {
        productPrices = {}
        if(response) {
            var options = '<option value="">--Select--</option>';
            $.each(response, function(index, product) {
                options += '<option value="'+ product.product_id +'">'+ product.name +'</option>';
                productPrices[product.product_id] = product.price_per_unit;
            });
            $(".product-box").find("select").empty().html(options);
        }
    });
});

$("#addMoreButton").click(function () {
    var row = $(".product-box").html();
    $(".product-box-extra").append(row);
    $(".product-box-extra .remove-row").last().removeClass('hideit');
    $(".product-box-extra .product-price").last().text('0.0');
    $(".product-box-extra .product-qty").last().val('1');
    $(".product-box-extra .product-total").last().text('0.0');
});

$(document).on("click", ".remove-row", function (){
    $(this).closest('.row').remove();
    calculateValue();
});

$(document).on("change", ".cart-product", function (){
    var product_id = $(this).val();
    var price = productPrices[product_id];

    $(this).closest('.row').find('#product_price').val(price);
    calculateValue();
});

$(document).on("change", ".product-qty", function (e){
    calculateValue();
});

$("#saveOrder").on("click", function(){
    var formData = $("form").serializeArray();
    var requestPayload = {
        customer_name: null,
        total: null,
        order_details: []
    };
    var orderDetails = [];
    for(var i=0;i<formData.length;++i) {
        var element = formData[i];
        var lastElement = null;

        switch(element.name) {
            case 'customerName':
                requestPayload.customer_name = element.value;
                break;
            case 'product_grand_total':
                requestPayload.grand_total = element.value;
                break;
            case 'product':
                requestPayload.order_details.push({
                    product_id: element.value,
                    quantity: null,
                    total_price: null
                });                
                break;
            case 'qty':
                lastElement = requestPayload.order_details[requestPayload.order_details.length-1];
                lastElement.quantity = element.value
                break;
            case 'item_total':
                lastElement = requestPayload.order_details[requestPayload.order_details.length-1];
                lastElement.total_price = element.value
                break;
        }

    }
    callApi("POST", orderSaveApiUrl, {
        'data': JSON.stringify(requestPayload)
    });
});

// 🔁 Slideshow Script
const images = Array.from({ length: 23 }, (_, i) => `images/${i + 1}.jpg`);

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

let currentIndex = 0;
let showingFirst = true;

function changeBackground() {
    const nextImage = images[currentIndex];
    const activeSlide = showingFirst ? slide2 : slide1;
    const hiddenSlide = showingFirst ? slide1 : slide2;

    activeSlide.style.backgroundImage = `url(${nextImage})`;
    activeSlide.classList.add('active');
    hiddenSlide.classList.remove('active');

    currentIndex = (currentIndex + 1) % images.length;
    showingFirst = !showingFirst;
}

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Start slideshow
slide1.style.backgroundImage = `url(${images[0]})`;
slide1.classList.add('active');
currentIndex = 1;

setInterval(changeBackground, 6000);
