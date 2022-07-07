/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin')
  .then(r => r.json())
  .then(data => {
    console.log(data)
    console.log(dd, mm, yyyy)

    const hours = data.hourly.time.map(v => {
      if(v.substr(0, 10) === `${yyyy}-${mm}-${dd}`)
      return `${v.charAt(11)}${v.charAt(12)}`
    })

    const temperature = data.hourly.temperature_2m.slice(0, 24)

    fun(hours, temperature)
  })

// ============================================================== 
// Sales overview
// ============================================================== 
const fun = (hours=[], temperature=[]) => {
  new Chartist.Bar('#sales-overview2',
    {
      labels: hours.slice(0, 24),
      series: [
        { meta: "Temperature (°C)", data: temperature }
      ]
    },
    {
      low: 0
      , high: 20
      , showArea: true
      , divisor: 10
      , lineSmooth: false
      , fullWidth: true
      , showLine: true
      , chartPadding: 30
      , axisX: {
        showLabel: true
        , showGrid: false
        , offset: 50
      }
      , plugins: [
        Chartist.plugins.tooltip()
      ],
      // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
      axisY: {
        onlyInteger: true
        , showLabel: true
        , scaleMinSpace: 50
        , showGrid: true
        , offset: 10,
        labelInterpolationFnc: function (value) {
          return (value / 1)
        },

      }

    });
  new Chartist.Line('#sales-overview3',
    {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'a'],
      series: [
        { meta: "Earning ($)", data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380, 100] },
        { meta: "Earning ($)", data: [0, 50, 10, 24, 20, 20, 30, 20, 38, 30, 40, 30, 10] }
      ]
    },
    {
      low: 0
      , high: 400
      , showArea: true
      , divisor: 10
      , lineSmooth: false
      , fullWidth: true
      , showLine: true
      , chartPadding: 30
      , axisX: {
        showLabel: true
        , showGrid: false
        , offset: 50
      }
      , plugins: [
        Chartist.plugins.tooltip()
      ],
      // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
      axisY: {
        onlyInteger: true
        , showLabel: true
        , scaleMinSpace: 50
        , showGrid: true
        , offset: 10,
        labelInterpolationFnc: function (value) {
          return (value / 100) + 'k'
        },

      }

    });
  // ============================================================== 
  // Visitor
  // ============================================================== 

  var chart = c3.generate({
    bindto: '#visitor',
    data: {
      columns: [
        ['Other', 30],
        ['Desktop', 10],
        ['Tablet', 40],
        ['Mobile', 50],
      ],

      type: 'donut',
      onclick: function (d, i) { console.log("onclick", d, i); },
      onmouseover: function (d, i) { console.log("onmouseover", d, i); },
      onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      label: {
        show: false
      },
      title: "Visits",
      width: 20,

    },

    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    color: {
      pattern: ['#eceff1', '#745af2', '#26c6da', '#1e88e5']
    }
  });

  // ============================================================== 
  // Website Visitor
  // ============================================================== 

  var chart = new Chartist.Line('.website-visitor', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [0, 5, 6, 8, 25, 9, 8, 24]
      , [0, 3, 1, 2, 8, 1, 5, 1]
    ]
  }, {
    low: 0,
    high: 28,
    showArea: true,
    fullWidth: true,
    plugins: [
      Chartist.plugins.tooltip()
    ],
    axisY: {
      onlyInteger: true
      , scaleMinSpace: 40
      , offset: 20
      , labelInterpolationFnc: function (value) {
        return (value / 1) + 'k';
      }
    },
  });
  // Offset x1 a tiny amount so that the straight stroke gets a bounding box
  // Straight lines don't get a bounding box 
  // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
  chart.on('draw', function (ctx) {
    if (ctx.type === 'area') {
      ctx.element.attr({
        x1: ctx.x1 + 0.001
      });
    }
  });

  // Create the gradient definition on created event (always after chart re-render)
  chart.on('created', function (ctx) {
    var defs = ctx.svg.elem('defs');
    defs.elem('linearGradient', {
      id: 'gradient',
      x1: 0,
      y1: 1,
      x2: 0,
      y2: 0
    }).elem('stop', {
      offset: 0,
      'stop-color': 'rgba(255, 255, 255, 1)'
    }).parent().elem('stop', {
      offset: 1,
      'stop-color': 'rgba(38, 198, 218, 1)'
    });
  });
}