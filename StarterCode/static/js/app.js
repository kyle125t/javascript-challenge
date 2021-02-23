// from data.js
var tableData = data;

// Selections from index.html placed into variables 
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Function to create and populate table

function displayTable(ufoData) {
    ufoData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

function deleteTable() {
    tbody.selectAll("tr").remove();
    tbody.selectAll("td").remove();
}

// Populate displayTable function with data.js information
displayTable(tableData);

// Format filter button
button.on("click", function(event) {
    var dateTime = d3.select("#datetime").property("value");
    d3.event.preventDefault();
    deleteTable();

    if (dateTime.trim() === "") {
        var filteredUFO = tableData;
    }
    else {
        var filteredUFO = tableData.filter(ufoSighting => ufoSighting.datetime === dateTime.trim());
    }
    if (filteredUFO.length === 0) {
        d3.select("tbody").append("tr", "td").html("<h1>No sightings found on that date</h1>");
    };
    displayTable(filteredUFO);
});