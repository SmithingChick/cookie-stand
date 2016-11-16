'use strict';

//Generate numer of cookies per hour per store

//in-class work
//store info - name, average cookies, minimum daily customers, maximum daily customers
//try hard coding each store seperately

// function cookieStore() {
//   var name = pikePlace;
//   hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
//     var = 6.3;
//     this.minCustomers = 23;
//     this.maxCustomers = 65;
//     total: 0;
//     console.log(this.name, this.avgCookies, this.minCustomers, this.maxCustomers);
//
//   function getRandomInt() {
//     var min = Math.ceil(this.minCustomers);
//     var max = Math.floor(this.maxCustomers);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   function cookiesPerHour() {
//     var avgSales = Math.round(this.getRandomInt() * this.projectedSales);
//     return avgSales;
//   }
//   function cookiesPerDay() {
//     var dailyCookieCount;
//     for (var i = 0; i < this.hours.length; i++) {
//       dailyCookieCount = this.cookiesPerHour();
//       this.total += dailyCookieCount;
//       this.salesPerHour.push(dailyCookieCount);
//   }
//   getRandomInt();
//   cookiesPerHour();
//   cookiesPerDay();
// }
// cookieStore();
//
//
// function toHtml() {
//   this.cookiesPerDay();
//   var unorderedList = document.createElement('ul');
//   var storeNameListItem = document.createElement('li');
//   var totalListItem = document.createElement('li');
//   var hourlyListItem;
//   var hourMessage;
//
//   storeNameLi.textContent = this.name;
//   unorderedList.appendChild(storeNameLi);
//
//   for (var i = 0; i < this.hours.length; i++) {
//     hourlyListItem = document.createElement('li');
//     hourMessage = this.hours[i] + ': ' + this.salesPerHour[i];
//     hourlyListItem.textContent = hourMessage;
//     unorderedList.appendChild(hourlyListItem);
//   }
//   totalListItem.textContent = 'Total: ' + this.total;
//   unorderedList.appendChild(totalListItem)
//
//   return unorderedList;
//   return storeNameListItem;
//   return hourlyListItem;
//   return hourMessage;
//   return totalListItem;
// };
// toHtml();

//previous attempt
//  listHours: function() {
//     var contentArea = document.getElementById('sales_data');
//     var ul = document.createElement('ul');
//     var li;
//
//     for (var i = 0; i < this.storeHours.length; i++) {
//       li = document.createElement('li');
//
//       li.textContent = this.storeHours[i];
//       ul.appendChild(li);
//     }
//     contentArea.appendChild(ul);
//   }
// };
// cookieStore.whatHours();
// cookieStore.listHours();
//
// store info - name, average cookies, minimum daily customers, maximum daily customers
// try hard coding each store seperately
// var cookiesHour = {
//   Store: function(name, avg, min, max) {
//     this.name = name;
//     this.avgCookies = avg;
//     this.minCust = min;
//     this.maxCust = max;
//     console.log(this.name, this.avgCookies, this.minCust, this.maxCust);
//   }
// };
// Store.cookiesHour();
//
// var getHourSales = {
//   hourTotal: function(min, max) {
//   this.hourSalesMax = Math.ceil(min);
//   this.hourSalesMax = Math.floor(max);
//   return Math.floor(Math.random() * (this.hourSalesMax - this.hourSalesMin) + this.hourSalesMax);
//   console.log(this.hourSalesMin, this.hourSalesMax);
// }
// hourTotal.getHourSales();
//
// cookieStore.listHours();
//     this.totalCookiesPerDay = 0;
//     this.totalCookiesPerHour = [];
//     console.log(this.totalCookiesPerDay, this.totalCookiesPerHour);
//
//
// //generate number of hourly customers per store
// Store.prototype.generateRandom = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   console.log('math');
//
//
// //generate number of cookies per hour
// Store.prototype.cookiesPerHour = function () {
//   return Math.floor(this.generateRandom() * this.avgCookies);
//   this.generateRandom = hourTotal ;
// };
// //generate number of total cooies per day
// Store.prototype.cookiesPerDay = function () {
// //    var cookiesDay;
//   for (var i = 6; i < 20; i++) {
//     var cookiesHere = this.cookiesPerHour();
//     this.hourCookies.push(cookiesHere);
//     this.totalCookies += cookiesHere;
//   }
// };
// var pikePlace = new Store('Pike Place', 6.3, 23, 65);
// var seaTac = new Store('SeaTac Airport', 1.2, 3 , 24);
// var seaTac = new Store('SeaTac Airport', 1.2, 3 , 24);
// var sCenter = new Store('Seattle Center', 3.7, 11, 28);
// var capital = new Store('Capital Hill', 2.3, 20, 38);
// var alki = new Store('Alki', 4.6, 2, 16);
