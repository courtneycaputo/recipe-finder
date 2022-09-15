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

var recipePreviewEl = document.getElementById("recipe-preview-cards")
var recipeAndInstructionsElement = document.getElementById("recipe-instruction")
var backButtonElement = document.getElementById("back-button")
var homeButtonElement = document.getElementById("home-button")



// const API_KEY = "1439e62e740141f497d83fcd52f527bf";
const API_KEY = "a50ea598efc440d3a1a454e5e818fc69";



searchButton.addEventListener("click", function(event) {
    event.preventDefault();

var search = searchInput.value.trim()
console.log(search);
getSearch(search);
show(recipePreviewEl) //added function

searchInput.value = "";

})

function getSearch (search) {
    let ingredientsURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=${API_KEY}`;
fetch(ingredientsURL).then(function(response) {
    return response.json()
}).then

    // first uncomment the #recipe-preview-cards in css
    // function show() {
    //     var recipePreview = document.getElementById("recipe-preview-cards");
    //     if (recipePreview.style.display=== "none"){
    //         recipePreview.style.display = "visible";
    //     }
    //     else {
    //         recipePreview.style.display = "none";
    //     }
    // }
    
    (function(object) {
    //for(var i=0; i < object.length; i++) {
    console.log(object);
    // console.log(object[i].id)
    // console.log(object[i].title)
    recipeOne.textContent = "";
    recipeTwo.textContent = "";
    recipeThree.textContent = "";
    // need to figure out how to get the images to not repeat
    imageOne.innerHTML= " "; // added this
    imageTwo.innerHTML = " "; // added this
    imageThree.innerHTML = " "; // added this

    var h2El = document.createElement("p");
    var imgEl = document.createElement("img");
    imgEl.src = object[0].image;
    h2El.textContent = object[0].title;
    // imageOne.innerHTML = "<img src='" + object[0].image +"'>"; 
    imageOne.appendChild(imgEl); // changed to imageOne instead of recipeOne
    recipeOne.appendChild(h2El);

    var h2El = document.createElement("p");
    var imgEl = document.createElement("img");
    imgEl.src = object[1].image;
    h2El.textContent = object[1].title;
    // imageTwo.innerHTML = "<img src='" + object[1].image +"'>";
    imageTwo.appendChild(imgEl); // changed to imageOne instead of recipeOne
    recipeTwo.appendChild(h2El);

    var h2El = document.createElement("p");
    var imgEl = document.createElement("img");
    imgEl.src = object[2].image;
    h2El.textContent = object[2].title;
    // imageThree.innerHTML = "<img src='" + object[2].image +"'>";
    imageThree.appendChild(imgEl); // changed to imageOne instead of recipeOne
    recipeThree.appendChild(h2El);
    //}
    getID(object[0].id)
    })

    
}
 
/*
getIngredients.addEventListener("click", function(event) {
    event.preventDefault;

    var choiceOne = object[0].id;
    //var search = searchInput.value.trim()
    console.log(iD);
    getiD(iD);

    choiceOne.value = "";
    
})
*/









function getID(iD){
let apiURL = 'https://api.spoonacular.com/recipes/' + iD + '/information?&apiKey=' + API_KEY;
fetch(apiURL).then(function(response) {
    return response.json()
}).then (function(object) {
    console.log(object);
    console.log(object.instructions)
    
    ingredientList.textContent = ""; // added this to stop ingredients showing twice
    
    var ingredients = object.extendedIngredients
    for(var i=0; i < ingredients.length; i++) {
        // This statement will run each time the loop is executed
        var liEl = document.createElement("li")
        console.log(ingredients[i].name);
        liEl.textContent = ingredients[i].name
        ingredientList.appendChild(liEl)
      }
    
    instructionSummaryElement.innerHTML = object.instructions
    recipeName.innerHTML = object.title // added this
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
    hide(recipePreviewEl);
    show(recipeAndInstructionsElement)
});

choiceTwo.addEventListener("click", function () {
    hide(recipePreviewEl);
    show(recipeAndInstructionsElement)
});

choiceThree.addEventListener("click", function () {
    hide(recipePreviewEl);
    show(recipeAndInstructionsElement)
});

backButtonElement.addEventListener("click", function() {
    hide(recipeAndInstructionsElement)
    show(recipePreviewEl)
})

homeButtonElement.addEventListener("click", function(){
    hide(recipePreviewEl)
    hide(recipeAndInstructionsElement)
})











