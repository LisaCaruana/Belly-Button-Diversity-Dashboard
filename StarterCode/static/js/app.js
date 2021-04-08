function importData(samples) {
    var url = "../../samples.json" + samples;
    d3.json(url).then(data=> {
        var samples = data['samples'];

        var sample_data = d3.select("#sample-data");

        sample_data.html("");

        Object.defineProperties(sample).forEach(([key, value]) => {
            var row = sample_data.append("p");
            row.text(`${key}: ${value}`);
        });
    })
    };


function buildChart(id_number) {
    d3.json('../../samples.json').then(data=> {
      var samples = data['samples'];
      // filter functions takes an array and returns an array
      var filtered_samples = samples.filter(item => item.id==id_number)
      var sample_dictionary = filtered_samples[0]
      var otu_ids = sample_dictionary['otu_ids']
      var otu_string = otu_ids.slice(0,10).map(otu => `OTU ${otu}`)

      var trace1 = [{
        type: 'bar',
        y: otu_string,
        x: sample_dictionary['sample_values'].slice(0,10),
        orientation: 'h'
        // x: select_id (Math.sum['otu_ids'])
    }];
    //trace tells it what kind of graph to be and gives it the data to build the graph
      var layout1 = [{
        'title': 'Top 10 OTUs',
        'x-axis': 'Total OTU Count',
        'y-axis': 'OTU ID',       
    }];
    Plotly.newPlot('bar', trace1, layout1)

    //start bubble chart here can start at line 24 
      var trace2 = [{
        type: 'bubble',
        y: 'samples',
        x: 'otu_ids'
    }];
      var layout2 = [{
        'title': 'OTUs Measured',
        'x-axis': 'OTU IDs',
        'y-axis': 'Sample Values',       
    }];
    Plotly.newPlot('bubble', trace2, layout2)
    });
};
//need to build charts within the build chart function 

function init() {
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
       
        // buildChart(subject_id[0])  this is how you initially get the data to show. 
        });
    };

init()
    // d3.selectAll("#selDataset").on("change", fillDropdown);
    
    // function fillDropdown ()


// Want to create a function to build all of the charts, need filtering of dataset depending on what ID number is selected 
// function optionChanged (select_id) {
//     d3.json('../../samples.json').then(data=> {
//         console.log(data);
    
//     demographics = data['metadata']
//     console.log(demographics)
// });  

// function buildChart(id_number) {
//     d3.json('../../samples.json').then(data=> {
//       var samples = data['samples'];
//       // filter functions takes an array and returns an array
//       var filtered_samples = samples.filter(item => item.id==id_number)
//       var sample_dictionary = filtered_samples[0]
//       var otu_ids = sample_dictionary['otu_ids']
//       var otu_string = otu_ids.slice(0,10).map(otu => `OTU ${otu}`)

//       var trace1 = [{
//         type: 'bar',
//         y: otu_string,
//         x: sample_dictionary['sample_values'].slice(0,10),
//         orientation: 'h'
     
//     }];
//     //trace tells it what kind of graph to be and gives it the data to build the graph
//       var layout1 = {
//         'title': 'Top 10 OTUs',
//         'x-axis': 'Total OTU Count',
//         'y-axis': 'OTU ID',       
//     };
//     //     var layout2 = {
//     //     'title': 'OTUs Measured',
//     //     'x-axis': 'OTU IDs',
//     //     'y-axis': 'Sample Values',       
//     // };
//     Plotly.newPlot('bar', trace1, layout1);
//     // Plotly.newplot('bubble', trace2, layout2)
// });
//     // d3.json('../../samples.json').then(data=> {
//     //     var samples = data['samples'];

//     // var margin = { top: 30, right:150, bottom: 60, left: 30},
//     //     width = 500 - margin.left - margin.right,
//     //     height = 400 - margin.top - margin.bottom;
    
//     // var svg = d3.select("#bubble")
//     //     .append("svg")
//     //         .attr("width", width + margin.left + margin.right)
//     //         .attr("height", height + margin.top + margin.bottom)
//     //     .append("g")
//     //         .attr("transform",
//     //         "translate (" + margin.left + "," + margin.top + ")");
    
//     // var trace2 = [{
//     //     type: 'bubble',
//     //     y: 'samples',
//     //     x: 'otu_ids'
//     // }];
//    // x: select_id (Math.sum['otu_ids'])
//     // var layout2 = {
//     //     'title': 'OTUs Measured',
//     //     'x-axis': 'OTU IDs',
//     //     'y-axis': 'Sample Values',       
//     // };

//     // Plotly.newplot('bubble', trace2, layout2)

//     //start bubble chart here can start at line 24 


// //need to build charts within the build chart function 

// function init() {
//     d3.json('../../samples.json').then(data=> {
//         console.log(data)

//         var subject_id = data['names']
//         console.log(subject_id)

//         var dropdownMenu = document.getElementById("selDataset");

//         for(var i = 0; i < subject_id.length; i++) {
//             var opt = subject_id[i];
//             var el = document.createElement("option");
//             el.textContent = opt;
//             el.value = opt;
//             dropdownMenu.appendChild(el);
//         };

//         });
//     };

// init(); //this says run init when webpage starts up 

// // Plotly.newPlot('bar', trace1, layout1)
// // buildChart(subject_id[0])  this is how you initially get the data to show. 

// // // import plotly.graph_objects as plotly  
// // function importData(samples) {
// //     var url = "../../samples.json" + samples;
// //     d3.json(url).then(data=> {
// //         var samples = data['samples'];

// //         var sample_data = d3.select("#sample-data");

// //         sample_data.html("");

// //         Object.defineProperties(sample).forEach(([key, value]) => {
// //             var row = sample_data.append("p");
// //             row.text(`${key}: ${value}`);
// //         })
// // });

// functions allow you to control when things happen. 
// yticks is first ten of array from dictionary .slice 
//.slice 0,10 gives the first ten 
// .map changes int to strings takes an array and changes each
// element of the array into something ` ` assigns to string 
// need .reverse to plot from highest to lowest 
// can do exactly the same thing to get the sample_values
// just don't need to convert to a string 


// filter always returns an array, will return an array of 1. want to pull it out of array to work w as dictionary
// Once you have the ID number, go through larger dictionary
// var data = [trace1, trace2];

// plotly.newPlot('bubble', trace2, layout)

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
