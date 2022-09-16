var instructionSummaryElement = document.getElementById("instruction-summary");
var recipeName = document.getElementById("recipe-name"); // added this
var searchButton = document.getElementById("search-ingredients");
var searchInput = document.getElementById("search-input");
var ingredientList = document.getElementById("ingredient-list");
var recipeOne = document.getElementById("recipe-1");
var recipeTwo = document.getElementById("recipe-2");
var recipeThree = document.getElementById("recipe-3");
var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");
var imageOne = document.getElementById("image-one"); // added this
var imageTwo = document.getElementById("image-two"); // added this
var imageThree = document.getElementById("image-three"); // added this
var idOne;
var idTwo;
var idThree;
var drinks = document.getElementById("drink");

var recipePreviewEl = document.getElementById("recipe-preview-cards")
var recipeAndInstructionsElement = document.getElementById("recipe-instruction")
var backButtonElement = document.getElementById("back-button")
var homeButtonElement = document.getElementById("home-button")
var errorElement = document.getElementById("error")



// const API_KEY = "1439e62e740141f497d83fcd52f527bf";
//const API_KEY = "a50ea598efc440d3a1a454e5e818fc69";
const API_KEY = "ea834bbf95a540bdaa02e3de375414eb";




searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    var search = searchInput.value.trim()
    console.log(search);
    getSearch(search);
    
    hide(recipeAndInstructionsElement)

    searchInput.value = "";

})

function getSearch(search) {
    let ingredientsURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=${API_KEY}`;
    fetch(ingredientsURL).then(function (response) {
        return response.json()
    }).then

        (function (object) {
            if(object.length === 0){
                console.log(object)
                errorElement.innerHTML = "<div>Nothing found</div>"
                hide(recipePreviewEl)
                hide(recipeAndInstructionsElement)
                return;
            }
            errorElement.innerHTML = " "; 
            show(recipePreviewEl) //added function
            console.log(object);
            recipeOne.textContent = "";
            recipeTwo.textContent = "";
            recipeThree.textContent = "";
            // need to figure out how to get the images to not repeat
            imageOne.innerHTML = " ";
            imageTwo.innerHTML = " ";
            imageThree.innerHTML = " ";

            var h2El = document.createElement("p");
            var imgEl = document.createElement("img");
            imgEl.src = object[0].image;
            h2El.textContent = object[0].title;
            imageOne.appendChild(imgEl);
            recipeOne.appendChild(h2El);

            var h2El = document.createElement("p");
            var imgEl = document.createElement("img");
            imgEl.src = object[1].image;
            h2El.textContent = object[1].title;
            imageTwo.appendChild(imgEl);
            recipeTwo.appendChild(h2El);

            var h2El = document.createElement("p");
            var imgEl = document.createElement("img");
            imgEl.src = object[2].image;
            h2El.textContent = object[2].title;
            imageThree.appendChild(imgEl);
            recipeThree.appendChild(h2El);
            //}

            idOne = object[0].id;
            idTwo = object[1].id;
            idThree = object[2].id;

        })
}



function getID(iD) {
    let apiURL = 'https://api.spoonacular.com/recipes/' + iD + '/information?&apiKey=' + API_KEY;
    fetch(apiURL).then(function (response) {
        return response.json()
    }).then(function (object) {
        console.log(object);
        console.log(object.instructions)

        ingredientList.textContent = ""; // added this to stop ingredients showing twice

        var ingredients = object.extendedIngredients
        for (var i = 0; i < ingredients.length; i++) {
            // This statement will run each time the loop is executed
            var liEl = document.createElement("li")
            console.log(ingredients[i].name);
            liEl.textContent = ingredients[i].name
            ingredientList.appendChild(liEl)
        }
        instructionSummaryElement.innerHTML = " ";
        recipeName.innerHTML = " ";
        instructionSummaryElement.innerHTML = object.instructions
        recipeName.innerHTML = object.title // added this
    })

}

function getDrinks() {
    let ingredientsURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    fetch(ingredientsURL).then(function (response) {
        return response.json()
    }).then
        (function (object) {
            console.log(object.drinks[0].strDrink)
            console.log(object.drinks[0].strDrinkThumb)
            drinks.innerHTML = `<div class="card-image"><h5 white-text>Try pairing this recipe with a cocktail!</h5><img src="${object.drinks[0].strDrinkThumb}"> <h4 class="card-content white-text center">${object.drinks[0].strDrink}</h4></div>`
        })
}




function hide(element) {
    element.classList.add("hide")
}

//displays element
function show(element) {
    element.classList.remove("hide")
}

choiceOne.addEventListener("click", function () {
    ingredientList.textContent = " ";
    instructionSummaryElement.innerHTML = " ";
    recipeName.innerHTML = " ";
    drinks.innerHTML = " ";
    hide(recipePreviewEl);
    getID(idOne);
    show(recipeAndInstructionsElement);
    getDrinks()

});

choiceTwo.addEventListener("click", function () {
    ingredientList.textContent = " ";
    instructionSummaryElement.innerHTML = " ";
    recipeName.innerHTML = " ";
    drinks.innerHTML = " ";
    hide(recipePreviewEl);
    getID(idTwo);
    show(recipeAndInstructionsElement)
    getDrinks()

});

choiceThree.addEventListener("click", function () {
    ingredientList.textContent = " ";
    instructionSummaryElement.innerHTML = " ";
    recipeName.innerHTML = " ";
    drinks.innerHTML = " ";
    hide(recipePreviewEl);
    getID(idThree);
    show(recipeAndInstructionsElement)
    getDrinks()
});

backButtonElement.addEventListener("click", function () {
    hide(recipeAndInstructionsElement)
    show(recipePreviewEl)
})

homeButtonElement.addEventListener("click", function () {
    hide(recipePreviewEl)
    hide(recipeAndInstructionsElement)
})











