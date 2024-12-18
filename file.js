
        // first one
const options = {
  colors: ["#00a100", "#FDBA8C"],
  series: [
    {
      name: "Views",
      color: "#00a100",
      data: [
        { x: "M", y: 50 },
        { x: "T", y: 20 },
        { x: "W", y: 10 },
        { x: "T", y: 20 },
        { x: "F", y: 50 },
        { x: "S", y: 10 },
        { x: "S", y: 40 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: "220px",
    width:"260px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
  },
  fill: {
    opacity: 1,
  },
}

// if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
//   const chart = new ApexCharts(document.getElementById("column-chart"), options);
//   chart.render();
// }
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("column-chart"), options);
        chart.render();
    }
});

// second one
window.addEventListener('load', () => {
    // Apex Single Area Chart
    (function () {
    //   buildChart('#hs-single-area-chart', (mode) => ({
    //     chart: {
    //       height: 300,
    //       type: 'area',
    //       toolbar: {
    //         show: false
    //       },
    //       zoom: {
    //         enabled: false
    //       }
    //     },
    //     series: [
    //       {
    //         name: 'Visitors',
    //         data: [180, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70]
    //       }
    //     ],
    //     legend: {
    //       show: false
    //     },
    //     dataLabels: {
    //       enabled: false
    //     },
    //     stroke: {
    //       curve: 'straight',
    //       width: 2
    //     },
    //     grid: {
    //       strokeDashArray: 2
    //     },
    //     fill: {
    //       type: 'gradient',
    //       gradient: {
    //         type: 'vertical',
    //         shadeIntensity: 1,
    //         opacityFrom: 0.1,
    //         opacityTo: 0.8
    //       }
    //     },
    //     xaxis: {
    //       type: 'category',
    //       tickPlacement: 'on',
    //       categories: [
    //         '25 January 2023',
    //         '26 January 2023',
    //         '27 January 2023',
    //         '28 January 2023',
    //         '29 January 2023',
    //         '30 January 2023',
    //         '31 January 2023',
    //         '1 February 2023',
    //         '2 February 2023',
    //         '3 February 2023',
    //         '4 February 2023',
    //         '5 February 2023'
    //       ],
    //       axisBorder: {
    //         show: false
    //       },
    //       axisTicks: {
    //         show: false
    //       },
    //       crosshairs: {
    //         stroke: {
    //           dashArray: 0
    //         },
    //         dropShadow: {
    //           show: false
    //         }
    //       },
    //       tooltip: {
    //         enabled: false
    //       },
    //       labels: {
    //         style: {
    //           colors: '#9ca3af',
    //           fontSize: '13px',
    //           fontFamily: 'Inter, ui-sans-serif',
    //           fontWeight: 400
    //         },
    //         formatter: (title) => {
    //           let t = title;

    //           if (t) {
    //             const newT = t.split(' ');
    //             t = `${newT[0]} ${newT[1].slice(0, 3)}`;
    //           }

    //           return t;
    //         }
    //       }
    //     },
    //     yaxis: {
    //       labels: {
    //         align: 'left',
    //         minWidth: 0,
    //         maxWidth: 140,
    //         style: {
    //           colors: '#9ca3af',
    //           fontSize: '13px',
    //           fontFamily: 'Inter, ui-sans-serif',
    //           fontWeight: 400
    //         },
    //         formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
    //       }
    //     },
    //     tooltip: {
    //       x: {
    //         format: 'MMMM yyyy'
    //       },
    //       y: {
    //         formatter: (value) => `${value >= 1000 ? `${value / 1000}k` : value}`
    //       },
    //       custom: function (props) {
    //         const { categories } = props.ctx.opts.xaxis;
    //         const { dataPointIndex } = props;
    //         const title = categories[dataPointIndex].split(' ');
    //         const newTitle = `${title[0]} ${title[1]}`;

    //         return buildTooltip(props, {
    //           title: newTitle,
    //           mode,
    //           valuePrefix: '',
    //           hasTextLabel: true,
    //           markerExtClasses: '!rounded-sm',
    //           wrapperExtClasses: 'min-w-28'
    //         });
    //       }
    //     },
    //     responsive: [{
    //       breakpoint: 568,
    //       options: {
    //         chart: {
    //           height: 300
    //         },
    //         labels: {
    //           style: {
    //             colors: '#9ca3af',
    //             fontSize: '11px',
    //             fontFamily: 'Inter, ui-sans-serif',
    //             fontWeight: 400
    //           },
    //           offsetX: -2,
    //           formatter: (title) => title.slice(0, 3)
    //         },
    //         yaxis: {
    //           labels: {
    //             align: 'left',
    //             minWidth: 0,
    //             maxWidth: 140,
    //             style: {
    //               colors: '#9ca3af',
    //               fontSize: '11px',
    //               fontFamily: 'Inter, ui-sans-serif',
    //               fontWeight: 400
    //             },
    //             formatter: (value) => value >= 1000 ? `${value / 1000}k` : value
    //           }
    //         },
    //       },
    //     }]
    //   }), {
    //     colors: ['#2563eb', '#9333ea'],
    //     fill: {
    //       gradient: {
    //         stops: [0, 90, 100]
    //       }
    //     },
    //     xaxis: {
    //       labels: {
    //         style: {
    //           colors: '#9ca3af'
    //         }
    //       }
    //     },
    //     yaxis: {
    //       labels: {
    //         style: {
    //           colors: '#9ca3af'
    //         }
    //       }
    //     },
    //     grid: {
    //       borderColor: '#e5e7eb'
    //     }
    //   }, {
    //     colors: ['#3b82f6', '#a855f7'],
    //     fill: {
    //       gradient: {
    //         stops: [100, 90, 0]
    //       }
    //     },
    //     xaxis: {
    //       labels: {
    //         style: {
    //           colors: '#a3a3a3',
    //         }
    //       }
    //     },
    //     yaxis: {
    //       labels: {
    //         style: {
    //           colors: '#a3a3a3'
    //         }
    //       }
    //     },
    //     grid: {
    //       borderColor: '#404040'
    //     }
    //   });
     })();
  });

  function renderAreaChart(selector, data, categories) {
  const options = {
    chart: {
      height: "220px",
      width:'260px',
      type: 'area',
          toolbar: {
            show: false,
         },
    },
    series: [
      {
        name: 'Sales',
        data: data,
      },
    ],
    legend: {
         show: false
       },
       dataLabels: {
        enabled: false
       },
    stroke: {
       curve: 'straight',
        width: 4
       },
       grid: {
        show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
      },
      fill: {
        type: 'gradient',
        gradient: {
         type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0,
           opacityTo: 0
         }
       },
    xaxis: {
      categories: categories,
    },
   
  };

  const chart = new ApexCharts(document.querySelector(selector), options);
  chart.render();
}
document.addEventListener('DOMContentLoaded', function () {
  renderAreaChart(
    '#hs-single-area-chart', 
    [50, 40, 300, 320, 500, 350, 200, 230, 500], 
    [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  );
});


// Three
function renderAreaChartTwo(selector, data, categories) {
  const options = {
    colors: ["#00a100", "#FDBA8C"],
    chart: {
      height: "220px",
      width:'260px',
      type: 'area',
     // type: 'area',
          toolbar: {
            show: false,
         },
    },
    series: [
      {
        name: 'Tasks',
        data: data,
      },
    ],
    legend: {
         show: false
       },
       dataLabels: {
        enabled: false
       },
    stroke: {
       curve: 'straight',
        width: 4
       },
       grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
        left: 2,
        right: 2,
        top: -14
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
         type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0,
           opacityTo: 0
         }
       },
    xaxis: {
      categories: categories,
    },
   
  };

  const chart = new ApexCharts(document.querySelector(selector), options);
  chart.render();
}
document.addEventListener('DOMContentLoaded', function () {
  renderAreaChartTwo(
    '#hs-single-area-chart-two', 
    [50, 40, 300, 220, 500, 250, 400, 230, 500], 
    [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  );
});
