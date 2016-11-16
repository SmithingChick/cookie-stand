'use strict';

var pikePlace = {
  name: 'Pike Place',
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  avgSales: 6.3,
  minCustomers: 23,
  maxCustomers: 65,
  total: 0,
  salesPerHour: [],

  listHours: function() {
    var contentArea = document.getElementById('sales_data');
    var ul = document.createElement('ul');
    var li;

    for (var i = 0; i < this.hours.length; i++) {
      li = document.createElement('li');
      li.textContent = this.hours[i];
      ul.appendChild(li);
    }
    contentArea.appendChild(ul);
  },

  getRandomInt: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  cookiesPerHour: function() {
    var projectedSales = Math.round(this.getRandomInt() * this.avgSales);
    return projectedSales;
  },

  cookiesPerDay: function() {
    var dailyCookieCount;
    this.salesPerHour = [];
    for (var i = 0; i < this.hours.length; i++) {
      dailyCookieCount = this.cookiesPerHour();
      this.total += dailyCookieCount;
      this.salesPerHour.push(dailyCookieCount);
    }
    console.log(this.salesPerHour);
  },

  toHtml: function() {
    this.cookiesPerDay();
    var unorderedList = document.createElement('ul');
    var storeNameListItem = document.createElement('li');
    var totalListItem = document.createElement('li');

    storeNameListItem.textContent = this.name;
    unorderedList.appendChild(storeNameListItem);

    totalListItem.textContent = 'Total: ' + this.total;
    unorderedList.appendChild(totalListItem);
  }
};
console.log(pikePlace.listHours());
console.log(pikePlace);
pikePlace.cookiesPerDay();
pikePlace.toHtml();
