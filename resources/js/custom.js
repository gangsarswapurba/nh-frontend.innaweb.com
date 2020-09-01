axios('https://nh-api.innaweb.com/api/product')
.then(function (response) {
    // console.log(response.data);

    var products = response.data;

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        var product_id = index+1;

        // console.log(index);
        // console.log(product);
        var oldPriceElement = document.querySelector('#product'+product_id).querySelector('.old-price');
        // console.log(oldPriceElement.innerHTML);
        oldPriceElement.innerHTML = product.harga.toLocaleString('id-ID');
        var newPriceElement = document.querySelector('#product'+product_id).querySelector('.new-price');
        // console.log(newPriceElement.innerHTML);
        newPriceElement.innerHTML = product.harga_diskon.toLocaleString('id-ID');;
    }

})
.catch(function (error) {
    console.log(error)
})
.then(function () {

})
