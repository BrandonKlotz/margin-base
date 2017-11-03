(function() {

	// Our database of shop items
	const items = [

	// Category 1
	{ id: 10, name: "I-beam", description: "Structural steel", price: 91.95, category: "Metals"},
	{ id: 11, name: "Column", description: "Support up to 14,600 lb.", price: 147.95, category: "Metals"},
	{ id: 12, name: "Rebar", description: "Grade 40 unfinished steel construction", price: 5.25, category: "Metals"},
	{ id: 13, name: "Wire Rope", description: "Galvanized uncoated", price: 16.90, category: "Metals"},
	{ id: 14, name: "Strut Channels", description: "Galvanized slotted", price: 18.94, category: "Metals"},
	{ id: 15, name: "Metal Trusses", description: "8' Steel", price: 89.44, category: "Metals"},
	// Category 2
	{ id: 50, name: "Brick", description: "Terra Cotta", price: 6.45, category: "Masonry"},
	{ id: 51, name: "Cinder Block", description: "Standard size", price: 1.55, category: "Masonry"},
	{ id: 52, name: "Noxer Block", description: "5-7 mm thick coating", price: 55.99, category: "Masonry"},
	{ id: 53, name: "Urbanite", description: "Broken-up concrete", price: 5.51, category: "Masonry"},
	// Category 3
	{ id: 70, name: "Circut Breaker", description: "100-amp", price: 88.45, category: "Electric Systems"},
	{ id: 71, name: "Electrical Connector", description: "Amphenol", price: 13.24, category: "Electric Systems"}
	];

	// Items that are selected in menu are pushed to shoppingCart array
	const shoppingCart = [];
	let cartSubtotal = 0;
	let cartTax = 0;
	let cartTotal = 0;

	// Insert items into menu
	function listItems() {

		let wrapper = $('.wrapper.menu');
		let currentCategory = "";

			// For each item
	    items.forEach(function(item) {

	    	// Insert category div if necessary
	    	if( item.category !== currentCategory){
	    		let category = '<div class="categoryHead">' + item.category.toUpperCase() + '</div>';
	    		wrapper.append(category);
	    		currentCategory = item.category;
	    	}

	    	// Insert each item div
	    	let menuItem = '<div id="' + item.id + '" class="item">' + item.name + ' &nbsp; <span class="description">' + item.description + '</span><span class="price">  &nbsp; $ ' + item.price +'</span></div>';
	    	wrapper.append(menuItem);
	    });

	    // Call addClick to set event handler on item buttons just created
	    selectItems();
	}

	// Add selected item to shopping cart
	function selectItems() {

  		$('div.item').on('click', function(){
			$(this).addClass('addedToCart');

			// this.id returns a string. parseInt() converts it to a number
			let newItem = parseInt(this.id);

			let purchasedItem = items.find(function(item){
					return item.id === newItem;
			});

			// Pushes selected items to shoppingCart
			shoppingCart.push(purchasedItem);

			// Changes CartEmpty icon to CartActive icon if shoppingCart array is empty or active
			if ($('div.item').hasClass('addedToCart')) {
				$('#cart-icon').attr('src', 'assets/img/CartActive.svg');
			} else {
				$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
			}
		});
  	}
  	// Add items to index.html menu
  	$(listItems);

	// On logo icon click
	$('#logo').on('click', function() {

		// Show Menu - Hide all other modals
		$('.menu').css('display', 'flex');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'none');

		// Empty the html from cart
		$('.cartItems').empty();

	});

	// On cart icon click
	$('#cart-icon').on('click', function() {

		// Show Cart - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'flex');
		$('.payment').css('display', 'none');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'none');


		// Reset cart item totals
		cartSubtotal = 0;
		cartTax = 0;
		cartTotal = 0;

		// Add cartItem array to cartItems Div
		if ($('div.item').hasClass('addedToCart')) {
			shoppingCart.forEach(function(cart){
				let cartItem = '<div class="item">' + cart.name + '&nbsp; $' + cart.price + '</div>';
				$('.cartItems').append(cartItem);
				let itemPrice = cart.price;
				cartSubtotal += itemPrice;
				round(cartSubtotal, 2);
			});

			// Calculate cart totals
			cartTax = round(cartSubtotal * 0.06, 2);
			cartTotal = round(cartSubtotal + cartTax, 2);
			$('div.subTotal').text(cartSubtotal);
			$('div.taxTotal').text(cartTax);
			$('div#grandAmount').text(cartTotal);
		};
	});

	// Round integers
	function round(value, decimals) {
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

	// On purchase button click
	$('#purchase').on('click', function() {

		// Show payment options - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'flex');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'none');
	});

	// On cash payment option button click
	$('#cash').on('click', function() {

		// Show Payment and Cash option - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'flex');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'flex');
		$('.reciept').css('display', 'none');
	});

	// On credit payment option button click
	$('#credit').on('click', function() {

		// Show Payment and Credit option - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'flex');
		$('.credit').css('display', 'flex');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'none');
	});

	// On process credit button click
	$('#process-credit').on('click', function() {

		// Show reciept - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'flex');
	});

	// On process cash button click
	$('button#process-cash').on('click', function() {

		// Show Cash tender and reciept - Hide all other modals
		$('.menu').css('display', 'none');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'flex');
		$('.reciept').css('display', 'flex');

		// Show change after processed
		let cashRcvd = parseInt($('#cashTender').val());
		let change = round(cashRcvd - cartTotal, 2);
		$('#change').val(change);
	});

	// On email button click
	$('#emailBtn').on('click', function() {

		// Show Menu - Hide all other modals
		$('.menu').css('display', 'flex');
		$('.cart').css('display', 'none');
		$('.payment').css('display', 'none');
		$('.credit').css('display', 'none');
		$('.cash').css('display', 'none');
		$('.reciept').css('display', 'none');

		// Changes CartEmpty icon to CartActive icon if shoppingCart array is empty or active
		if ($('div.item').hasClass('addedToCart')) {
			$('div.item').removeClass('addedToCart');
			$('#cart-icon').attr('src', 'assets/img/CartEmpty.svg');
		}

		// Reloads webpage to clear all arrays
		location.reload();
	});

	$('#empty-cart').on('click', function() {

		// Reloads webpage to clear all arrays
		location.reload();

	});
}) ();
// End of wrapping function!!
