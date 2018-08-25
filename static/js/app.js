// from data.js
var tableData = data;

function renderTable(filter_text) {
    if(filter_text.length == 0) {
        var tbody = d3.select("tbody");
        tableData.forEach(x => {
            var row = tbody.append("tr");
            Object.entries(x).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
            })
        }) 
    } else {
        var tbody = d3.select("tbody");
        d3.selectAll('td').remove();
        let filteredData = tableData.filter(x => x.datetime == filter_text);
        filteredData.forEach(x => {
            var row = tbody.append("tr");
            Object.entries(x).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
            })
        }) 
    }
}

renderTable("")

d3.select("#filter-btn").on("click",() => {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    renderTable(inputValue)
})

