// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
//var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("city");
//var $stateInput = document.querySelector("state");
//var $countryInput = document.querySelector("country");
//var $shapeInput = document.querySelector("shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set ufoData to dataSet initially
var filterCity = dataSet;

// renderTable renders the ufoData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filterCity.length; i++) {
        // Get get the current address object and its fields
        var place = filterCity[i];
        var fields = Object.keys(place);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = place[field];
        }
    }
}

function handleSearchButtonClick() {

    console.log("helloworld")
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterArea = $cityInput.value.trim().toLowerCase();

    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filterCity = dataSet.filter(function (place) {
        var locationCity = place.city.toLowerCase();

        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return locationCity === filterArea;
    });
    renderTable();
}

// Render the table for the first time on page load
renderTable();
