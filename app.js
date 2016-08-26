'use strict';

//table
console.log('begin table');
function tableCreate() {
  var main = document.getElementById('sales_data');
  var tbl = document.createElement('table');
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var headerContent = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
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
  rowHeader.textContent = 'store'; // needs to be store name
  tableRow.appendChild(rowHeader);
  for (i = 0; i < headerContent.length - 1; i++) {
    var bodyContent = document.createElement('td');
    bodyContent.textContent = 9; //store avg hour sales
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


function Store(name, avg, min, max) {
  this.name = name;
  console.log(this.name);
  this.avgCookies = avg;
  console.log(this.avgCookies);
  this.minCust = min;
  console.log(this.minCust);
  this.maxCust = max;
  console.log(this.maxCust);
}

Store.prototype.render = function () { // creating table row
  var table = document.getElementById('data_table');
  console.log('table-render', table);
  var tableRow = document.createElement('tr');
  console.log('render');
  var rowHeader = document.createElement('th');
  tableRow.appendChild(rowHeader);
  for (var i = 0; i < 16; i++) {
    var bodyContent = document.createElement('td');
    bodyContent.textContent = 9; //store avg hour sales
    tableRow.appendChild(bodyContent);
    console.log('begin render');
  }
  table.appendChild(tableRow);
};


Store.prototype.generateRandom = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  console.log('math');
};
Store.prototype.cookiesPerHour = function () {
  // generate random number & multipy it by avg cookies
  this.generateRandom = hourTotal ;
};
Store.prototype.cookiesPerDay = function () {
  // generate cookie total for each hour and keep running total and also store each hours total in an array in our store object
};


var pikePlace = new Store('Pike Place', 6.3, 23, 65);
var seaTac = new Store('SeaTac Airport', 1.2, 3 , 24);
var sCenter = new Store('Seattle Center', 3.7, 11, 28);
var capital = new Store('Capital Hill', 2.3, 20, 38);
var alki = new Store('Alki', 4.6, 2, 16);

console.log(pikePlace, seaTac, sCenter, capital, alki);


pikePlace.render();
seaTac.render();
sCenter.render();
capital.render();
alki.render();



// var main = document.getElementById('sales_data');
// main.appendChild(salesTable);
//
//
//Store.prototype.render = function () { // creating table row
//  var bodyContent = [Math, math, math, math, math, math, math];
//  var salesBody = document.createElement('tbody');
//  var bodyRow = document.createElement('tr');
  // var mondayData = document.createElement('td');
  // var tuesdayData = document.createElement('td');
//  rowHeader.textContent = name;
//  var main = document.getElementById('store_info');
//  return document.getElementById('store_info');
//  console.log('render prototype');
//};
