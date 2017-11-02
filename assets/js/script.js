
(function() {

	const items = [

	{ id: 10, name: "Alaskan Thunder", description: "dank weed", price: 10.01, category: "smokeables"},
	{ id: 11, name: "Purple Haze", description: "skunk weed", price: 10.01, category: "smokeables"},
	{ id: 12, name: "Pineapple Express", description: "not-so-dank weed", price: 10.01, category: "smokeables"},
	{ id: 13, name: "Maui Wowie", description: "island weed", price: 10.01, category: "smokeables"},
	{ id: 14, name: "Kingdom of Kush", description: "sweet weed", price: 10.01, category: "smokeables"},
	{ id: 15, name: "After School Special", description: "not-so-skunky weed", price: 10.01, category: "smokeables"},

	{ id: 50, name: "Ganja Gummies", description: "marijuana-infused gummy candy", price: 10.01, category: "edibles"},
	{ id: 51, name: "Medicinal Brownies", description: "weed-laced brownies", price: 10.01, category: "edibles"},
	{ id: 52, name: "Green Elixir", description: "bright green grass drink for sipping", price: 10.01, category: "edibles"},
	{ id: 53, name: "No-Bake Cookies", description: "get baked with our no-bakes", price: 10.01, category: "edibles"},

	{ id: 70, name: "Rainbow Bowl", description: "smoke-a-bowl", price: 10.01, category: "accessories"},
	{ id: 71, name: "Grinder not grindr", description: "grind it up", price: 10.01, category: "accessories"}
	];

	// shopping cart array
	const shoppingCart = [];

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

	  function addClick(items) {
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

				console.log('Purchased Item ' + purchasedItem);

				shoppingCart.push(purchasedItem);

				console.log('Shopping Cart ' + shoppingCart);

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
	$('.reciept').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.menu').css('display', 'flex');
	$('.spacer').css('display', 'block');

	if ($('div.item').hasClass('addedToCart')) {
		$('div.item').removeClass('addedToCart');
		$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
	}

});

$('#cart-icon').on('click', function() { //

	$('.menu').css('display', 'none');
	$('.spacer').css('display', 'none');
	$('.payment').css('display', 'none');
	$('.cart').css('display', 'flex');

	if ($('div.item').hasClass('addedToCart')) {

	shoppingCart.forEach(function(cart){
		let cartItem = '<div class="item">' + cart.name + '&nbsp; $' + cart.price + '</div>';
	});
	$('.cartItems').append(cartItem);
	}

});

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

$('#process').on('click', function() {
	$('.payment').css('display', 'none');
	$('.reciept').css('display', 'flex');
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



})();
// end of wrapping function!!