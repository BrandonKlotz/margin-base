
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

	  function addClick() {
	  		$('div.item').on('click', function(){
				
				// temp code here while I figure this out
				$(this).addClass('addedToCart');
				let newItem = this.id;
				console.log(newItem);


				// how do we push the item data to the shoppingCart array?
				//let selectedItem = $(this).id;
				//console.log(selectedItem);

			});
	  }


	$(listItems);





















































 // Brandon's Hooking up buttons

$('#cart-icon').on('click', function() {
	$('.menu').css('display', 'none');
	$('.cart').css('display', 'flex');
});

$('#purchase').on('click', function() {
	$('.cart').css('display', 'none');
	$('.checkout').css('display', 'flex');
});

$('#cash').on('click', function() {
	$('.checkout').css('display', 'flex');
	$('.cash').css('display', 'flex');
});

$('#credit').on('click', function() {
	$('.checkout').css('display', 'flex');
	$('.credit').css('display', 'flex');
});

$('#process').on('click', function() {
	$('.checkout').css('display', 'none');
	$('.reciept').css('display', 'flex');
});

$('#done').on('click', function() {
	$('.reciept').css('display', 'none');
	$('.menu').css('display', 'flex');
});

if (items.hasClass('.addedToCart')) {
	$('#cart-icon img').attr('src','assets/img/CartActive.svg');
}

})();
// end of wrapping function!!
