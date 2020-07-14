"use strict";

// (function() {
//     document.getElementsByTagName("h1").style.color = "blue"
// })();

var searchBar = document.getElementById("coffee-search")
searchBar.addEventListener("input", updateCoffees)
document.getElementById("roast-selection").addEventListener("change", updateCoffees)

function renderCoffee(coffee) { 
    var html = '<div class="coffee d-flex row col-6" id="coffee">'; 
    html += '<div hidden>' + "" + coffee.id + '</div>'; 
    html += '<h5>' + coffee.name + '</h5>'; 
    html += '<h6 class="align-items-baseline">' + coffee.roast + '</h6>'; 
    html += '</div>'; 
    return html; 
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//Filters by roast selection then searches by input. Calls function every time a new letter is typed using eventListeners.

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log("test")
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "") {
            if (coffee.name.toLowerCase().includes(searchBar.value.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// for a  add coffee section
function addNewCoffee (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let coffeeName = newCoffeeName.value;
    let newSelectedRoast = newRoastSelection.value;
    if (coffeeName !== '') {
        coffees.push({id: coffees.length + 1, name: coffeeName, roast: newSelectedRoast})
        updateCoffees(e);
    }
    newCoffeeName.value = "";
}
var submitButton = document.querySelector('#submit1');
var newRoastSelection = document.querySelector('#new-roast-selection');
var newCoffeeName = document.querySelector('#new-coffee-name');
submitButton.addEventListener('click', addNewCoffee);

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];

    var coffeeList = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');

    //this for adding a coffee
    var roastSelection1 = document.querySelector('#roast-selection1');
    coffeeList.innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', updateCoffees);