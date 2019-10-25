// from data.js
var tableData = data;

d3.selectAll("select").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
});

// Get a reference to the table body
var tbody = d3.select("tbody");
var numberEvents = d3.select("#number-events");
  // Using Arrow Functions

function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;
}
// Function to display all the events and the number of events
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

allData();
var dateButton = d3.select("#date");
var cityButton = d3.select("#city");
var stateButton = d3.select("#state");
var countryButton = d3.select("#country");
var shapeButton = d3.select("#shape");

var dates = tableData.map(report => report.datetime),
cities = tableData.map(report => report.city),
states = tableData.map(report => report.state),
countries = tableData.map(report => report.country),
shapes = tableData.map(report => report.shape);

function selectDates() {
  return tableData.filter(report => report.datetime === dateButton.node().value);
}

function selectCities() {
  return report => report.city === inputValue;
}
function selectStates() {
  return report => report.state === inputValue;
}



function append(value, button) {
  let unique = Array.from(new Set(value));
  unique.forEach((value) => {
  button.append("option").attr("value", value).text(value);
  });
}

append(dates, dateButton);
append(cities, cityButton);
append(states, stateButton);
append(countries, countryButton);
append(shapes, shapeButton);


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




//searchButton.on("click", function() {
//dateButton.on("change", changeSelected(dateButton, selectDates));

//function changeSelected (button, selectValues) {
  //// Select the input value of the element
  //var inputValue = button.node().value;
  //// Condition
  //if (inputValue === "All") {
  //allData();
  //}
  //else {
  //var filtered = selectValues();
  //display (filtered);
  //d3.select("#number-events").text(objectLength(filtered));
  //}
//};

//dateButton.on("change", changeSelected(dateButton, selectDates));

dateButton.on("change", function() {
  // Select the input value of the element
  var inputValue = dateButton.node().value;
  // Condition
  if (inputValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.datetime === inputValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

cityButton.on("change", function() {
  // Select the input value of the element
  var inputValue = cityButton.node().value;
  // Condition
  if (inputValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.city === inputValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

stateButton.on("change", function() {
  // Select the input value of the element
  var inputValue = stateButton.node().value;
  // Condition
  if (inputValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.state === inputValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

countryButton.on("change", function() {
  // Select the input value of the element
  var inputValue = countryButton.node().value;
  // Condition
  if (inputValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.country === inputValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});

shapeButton.on("change", function() {
  // Select the input value of the element
  var inputValue = shapeButton.node().value;
  // Condition
  if (inputValue === "All") {
    allData();
  }
  else {
  var filtered = tableData.filter(report => report.shape === inputValue);
  display (filtered);
  d3.select("#number-events").text(objectLength(filtered));
  }
});
//dateButton.on("change", change (dateButton, datetime));
//cityButton.on("change", change (cityButton));

  //// remove any children from the list to
  //display (filtered);
//});

var dateList = d3.select("#list");

//$(document).ready(function(){
//  $("#inputSearch").on("keyup", function() {
//    var value = $(this).val().toLowerCase();
//    $(".search_table").filter(function() {
//      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//    });
//  });
//});

//function myFunction() {
  //// Declare variables
  //var input, filter, table, tr, td, i, txtValue;
  //input = document.getElementById("inputSearch");
  //filter = input.value.toUpperCase();
  //table = document.getElementById("table-area");
  //tr = table.getElementsByTagName("tr");
//
  //// Loop through all table rows, and hide those who don't match the search query
  //for (i = 0; i < tr.length; i++) {
    //td = tr[i].getElementsByTagName("td")[0];
    //if (td) {
      //txtValue = td.textContent || td.innerText;
      //if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //tr[i].style.display = "";
      //} else {
        //tr[i].style.display = "none";
      //}
    //}
  //}
//}

inputHolder = d3.select(".filterable input");

inputHolder.on("keyup", (function() {
  console.log("changed input")
  /* Ignore tab key */
  //var code = e.keyCode || e.which;
  //if (code == '9') return;
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