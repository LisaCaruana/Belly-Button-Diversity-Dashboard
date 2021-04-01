d3.json('../../samples.json').then(data=> {
    console.log(data)

    var subject_id = data['names']
    console.log(subject_id)

    var dropdownMenu = document.getElementById("selDataset");

    for(var i = 0; i < subject_id.length; i++) {
        var opt = subject_id[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        dropdownMenu.appendChild(el);
    }

    // d3.selectAll("#selDataset").on("change", fillDropdown);
    
    // function fillDropdown ()


});

function optionChanged (select_id) {
    d3.json('../../samples.json').then(data=> {
        console.log(data);
    
    demographics = data['metadata']
    console.log(demographics)
});  
}
// var data = Object.keys("metadata")
//     console.log(data);

// var dropdown = d3.select("#selDataset");

// dropdown.on("change", runEnter);

// function runEnter() {
//     d3.event.preventDefault();


// }

// function filterData(id) {
//     return data('id')
// }

// var subject_data=data.filter(id=>filterData(id));

// var trace = {
//     'type': 'bar',
//     'x': data.map(data=>data[(SUM('otu_ids'))],
//     'y': data.map(data=>data['otu_ids'])
// };


// var data=[trace]; 

// var layout = {
//     'title': 'Top 10 OTUs',
//     'x-axis': 'Total OTU Count',
//     'y-axis': 'OTU ID',
//     'orientation': 'h'
// }


// plotly.newPlot('bar', data, layout)
// plotly.newPlot('bubble', data, layout)
// var filtered_data = data.filter(person => data['id']=== inputValue)   would need to set inputValue=dropdown
// Data layout: names is a list that contains all of the different subject numbers as a string value, "metadata" is a 
// list of dictionaries with key value pairs containing subject data, identified by subject numbers
// KV pairs: id, ethnicity, gender, age, location, bbtype, wfreq
// OTUs stored under "samples" and referenced with "id" to connect to person and "otu_ids" for OTU names 
// Need to read data into HTML code, construct a foreach loop
// to display data in each separate dictionary
// Need to put an event on the dropdown button 
// event handler on button takes two arguments:
// 1. target or action it's looking for ("click")
// 2. action/function that needs to happen when that target is met 

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart