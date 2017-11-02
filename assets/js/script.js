
$(function() {

	const items = [
	{ id: 10, name: "Alaskan Thunder", description: "dank weed", price: 1, category: "smokeables"},
	{ id: 11, name: "Purple Haze", description: "skunk weed", price: 1, category: "smokeables"},
	{ id: 12, name: "Pineapple Express", description: "not-so-dank weed", price: 1, category: "smokeables"},
	{ id: 13, name: "Maui Wowie", description: "island weed", price: 1, category: "smokeables"},
	{ id: 14, name: "Kingdom of Kush", description: "sweet weed", price: 1, category: "smokeables"},
	{ id: 15, name: "After School Special", description: "not-so-skunky weed", price: 1, category: "smokeables"},

	{ id: 50, name: "Ganja Gummies", description: "marijuana-infused gummy candy", price: 1, category: "edibles"},
	{ id: 51, name: "Medicinal Brownies", description: "weed-laced brownies", price: 1, category: "edibles"},
	{ id: 52, name: "Green Elixir", description: "bright green grass drink for sipping", price: 1, category: "edibles"},
	{ id: 53, name: "No-Bake Cookies", description: "get baked with our no-bakes", price: 1, category: "edibles"},

	{ id: 70, name: "Rainbow Bowl", description: "smoke-a-bowl", price: 1, category: "accessories"},
	{ id: 71, name: "Grinder not grindr", description: "grind it up", price: 1, category: "accessories"}
	];	

	const shoppingCart = [];

	// insert items into index.html
	function listItems() {
		let $wrapper = $('.wrapper');
		let currentCategory = "";
	    items.forEach(function(item) {   
	    	// insert category div if necessary
	    	if( item.category !== currentCategory){
	    		let $category = '<div class="categoryHead">' + item.category.toUpperCase() + '</div>';
	    		$wrapper.append($category);
	    		currentCategory = item.category;
	    	}
	    	let $menuItem = '<div class="item">' + item.name + '&nbsp;<button class="addToCart" type="button"> + </button></div>';
	    	$wrapper.append($menuItem);
	    });
	    addButtons();
	  }

	  function addButtons() {
	  		$('button.addToCart').on('click', function(){
				console.log("clicked it!");
				$(this).addClass('selected');
				// where this refers to the button, not the item
				// how do we push the item data to the shoppingCart array?

				//let selectedItem = $(this).item.name;
			});
	  }


	$(listItems);

});
// end of wrapping function!!


//Ross calls this a document-ready YO, confirms page is loading properly
/* $(function() {
     alert("yo");
 });
 */
