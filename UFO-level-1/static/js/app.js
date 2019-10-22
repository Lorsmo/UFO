// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
  // Using Arrow Functions

function allData() {
  tbody.html("");
  tableData.forEach((witnessReport) => {
    var row = tbody.append("tr");
    Object.entries(witnessReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

allData();
var dateButton = d3.select("#date");

var dates = tableData.map(witnessReport => witnessReport.datetime);
let uniqueDates = Array.from(new Set(dates));
console.log(uniqueDates)

uniqueDates.forEach((date) => {
  var option = dateButton.append("option");
  var valueDate = option.attr("value", date).text(date);
});

//var date = dateButton.append("li");
//date.append(value);

//var button = d3.select("#placeholder");
var inputElement = d3.select("#value");
var searchButton = d3.select("#filter-btn")

searchButton.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});
//function display (dataFiltered) {
  //tbody.html("");
    //dataFiltered.forEach((report) => {
      //var row = tbody.append("tr");
      //Object.entries(report).forEach(([key, value]) => {
        //var cell = row.append("td");
        //cell.text(value);
      //})
    //})
  //};


searchButton.on("click", function() {
  console.log("button clicked");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  if (inputValue === "All") {
    allData();
    console.log("All selected");
  }
  else {
  var filtered = tableData.filter(report => report.datetime === inputValue);
  tbody.html("");
  filtered.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
}
});
  //// remove any children from the list to
  //display (filtered);
//});

var dateList = d3.select("#list");

//function click(event) {
  //var value = d3.event.target.value;
  //tbody.html("");
  //var dateClick = tableData.filter(report => report.datetime === value);
  //display (dateClick)
//};
//
//dateList.on("click", click);


