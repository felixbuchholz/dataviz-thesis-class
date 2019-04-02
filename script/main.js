d3.csv('data/cps_00004.csv').then(function(data) {
  const firstEntry = data[0]
  d3.select('#hidata').text(`${firstEntry.YEAR}`)
  console.log(data[0]);
})