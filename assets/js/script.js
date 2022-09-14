var instructionSummaryElement = document.getElementById("instruction-summary")
var ingredientList = document.getElementById("ingredient-list")

// const API_KEY = "1439e62e740141f497d83fcd52f527bf";


let ingredientsURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&number=3&apiKey=" + API_KEY;
fetch(ingredientsURL).then(function(response) {
    return response.json()
}).then (function(object) {
    for(var i=0; i < object.length; i++){
    console.log(object);
    console.log(object[i].id)
    console.log(object[i].title)
    }
    getID(object[0].id)
})


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











