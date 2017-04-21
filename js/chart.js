// Line Chart
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'line-example',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 5 },
    { year: '2009', value: 10 },
    { year: '2010', value: 15 },
    { year: '2011', value: 10 },
    { year: '2012', value: 5 },
    { year: '2013', value: 20 },
    { year: '2014', value: 25 },
    { year: '2015', value: 20 },
    { year: '2016', value: 15 },
    { year: '2017', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

// Area Chart
Morris.Area({
  element: 'area-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});

// Bar Chart
Morris.Bar({
  element: 'bar-example',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});

// Donut Chart
Morris.Donut({
  element: 'donut-example1',
  data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
  ]
});

Morris.Donut({
  element: 'donut-example2',
  data: [
    {label: "In-Store Sales", value: 30},
    {label: "Download Sales", value: 12},
    {label: "Mail-Order Sales", value: 20}
  ]
});

Morris.Donut({
  element: 'donut-example3',
  data: [
    {label: "Mail-Order Sales", value: 20},
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30}
  ]
});