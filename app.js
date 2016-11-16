'use strict';

var pikePlace = {
  name: 'Pike Place',
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  avgSales: 6.3,
  minCustomers: 23,
  maxCustomers: 65,
  total: 0,
  salesPerHour: [],


  getRandomInt: function() {
    var min = Math.ceil(this.minCustomers);
    var max = Math.floor(this.maxCustomers);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  cookiesPerHour: function() {
    var hourlySales = Math.round(this.getRandomInt() * this.avgSales);
    return hourlySales;
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
    //this.cookiesPerDay();
    var contentArea = document.getElementById('sales_data');
    var unorderedList = document.createElement('ul');
    var storeNameListItem = document.createElement('li');
    var totalListItem = document.createElement('li');
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
    //
    // return unorderedList;
    // return storeNameListItem;
    // return hourlyListItem;
    // //return hourMessage;
    // return totalListItem;
  }
};
//console.log(pikePlace.listHours());
console.log(pikePlace);
pikePlace.cookiesPerDay();
pikePlace.toHtml();
