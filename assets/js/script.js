var instructionSummaryElement = document.getElementById("instruction-summary")
var searchButton = document.getElementById("search-ingredients");
var searchInput = document.getElementById("search-input")
var ingredientList = document.getElementById("ingredient-list")
var recipeOne = document.getElementById("recipe-1");
var recipeTwo = document.getElementById("recipe-2");
var recipeThree = document.getElementById("recipe-3");



const API_KEY = "1439e62e740141f497d83fcd52f527bf";


searchButton.addEventListener("click", function(event) {
    event.preventDefault();

var search = searchInput.value.trim()
console.log(search);
getSearch(search);

searchInput.value = "";

})

function getSearch (search) {
    let ingredientsURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=${API_KEY}`;
fetch(ingredientsURL).then(function(response) {
    return response.json()
}).then (function(object) {
    //for(var i=0; i < object.length; i++) {
    console.log(object);
    //console.log(object[i].id)
    //console.log(object[i].title)
    recipeOne.textContent = "";
    recipeTwo.textContent = "";
    recipeThree.textContent = "";
    var h2El = document.createElement("h2");
    var imgEl = document.createElement("img");
    h2El.textContent = object[0].title;
    imgEl.src = object[0].image;
    recipeOne.appendChild(imgEl);
    recipeOne.appendChild(h2El);

    var h2El = document.createElement("h2");
    var imgEl = document.createElement("img");
    imgEl.src = object[1].image;
    h2El.textContent = object[1].title;
    recipeTwo.appendChild(imgEl);
    recipeTwo.appendChild(h2El);

    var h2El = document.createElement("h2");
    var imgEl = document.createElement("img");
    imgEl.src = object[2].image;
    h2El.textContent = object[2].title;
    recipeThree.appendChild(imgEl);
    recipeThree.appendChild(h2El);
    //}
    getID(object[0].id)
    })
}







function getID(iD){
let apiURL = 'https://api.spoonacular.com/recipes/' + iD + '/information?&apiKey=' + API_KEY;
fetch(apiURL).then(function(response) {
    return response.json()
}).then (function(object) {
    console.log(object);
    console.log(object.instructions)
    var ingredients = object.extendedIngredients
    for(var i=0; i < ingredients.length; i++) {
        // This statement will run each time the loop is executed
        var liEl = document.createElement("li")
        console.log(ingredients[i].name);
        liEl.textContent = ingredients[i].name
        ingredientList.appendChild(liEl)
      }
    
    instructionSummaryElement.innerHTML = object.instructions
})
}

function hide(element) {
    element.classList.add("hide")
}

//displays element
function show(element) {
    element.classList.remove("hide")
}











