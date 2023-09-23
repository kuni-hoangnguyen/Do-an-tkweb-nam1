function openCart() {
	document.getElementById('myCart').style.display = 'block';
	document.getElementById('myForm').style.display = 'none';
	document.getElementById('myForm2').style.display = 'none';
}

function closeCart() {
	document.getElementById('myCart').style.display = 'none';
}
var remove_cart = document.getElementsByClassName('btn-danger');
for (var i = 0; i < remove_cart.length; i++) {
	var button = remove_cart[i];
	button.addEventListener('click', function () {
		var button_remove = event.target;
		button_remove.parentElement.parentElement.remove();
		updatecart();
	});
}
var quantity_input = document.getElementsByClassName('cart-quantity-input');
for (var i = 0; i < quantity_input.length; i++) {
	var input = quantity_input[i];
	input.addEventListener('change', function (event) {
		var input = event.target;
		updatecart();
	});
}
var add_cart = document.getElementsByClassName('btn-cart');
for (var i = 0; i < add_cart.length; i++) {
	var add = add_cart[i];
	add.addEventListener('click', function (event) {
		var button = event.target;
		var product =
			button.parentElement.parentElement.parentElement.parentElement;
		var img =
			product.parentElement.getElementsByClassName('img-prd')[0].src;
		var title =
			product.getElementsByClassName('content-product-h3')[0].innerText;
		var price = product.getElementsByClassName('price')[0].innerText;
		var qty = product.getElementsByClassName('qty-value')[0].valueAsNumber;
		myCart.style.display = 'block';
		addItemToCart(title, price, img, qty);
		updatecart();
	});
}

function addItemToCart(title, price, img, qty) {
	var cartRow = document.createElement('div');
	cartRow.classList.add('cart-row');
	var cartItems = document.getElementsByClassName('cart-items')[0];
	var cart_title = cartItems.getElementsByClassName('cart-item-title');
	for (var i = 0; i < cart_title.length; i++) {
		if (cart_title[i].innerText == title) {
			alert('Products already in the cart');
			return;
		}
	}
	var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${img}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" min="1" value="${qty}">
        <button class="btn-danger" type="button">Delete</button>
    </div>`;
	cartRow.innerHTML = cartRowContents;
	cartItems.append(cartRow);
	cartRow
		.getElementsByClassName('btn-danger')[0]
		.addEventListener('click', function () {
			var button_remove = event.target;
			button_remove.parentElement.parentElement.remove();
			updatecart();
		});
	cartRow
		.getElementsByClassName('cart-quantity-input')[0]
		.addEventListener('change', function (event) {
			var input = event.target;
			if (isNaN(input.value) || input.value <= 0) {
				input.value = 1;
			}
			updatecart();
		});
}

function updatecart() {
	var cart_item = document.getElementsByClassName('cart-items')[0];
	var cart_rows = cart_item.getElementsByClassName('cart-row');
	var total = 0;
	var total2 = 0;
	for (var i = 0; i < cart_rows.length; i++) {
		var cart_row = cart_rows[i];
		var price_item = cart_row.getElementsByClassName('cart-price')[0];
		var quantity_item = cart_row.getElementsByClassName(
			'cart-quantity-input'
		)[0];
		var price = parseFloat(price_item.innerText);
		var quantity = quantity_item.value;
		total = total + price * quantity;
		total2 = total.toFixed(2);
	}
	document.getElementsByClassName('cart-total-price')[0].innerText =
		'$' + total2;
}

function pay() {
	alert('Thank you for your purchase!');
	document.getElementById('myCart').style.display = 'none';
}