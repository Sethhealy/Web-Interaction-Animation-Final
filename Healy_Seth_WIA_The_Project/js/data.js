function drawVisualization() {
        // Create and populate the data table.
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Canada', 'China', 'Egypt', 'Italy', 'Jordan', 'Peru', 'Russia'],
          ['2003',  736060,  400361,  801582, 1297974,  700000,   600000, 900000],
          ['2004',  738156,  366849,  819450, 1241795,  678000,   654327, 943202],
          ['2005',  876579,  440514,  993360,  1330593,  721000,   632020, 950020],
          ['2006',  700652,  434552,  1004163, 1197127,  738200,   650230, 1000000],
          ['2007',  968113,  393032,  979198,  1280887, 760000,   680200, 990000],
          ['2008',  901067,  517206,  916965,  1356036, 763900,   720000, 1100000]
        ]);
      
        // Create and draw the visualization.
        new google.visualization.BarChart(document.getElementById('visualization')).
            draw(data,
                 {title:"Yearly Profits by branch",
                  width:600, height:400,
                  vAxis: {title: "Year"},
                  hAxis: {title: "Profit"}}
            );
      }
      