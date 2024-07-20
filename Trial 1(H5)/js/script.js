document.addEventListener('DOMContentLoaded', function() {
    var pageData = {
        "pageProps": {
            "products": [
                // 您的 JSON 数据
            ],
            "isUserIndian": false
        }
    };

    var container = document.getElementById('product-container');
    pageData.pageProps.products.forEach(function(product) {
        var productDiv = document.createElement('div');
        productDiv.className = 'product';
        var prices = product.prices.map(price => `$${price.unit_amount} ${price.currency} (${price.type})`).join('<br>');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div>${prices}</div>
        `;
        container.appendChild(productDiv);
    });
});
