// from data.js
var tableData = data;

//console log the `button` element.
d3.selectAll("select").on("click", function() {
  console.log(this);
});

// Get a reference to the table body
var tbody = d3.select("tbody");
var numberEvents = d3.select("#number-events");
  // Using Arrow Functions

// Function to display all the events and the number of events
function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;
}

// Function to display all the data
function allData() {
  tbody.html("");
  tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  numberEvents.text(objectLength(tableData));
}

// Display the data
allData();




var dateButton = d3.select("#date"),
cityButton = d3.select("#city"),
stateButton = d3.select("#state"),
countryButton = d3.select("#country"),
shapeButton = d3.select("#shape");

var dates = tableData.map(report => report.datetime),
cities = tableData.map(report => report.city),
states = tableData.map(report => report.state),
countries = tableData.map(report => report.country),
shapes = tableData.map(report => report.shape);

// Function to append the values in dropdowns
function append(value, button) {
  let unique = Array.from(new Set(value));
  unique.forEach((value) => {
  button.append("option").attr("value", value).text(value);
  });
}
// Append values in dropdowns
append(dates, dateButton);
append(cities, cityButton);
append(states, stateButton);
append(countries, countryButton);
append(shapes, shapeButton);

// Function to display the data filtered
function display (dataFiltered) {
  tbody.html("");
    dataFiltered.forEach((report) => {
      var row = tbody.append("tr");
      Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
    })
};


dateButton.on("change", function() {
  // Select the input value of the element
  var dateValue = dateButton.node().value;
  
  // Condition
  if (dateValue === "All") {
    allData();
  }
  else {
  //var filtered = tableData.filter(report => report.datetime === dateValue);
  var filtered = tableData.filter(report => report.datetime === dateValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

cityButton.on("change", function() {
  // Select the input value of the element
  
  var cityValue = cityButton.node().value;
  
  // Condition
  if (cityValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.city === cityValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

stateButton.on("change", function() {
  // Select the input value of the element
  
  var stateValue = stateButton.node().value;
  
  // Condition
  if (stateValue === "All") {
    allData();
  }
  else {
  //var filtered = tableData.filter(report => report.state === stateValue);
  var filtered = tableData.filter(report => report.state === stateValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

countryButton.on("change", function() {
  // Select the input value of the element
  
  var countryValue = countryButton.node().value;
  
  // Condition
  if (countryValue === "All") {
    allData();
  }
  else {
    var filtered = tableData.filter(report => report.country === countryValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

shapeButton.on("change", function() {
  // Select the input value of the element
  
  var shapeValue = shapeButton.node().value;
  // Condition
  if (shapeValue === "All") {
    allData();
  }
  else {
    var filtered = tableData.filter(report => report.shape === shapeValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});




inputHolder = d3.select(".filterable input");

inputHolder.on("keyup", (function() {
  console.log("changed input")
  
  /* Useful DOM data and selectors */
  var input = $(this),
  inputContent = input.val().toLowerCase(),
  panel = input.parents('.filterable'),
  column = panel.find('.filters th').index(input.parents('th')),
  table = panel.find('.table'),
  rows = table.find('tbody tr');
  console.log(inputContent)
  /* Dirtiest filter function ever ;) */
  var filteredRows = rows.filter(function(){
      var value = $(this).find('td').eq(column).text().toLowerCase();
      return value.indexOf(inputContent) === -1;
  });
  /* Clean previous no-result if exist */
  table.find('tbody .no-result').remove();
  /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
  rows.show();
  filteredRows.hide();
  /* Prepend no-result row if all rows are filtered */
  if (filteredRows.length === rows.length) {
      table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ table.find('.filters th').length +'">No result found</td></tr>'));
  }
}));

