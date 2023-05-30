let form = document.querySelector("js-recipe-form");
let foodInput = document.querySelector("[name=recipe-name]");

function queryFood(searchExpression) {
    
}

function formSubmitted(event) {
    event.preventDefault();
    
    queryFood(foodInput.value);
    foodInput.value = "";
}

form.addEventListener("submit", formSubmitted);