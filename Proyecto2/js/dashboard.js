const today = new Date();

const day = today.getDay()
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const hours = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]

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
      , high: 40
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
  const actualWeek = weekDays.slice(day - 1)
  console.log(actualWeek)
  const restWeek = actualWeek.length < 7 ? weekDays.slice(0, weekDays.length - actualWeek.length) : undefined
  console.log(restWeek)
  const week = restWeek ? [...actualWeek, ...restWeek] : [...actualWeek]


  console.log(week)

  new Chartist.Line('#sales-overview3',
    {
      labels: week,
      series: [
        { meta: "Min Temperature (°C)", data: min },
        { meta: "Max Temperature (°C)", data: max }
      ]
    },
    {
      low: 0
      , high: 40
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