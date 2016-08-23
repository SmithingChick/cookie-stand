'use strict';

// Tuesday

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
  var bodyContent = [4875, 78];
  var salesBody = document.createElement('tbody');
  var bodyRow = document.createElement('tr');
  var rowHeader = document.createElement('th');
  var mondayData = document.createElement('td');
  var tuesdayData = document.createElement('td');
  // var wednesdayData = document.createElement('td');
  // var thursdayData = document.createElement('td');
  // var fridayData = document.createElement('td');
  // var saturdayData = document.createElement('td');
  // var sundayData = document.createElement('td');
//  rowHeader.textContent = 'Pike Place';
  // var main = document.getElementById('store_info');
  return document.getElementById('store_info');
  console.log('render prototype');
};

Store.prototype.generateRandom = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  console.log('math');
};

var pikePlace = new Store('Pike Place', 6.3, 23, 65);
var seaTac = new Store('SeaTac Airport', 1.2, 3 , 24);
var sCenter = new Store('Seattle Center', 3.7, 11, 28);
var capital = new Store('Capital Hill', 2.3, 20, 38);
var alki = new Store('Alki', 4.6, 2, 16);

console.log(pikePlace, sCenter, sCenter, capital, alki);
/* render: function() {
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var h2 = document.createElement('h2');
  var main = document.getElementById('store_info');
  h2.textContent = 'Pike';
}*/

pikePlace.render();
seaTac.render();
sCenter.render();
capital.render();
alki.render();

// table
var salesTable  = document.createElement('table');

var headerContent = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
// Setting content for thead
var salesHead   = document.createElement('thead');
var tableRow    = document.createElement('tr');
for(var i = 0; i , headerContent.length; i++) {
  var th = document.createElement('th');
  th.textContent = headerContent[i];
  tableRow.appendChild(th);
}

salesBody.appendChild(bodyRow);
salesTable.appendChild(salesBody);

// var tableHeader   = document.createElement('th');
// var mondayHeader  = document.createElement('th');
// var tuesdayHeader = document.createElement('th');

//Creating elements for tbody
var bodyContent = [ 4875, 78];
var salesBody   = document.createElement('tbody');
var bodyRow     = document.createElement('tr');
var rowHeader   = document.createElement('th');
var mondayData  = document.createElement('td');
var tuesdayData = document.createElement('td');
// var wednesdayData = document.createElement('td');
// var thursdayData = document.createElement('td');
// var fridayData = document.createElement('td');
// var saturdayData = document.createElement('td');
// var sundayData = document.createElement('td');
rowHeader.textContent = 'Pike Place';

for(var i = 0; i < bodyContent.length; i++) {
  var td = document.createElement('td');
  td.textContent = bodyContent[i];
  bodyRow.appendChild(td);
}

// set content
// mondayHeader.textContent = 'Monday';
// tuesdayHeader.textContent = 'Tuesday';

//Assembling content
tableRow.appendChild(tableHeader);
tableRow.appendChild(mondayHeader);
tableRow.appendChild(tuesdayHeader);
salesHead.appendChild(tableRow);
salesTable.appendChild(salesHead);

// set content for tbody
rowHead.textContent = 'Pike Place';
mondayData.textContent = '$550';
tuesdayData.textContent = '$600';

//assembling tbdy
bodyRow.appendChild(rowHead);
bodyRow.appendChild(mondayData);
bodyRow.appendChild(tuesdayData);
// bodyRow.appendChild(wednesdayData);
// bodyRow.appendChild(thursdayData);
// bodyRow.appendChild(fridayData);
// bodyRow.appendChild(saturdayData);
// bodyRow.appendChild(sundayData);

var main = document.getElementById('sales_data');
main.appendChild(salesTable);



// Monday work
/* 1st & Pike figures
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    for (var i = 0; i < 14; i++) {
      this.hourCookies += this.cookiesPerHour();
    }
      return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');
    h2.textContent = 'Pike';
    // Hours
    li.textContent = '6:00 AM: ' + this.hourCookies[0];
    li.textContent = '7:00 AM: ' + this.hourCookies[1];
    li.textContent = '8:00 AM: ' + this.hourCookies[2];
    li.textContent = '9:00 AM: ' + this.hourCookies[3];
    li.textContent = '10:00 AM: ' + this.hourCookies[4];
    li.textContent = '11:00 AM: ' + this.hourCookies[5];
    li.textContent = '12:00 PM: ' + this.hourCookies[6];
    li.textContent = '1:00 PM: ' + this.hourCookies[7];
    li.textContent = '2:00 PM: ' + this.hourCookies[8];
    li.textContent = '3:00 PM: ' + this.hourCookies[9];
    li.textContent = '4:00 PM: ' + this.hourCookies[10];
    li.textContent = '5:00 PM: ' + this.hourCookies[11];
    li.textContent = '6:00 PM: ' + this.hourCookies[12];
    li.textContent = '7:00 PM: ' + this.hourCookies[13];
    li.textContent = '8:00 PM: ' + this.hourCookies[14];
    // Total
    li.textContent = 'Total: ' + this.totalCookies;
    ul.appendChild(h2);
    ul.appendChild(li);
    main.appendChild(ul);
  }
};
// pike.cookiesPerHour();
pike.cookiesPerDay();
pike.render();
*/
