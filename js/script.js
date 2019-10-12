function computeQuadratic() {
  var a, b, c, d;
  var history = document.getElementById('history');
  var plot = document.getElementById('plot');
  a = document.quadraticEquationForm.a.value;
  b = document.quadraticEquationForm.b.value;
  c = document.quadraticEquationForm.c.value;
  d = Math.pow(b, 2) - (4 * a * c);
  console.log("DELTA = " + d);
  if (d < 0) {
    document.quadraticEquationForm.x1.value = "imaginary";
    document.quadraticEquationForm.x2.value = "imaginary";
    history.innerHTML = "<b>" + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0</b>&nbsp;   results: x<sub>1</sub>=" + "imaginary " + "x<sub>2</sub>=" + "imaginary<hr>History:<br>" + history.innerHTML.replace("<hr>History:", "").replace("<b>", "").replace("</b>", "");
    plot.innerHTML = "";
  } else {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    document.quadraticEquationForm.x1.value = x1;
    document.quadraticEquationForm.x2.value = x2;
    history.innerHTML = "<b>" + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0</b>&nbsp;   results:  x<sub>1</sub>=" + x1 + " x<sub>2</sub>=" + x2 + "<hr>History:<br>" + history.innerHTML.replace("<hr>History:", "").replace("<b>", "").replace("</b>", "");
    //PLOTING

    var xData = [

      // [-100, -81, -64, -49, -36, -25, -16, -9, -4, -2, -1, 0, 1, 2, 4, 9, 16, 25, 36, 49, 64, 81, 100]
      [-16, -9, -4, -2, -1, 0, 1, 2, 4, 9, 16]
    ];
    var yData = new Array();
    var arrayY = new Array();
    for (var i = 0; i < xData[0].length; i++) {

      var y = (a * xData[0][i] * xData[0][i]) + (b * xData[0][i]) + parseInt(c);
      console.log('xData[0][i] ' + xData[0][i]);
      console.log('y = ' + y);
      arrayY.push(y);

    }
    yData.push(arrayY);

    var colors = ['rgba(67,167,67,1)'];

    var lineSize = [1];

    var labels = ['Quadratic'];

    var data = [];

    for (var i = 0; i < xData.length; i++) {
      var result = {
        x: xData[i],
        y: yData[i],
        type: 'scatter',
        mode: 'lines',
        line: {
          color: colors[i],
          width: lineSize[i]
        }
      };

      data.push(result);
    }

    var layout = {
      showlegend: false,
      height: 600,
      width: 600,
      xaxis: {
        showline: true,
        showgrid: false,
        showticklabels: true,
        linecolor: 'rgb(204,204,204)',
        linewidth: 2,
        autotick: false,
        ticks: 'outside',
        tickcolor: 'rgb(204,204,204)',
        tickwidth: 2,
        ticklen: 5,
        tickfont: {
          family: 'Arial',
          size: 12,
          color: 'rgb(82, 82, 82)'
        }
      },
      yaxis: {
        showgrid: false,
        zeroline: false,
        showline: false,
        showticklabels: false
      },
      autosize: false,
      margin: {
        autoexpand: false,
        l: 100,
        r: 20,
        t: 100
      },
      annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0.0,
          y: 1.05,
          xanchor: 'left',
          yanchor: 'bottom',
          text: 'Advanced plotting for Science Stuff',
          font: {
            family: 'Arial',
            size: 30,
            color: 'rgb(37,37,37)'
          },
          showarrow: false
        },
        {
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          y: -0.1,
          xanchor: 'center',
          yanchor: 'top',
          text: 'Source: Kerbal Space Research Center',
          showarrow: false,
          font: {
            family: 'Arial',
            size: 12,
            color: 'rgb(150,150,150)'
          }
        }
      ]
    };

    for (var i = 0; i < xData.length; i++) {
      var result = {
        xref: 'paper',
        x: 0.05,
        y: yData[i][0],
        xanchor: 'right',
        yanchor: 'middle',
        text: labels[i] + ' ' + yData[i][0],
        showarrow: false,
        font: {
          family: 'Arial',
          size: 16,
          color: 'black'
        }
      };


      layout.annotations.push(result);
    }

    Plotly.newPlot('plot', data, layout);
  }
  document.quadraticEquationForm.a.value = "";
  document.quadraticEquationForm.b.value = "";
  document.quadraticEquationForm.c.value = "";

}