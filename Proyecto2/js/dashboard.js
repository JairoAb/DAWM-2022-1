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

const hours = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin')
  .then(r => r.json())
  .then(data => {
    console.log(data)

    const daily_max_temperature = data.daily.temperature_2m_max
    const daily_min_temperature = data.daily.temperature_2m_min

    const prom_list = daily_max_temperature.map((t, i) => (t+daily_min_temperature[i])/2);

    const temperature = data.hourly.temperature_2m.slice(0, 24)
    cargandoBarras(hours, temperature)

    document.querySelector('.select-hourly').addEventListener('change', e => {
      switch (e.target.value) {
        case '0':
          cargandoBarras(hours, temperature)
          break;
        case '1':
          const temperature2 = data.hourly.temperature_2m.slice(24, 48)
          cargandoBarras(hours, temperature2)
          break;
        case '2':
          const temperature3 = data.hourly.temperature_2m.slice(48, 72)
          cargandoBarras(hours, temperature3)
      }
    })

    cargandoMaxMin(daily_max_temperature, daily_min_temperature)

    cargandoPie(prom_list)
  })

// ============================================================== 
// Sales overview
// ============================================================== 
const cargandoBarras = (hours = [], temperature = []) => {
  new Chartist.Bar('#sales-overview2',
    {
      labels: hours.slice(0, 24),
      series: [
        { meta: "Temperature (°C)", data: temperature }
      ]
    },
    {
      low: 0
      , high: 25
      , showArea: true
      , divisor: 5
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
        , offset: 5,
        labelInterpolationFnc: function (value) {
          return (value) + '°C'
        },

      }

    });
}

const cargandoMaxMin = (max = [], min = []) => {
  new Chartist.Line('#sales-overview3',
    {
      labels: [parseInt(dd), parseInt(dd) + 1, parseInt(dd) + 2, parseInt(dd) + 3, parseInt(dd) + 4, parseInt(dd) + 5, parseInt(dd) + 6],
      series: [
        { meta: "Min Temperature (°C)", data: min },
        { meta: "Max Temperature (°C)", data: max }
      ]
    },
    {
      low: 0
      , high: 25
      , showArea: true
      , divisor: 5
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
          return (value) + '°C'
        },

      }

    });
}

// ============================================================== 
// Visitor
// ============================================================== 

const cargandoPie = (prom_list = []) => {
  let prom = 0
  prom_list.forEach(e => prom+=e)
  prom = prom/prom_list.length

  let mayor = 0
  let menor = 0

  console.log(prom)

  prom_list.forEach(e => {
    if(e >= prom)
      mayor+=1
    else
      menor+=1
  })

  document.querySelector('.mayor-pie').innerHTML = (mayor*100/prom_list.length).toFixed(1) + ' %'
  document.querySelector('.menor-pie').innerHTML = (menor*100/prom_list.length).toFixed(1) + ' %'

  c3.generate({
    bindto: '#visitor',
    data: {
      columns: [
        ['Mayor', mayor],
        ['Menor', menor]
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
      title: "Prom",
      width: 20,

    },

    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    color: {
      pattern: ['#26c6da', '#1e88e5']
    }
  });

}


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
