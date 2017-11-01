
$(function() {

	const items = [
	{ id: 10, name: "Alaskan Thunder", description: "dank weed", price: 1, category: "smokeables"},
	{ id: 11, name: "Purple Haze", description: "skunk weed", price: 1, category: "smokeables"},
	{ id: 12, name: "Pineapple Express", description: "not-so-dank weed", price: 1, category: "smokeables"},
	{ id: 13, name: "Maui Wowie", description: "island weed", price: 1, category: "smokeables"},
	{ id: 14, name: "Kingdom of Kush", description: "sweet weed", price: 1, category: "smokeables"},
	{ id: 15, name: "After School Special", description: "not-so-skunky weed", price: 1, category: "smokeables"},

	{ id: 50, name: "Gummies", description: "marijuana-infused gummy candy", price: 1, category: "edibles"},
	{ id: 51, name: "Special Brownies", description: "weed-laced brownies", price: 1, category: "edibles"},
	{ id: 52, name: "Green Elixir", description: "bright green grass drink for sipping", price: 1, category: "edibles"},
	{ id: 53, name: "No-Bake Cookies", description: "get baked with our no-bakes", price: 1, category: "edibles"},

	{ id: 70, name: "Bowl", description: "rainbow bowl", price: 1, category: "accessories"},
	{ id: 71, name: "Grinder", description: "not grindr", price: 1, category: "accessories"}
	];	


// for (var i=0; i<items.length; i++) { 

// 	console.log(`${items[i].id} ${items[i].name} ${items[i].description} ${items[i].category}`);
// }

let itemDetails = "";
	$.each(items, function(index, object) {
	   $.each(object,function(attribute, value){
	     console.log(`${value}`);
	     // do something with each attribute and value, like concat a variable?
	     // itemDetails = itemDetails + " " + value;
	     // console.log(itemDetails);
	   });
	});

});
// end of wrapping function!!


//Ross calls this a document-ready YO, confirms page is loading properly
/* $(function() {
     alert("yo");
 });
 */
