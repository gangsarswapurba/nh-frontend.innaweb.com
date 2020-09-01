axios('https://nh-api.innaweb.com/api/product')
.then(function (response) {

    var products = response.data;

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        var product_id = index+1;

        var oldPriceElement = document.querySelector('#product'+product_id).querySelector('.old-price');
        oldPriceElement.innerHTML = product.harga.toLocaleString('id-ID');
        var newPriceElement = document.querySelector('#product'+product_id).querySelector('.new-price');
        var newPrice = product.harga_diskon.toLocaleString('id-ID');
        var newPriceSplitted = newPrice.split('.');
        var newPriceHead = newPriceSplitted[0];
        var newPriceTail = newPriceSplitted[1];
        newPriceElement.innerHTML = `
        <span class="new-price-head">${newPriceHead}</span>.<span class="new-price-tail">${newPriceTail}</span>
        `;
        var usersElement = document.querySelector('#product'+product_id).querySelector('.users');
        usersElement.innerHTML = product.total_pengguna.toLocaleString('id-ID');
    }

    const hostingProductElements = document.querySelectorAll('.hosting-product');
    hostingProductElements.forEach(hostingProduct => {
        var lis = hostingProduct.querySelectorAll('li');
        lis.forEach(li => {
            liText = li.innerText;
            liSplitted = liText.split(' ');
            liFirst = liSplitted.shift();
            liFirst = `<span class="font-weight-bold">${liFirst}</span>`
            liSplitted.unshift(liFirst);

            li.innerHTML = liSplitted.join(' ');
        });
    });

})
.catch(function (error) {
    console.log(error)
})
.then(function () {

})
