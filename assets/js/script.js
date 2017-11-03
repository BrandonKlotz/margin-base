
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
	let shoppingCart = [];

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
	    // you have to call the addButtons function after they've been created!
	    addClick();
	  }

		function addClick() {
	  		$('div.item').on('click', function(){

				// temp code here while I figure this out
				//shoppingCart.push($(this));
				$(this).addClass('addedToCart');

				// this.id returns a string, convert it to a number
				let newItem = parseInt(this.id);

				console.log(newItem);

				let purchasedItem = items.find(function(item){
  					return item.id === newItem;
				});

				//console.log(purchasedItem);

 				shoppingCart.push(purchasedItem);
 				console.log(shoppingCart);

				// Changes CartEmpty to CartActive
				if ($('div.item').hasClass('addedToCart')) {
					$('#cart-icon').attr('src', 'assets/img/CartActive.svg');
				} else {
					$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
				}

				// how do we push the item data to the shoppingCart array?
				//let selectedItem = $(this).id;
				//console.log(selectedItem);

			});
	  }


	$(listItems);





















































 // Brandon's Hooking up buttons

$('#logo').on('click', function() {
	$('.menu').css('display', 'flex');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');

	if ($('div.item').hasClass('addedToCart')) {
		$('div.item').removeClass('addedToCart');
		$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
	}

	$('.cartItems').empty();

});

$('#cart-icon').on('click', function() { //

	$('.menu').css('display', 'none');
	$('.cart').css('display', 'flex');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');

	if ($('div.item').hasClass('addedToCart')) {
		// displaying cart items
		let cartSubtotal = 0;
		shoppingCart.forEach(function(cart){
			let cartItem = '<div class="item">' + cart.name + '&nbsp; $' + cart.price + '</div>';
			$('.cartItems').append(cartItem);
			let itemPrice = cart.price;
			cartSubtotal += itemPrice;
		});

		function round(tax, decimals) {
  			return Number(Math.round(tax+'e'+decimals)+'e-'+decimals);
		}

		let cartTax = round(cartSubtotal * 0.06, 2);
		let cartTotal = cartSubtotal + cartTax;
		$('div.subTotal').text(cartSubtotal);
		$('div.taxTotal').text(cartTax);
		$('div#grandAmount').text(cartTotal);
	}

});

$('#purchase').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'flex');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');

});

$('#cash').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'flex');
	$('.reciept').css('display', 'none');
});

$('#credit').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'flex');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'none');
});

$('#process-credit').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'flex');
});

$('#process-cash').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.credit').css('display', 'none');
	$('.cash').css('display', 'none');
	$('.reciept').css('display', 'flex');
});

$('#emailBtn').on('click', function() {
	$('.cartItems').empty();
	
	console.clear();

	$('.reciept').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.menu').css('display', 'flex');
	$('.credit').css('display', 'none');

	if ($('div.item').hasClass('addedToCart')) {
		$('div.item').removeClass('addedToCart');
		$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');

	}

});

})();
// end of wrapping function!!
