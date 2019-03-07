// Level 1: Automatic Table and Date Search
// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
// ### Level 2: Multiple Search Categories (Optional)
// * Complete all of Level 1 criteria.
// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`


// from data.js
var tableData = data;

// Get a reference to the tble body
var tbody = d3.select("tbody");

// fuction to populate table 
function fillTable(data) {
    //clear existing table
    tbody.html("")

    //loop through 'data.js' for each ufo sighting report object
    data.forEach((ufoSighting) => {
        //append table row 'tr' for each ufo sighting
        var sighting = tbody.append("tr");
        //use Object.entries to console.log each ufo sighting value
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = sighting.append("td");
                cell.text(value);
            }
        );
    });
}

//Fill in table
fillTable(data)

// // Select filter button using d3
// var filterBtn = d3.select("#filter-btn")
// //function to query table on date
// filterBtn.on("click", function() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // select input date element and get the raw HTML node
//     var inputDate = d3.select("#datetime")
//     //Get the value property of the input date element
//     var inputValue = inputDate.property("value");

//     //console.log(inputValue);
//     //create table to query
//     var filterData = tableData;
//     //use conditional if date entered, filter by date
//     if (inputValue) {
//         //filter to only keep rows where datetime = filtered value
//         filterData = filterData.filter(sighting => sighting.datetime === inputValue);    
//     }
//     // Populate table
// fillTable(filterData);
// });

// ### Level 2: Multiple Search Categories (Optional)
// * Complete all of Level 1 criteria.
// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
//   1. `date/time` id=#datetime
//   2. `city` 
//   3. `state`
//   4. `country`
//   5. `shape`
// Select filter button using d3

//var filterBtn = d3.selectAll("#filter-btn")
//function to query table on date
//filterBtn.on("click", function() {
function handleClick(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // select input date element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    //Get the value property of the input date element
    var inputValue = inputDate.property("value");

    var city = d3.select("#city").property("value")
    var state = d3.select("#state").property("value")
    var country = d3.select("#country").property("value")
    var shape = d3.select("#shape").property("value")

    //console.log(inputValue);
    //create table to query
    var filterData = tableData;
    //use conditional if date entered, filter by date
    if (inputValue) {
        //filter to only keep rows where datetime = filtered value
        filterData = filterData.filter(sighting => sighting.datetime === inputValue);    
    };

    if (city) {
        //filter to only keep rows where datetime = filtered value
        filterData = filterData.filter(sighting => sighting.city === city);    
    };

    if (state) {
        //filter to only keep rows where datetime = filtered value
        filterData = filterData.filter(sighting => sighting.state === state);    
    };

    if (country) {
        //filter to only keep rows where datetime = filtered value
        filterData = filterData.filter(sighting => sighting.country === country);    
    };

    if (shape) {
        //filter to only keep rows where datetime = filtered value
        filterData = filterData.filter(sighting => sighting.shape === shape);    
    };
    // Populate table
    fillTable(filterData);
};
d3.selectAll("#filter-btn").on("click", handleClick);



