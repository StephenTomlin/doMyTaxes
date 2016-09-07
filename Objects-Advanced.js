var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var resultsObj = {}

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function totalSales() {
  for (var i = 0; i < companySalesData.length;i++) {

    var count = 0;

    for (var j = 0; j < companySalesData[i]['sales'].length; j++) {
      count = count + companySalesData[i]['sales'][j];
    }
    var tax = (count*taxRates[companySalesData[i].province]);

    if (!resultsObj[companySalesData[i].name]) {
      resultsObj[companySalesData[i].name] = {
        totalSales: count,
        totalTaxes: tax
      };
    }
    else {
      resultsObj[companySalesData[i].name].totalSales += count;
      resultsObj[companySalesData[i].name].totalTaxes += tax;
    }
  }
  console.log(resultsObj)
}


totalSales();
