
 (function() {

	const items = [

	{ id: 10, name: "Alaskan Thunder", description: "dank weed", price: 10.00, category: "smokeables"},
	{ id: 11, name: "Purple Haze", description: "skunk weed", price: 12.00, category: "smokeables"},
	{ id: 12, name: "Pineapple Express", description: "not-so-dank weed", price: 18.00, category: "smokeables"},
	{ id: 13, name: "Maui Wowie", description: "island weed", price: 8.00, category: "smokeables"},
	{ id: 14, name: "Kingdom of Kush", description: "sweet weed", price: 9.00, category: "smokeables"},
	{ id: 15, name: "After School Special", description: "not-so-skunky weed", price: 10.00, category: "smokeables"},

	{ id: 50, name: "Ganja Gummies", description: "marijuana-infused gummy candy", price: 9.00, category: "edibles"},
	{ id: 51, name: "Medicinal Brownies", description: "weed-laced brownies", price: 15.00, category: "edibles"},
	{ id: 52, name: "Green Elixir", description: "bright green grass drink for sipping", price: 15.00, category: "edibles"},
	{ id: 53, name: "No-Bake Cookies", description: "get baked with our no-bakes", price: 10.00, category: "edibles"},

	{ id: 70, name: "Rainbow Bowl", description: "smoke-a-bowl", price: 25.00, category: "accessories"},
	{ id: 71, name: "Grinder not grindr", description: "grind it up", price: 25.00, category: "accessories"}
	];

	// shopping cart array
	const shoppingCart = [];
	let cartSubtotal = 0;
	let cartTax = 0;
	let cartTotal = 0;

	// insert items into index.html
	function listItems() {
		let wrapper = $('.wrapper.menu');
		let currentCategory = "";
	    items.forEach(function(item) {
	    	// insert category div if necessary
	    	if( item.category !== currentCategory){
	    		let category = '<div class="categoryHead">' + item.category.toUpperCase() + '</div>';
	    		wrapper.append(category);
	    		currentCategory = item.category;
	    	}
	    	// add each item div
	    	let menuItem = '<div id="' + item.id + '" class="item">' + item.name + ' &nbsp; <span class="description">' + item.description + '</span><span class="price">  &nbsp; $ ' + item.price +'</span></div>';
	    	wrapper.append(menuItem);
	    });
	    // call addClick to set event handler on item buttons just created
	    addClick();
	}

	// add clicked item to shopping cart
	function addClick() {
  		$('div.item').on('click', function(){

			$(this).addClass('addedToCart');

			// this.id returns a string, convert it to a number
			let newItem = parseInt(this.id);

			let purchasedItem = items.find(function(item){
					return item.id === newItem;
			});

			shoppingCart.push(purchasedItem);

			// Changes CartEmpty to CartActive
			if ($('div.item').hasClass('addedToCart')) {
				$('#cart-icon').attr('src', 'assets/img/CartActive.svg');
			} else {
				$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
			}
		});
  	}
  	// add items to index.html
  	$(listItems);






















































$('#logo').on('click', function() {
	$('.menu').css('display', 'flex');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');

	$('#logo').on('click', function() {
		$('.reciept').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.menu').css('display', 'flex');
		$('.spacer').css('display', 'block');

		if ($('div.item').hasClass('addedToCart')) {
			$('div.item').removeClass('addedToCart');
			$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
		};

		$('.cartItems').empty();

	});

	$('.menu').css('display', 'none');
	$('.cart').css('display', 'flex');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');

		$('.menu').css('display', 'none');
		$('.spacer').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.cart').css('display', 'flex');

		if ($('div.item').hasClass('addedToCart')) {
			// displaying cart items
			shoppingCart.forEach(function(cart){
				let cartItem = '<div class="item">' + cart.name + '&nbsp; $' + cart.price + '</div>';
				$('.cartItems').append(cartItem);
				let itemPrice = cart.price;
				cartSubtotal += itemPrice;
			});

			cartTax = round(cartSubtotal * 0.06, 2);
			cartTotal = round(cartSubtotal + cartTax, 2);
			$('div.subTotal').text(cartSubtotal);
			$('div.taxTotal').text(cartTax);
			$('div#grandAmount').text(cartTotal);
		};
	});

	function round(value, decimals) {
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

	$('#purchase').on('click', function() {
		$('.menu').css('display', 'none');
		$('.spacer').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'flex');
	});

	$('#cash').on('click', function() {
		$('.spacer').css('display', 'none');
		$('.payment').css('display', 'flex');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'flex');
	});

	$('#credit').on('click', function() {
		$('.spacer').css('display', 'none');
		$('.payment').css('display', 'flex');
		$('.credit').css('display', 'flex');
		$('.cash').css('display', 'none');
	});


	$('button#process').on('click', function() {
		$('.payment').css('display', 'none');
		$('.reciept').css('display', 'flex');
		let cashRcvd = parseInt($('#cashTender').val());
		let change = round(cashRcvd - cartTotal, 2);
		$('#change').val(change);

	});

	$('#done').on('click', function() {
		$('.reciept').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.menu').css('display', 'flex');

		if ($('div.item').hasClass('addedToCart')) {
			$('div.item').removeClass('addedToCart');
			$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
		}
	});
}) ();
// end of wrapping function!!
