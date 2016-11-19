'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var pikePlace = new Store('Pike Place', 6.3, 23, 65);
// var seaTac = new Store('SeaTac Airport', 1.2, 3 , 24);  var sCenter = new Store('Seattle Center', 3.7, 11, 28);  var capital = new Store('Capital Hill', 2.3, 20, 38);  var alki = new Store('Alki', 4.6, 2, 16);

function Store(name, avg, min, max) {
  this.name = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
  console.log(this.name, this.avgCookies, this.minCust, this.maxCust);
  this.totalCookiesPerDay = 0;
  this.totalCookiesPerHour = [];
  console.log(this.totalCookiesPerDay, this.totalCookiesPerHour);
}

function getRandomInt() {
  var min = Math.ceil(this.minCustomers);
  var max = Math.floor(this.maxCustomers);
  return Math.floor(Math.random() * (max - min)) + min;
}

function cookiesPerHour() {
  var hourlySales = Math.round(this.getRandomInt() * this.avgSales);
  return hourlySales;
}

function cookiesPerDay() {
  var dailyCookieCount;
  this.salesPerHour = [];
  for (var i = 0; i < this.hours.length; i++) {
    dailyCookieCount = this.cookiesPerHour();
    this.total += dailyCookieCount;
    this.salesPerHour.push(dailyCookieCount);
  }
  console.log(this.salesPerHour);
}

//Create table html
function toHtml() {
  console.log('begin table');
  function tableCreate() {
    var main = document.getElementById('sales_data');
    var tbl = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headerContent = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
    var hourlyListItem;
    var hourMessage;

    //table head
    var titleRow = document.createElement('tr');
    for(var i = 0; i < headerContent.length; i++) {
      var th = document.createElement('th');
      th.textContent = headerContent[i];
      titleRow.appendChild(th);
      console.log('table header');
    }
    //table body
    var tableRow = document.createElement('tr');
    var rowHeader = document.createElement('th');
    rowHeader.textContent = name;
    tableRow.appendChild(rowHeader);
    for (i = 0; i < headerContent.length - 1; i++) {
      var bodyContent = document.createElement('td');
      bodyContent.textContent = this.totalCookiesPerHour;
      tableRow.appendChild(bodyContent);
      console.log('begin render');
    }
    //end of store render
    tbl.setAttribute('id', 'data_table');
    tbody.appendChild(tableRow);
    thead.appendChild(titleRow);
    tbl.appendChild(tbody);
    tbl.appendChild(thead);
    main.appendChild(tbl);
    console.log('table end');
  }
  console.log('table up?');
  tableCreate();

  var hourlyListItem;
  var hourMessage;

  storeNameListItem.textContent = this.name;
  unorderedList.appendChild(storeNameListItem);

  for (var i = 0; i < this.hours.length; i++) {
    console.log(i);
    hourlyListItem = document.createElement('li');
    hourMessage = this.hours[i] + ': ' + this.salesPerHour[i];
    console.log(hourMessage);
    hourlyListItem.textContent = hourMessage;
    unorderedList.appendChild(hourlyListItem);
  }

  totalListItem.textContent = 'Total: ' + this.total;
  unorderedList.appendChild(totalListItem);
  contentArea.appendChild(unorderedList);
};




console.log(pikePlace);//seaTac, sCenter, capital, alki);

pikePlace.cookiesPerDay();
pikePlace.toHtml();
pikePlace.render();
// seaTac.render();
// sCenter.render();
// capital.render();
// alki.render();
