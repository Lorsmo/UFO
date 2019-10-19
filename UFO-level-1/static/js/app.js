// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//// Console.log the weather data from data.js
//console.log(tableData);
//
//// Loop Through `tableData` and console.log each eye-witness report object
//tableData.forEach(function(witnessReport) {
    //console.log(witnessReport);
  //});
//
//// Use d3 to append one table row `tr` for each eye-witness report object
//tableData.forEach(function(witnessReport) {
    //console.log(witnessReport);
    //var row = tbody.append("tr");
  //});
// 
//// Use `Object.entries` to console.log each eye-witness report value
//tableData.forEach(function(witnessReport) {
    //console.log(witnessReport);
    //var row = tbody.append("tr");
    //Object.entries(witnessReport).forEach(function([key, value]) {
      //console.log(key, value);
    //});
  //});

//// Use d3 to append 1 cell per eye-witness report value
//tableData.forEach(function(witnessReport) {
//    console.log(witnessReport);
//    var row = tbody.append("tr");
//    Object.entries(witnessReport).forEach(function([key, value]) {
//      console.log(key, value);
//      // Append a cell to the row for each value in the eye-witness report object
//      var cell = row.append("td");
//    });
//  });

 //// Step 5: Use d3 to update each cell's text with
 //// weather report values (weekday, date, high, low)
 //tableData.forEach(function(witnessReport) {
    //console.log(witnessReport);
    //var row = tbody.append("tr");
    //Object.entries(witnessReport).forEach(function([key, value]) {
      //console.log(key, value);
      //// Append a cell to the row for each value in the eye-witness report object
      //var cell = row.append("td");
      //cell.text(value);
    //});
  //});

  // Using Arrow Functions
tableData.forEach((witnessReport) => {
    var row = tbody.append("tr");
    Object.entries(witnessReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");

  button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    ("tbody tr").filter(report => report.datetime === inputValue);
    // Then, select the table
    //var list = tbody;

    //// remove any children from the list to
    //tbody.html("");
//
    //// append results to the list
    //tbody.append(filteredData)
  });