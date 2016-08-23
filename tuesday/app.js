'use strict';
/*
// 1st & Pike figures
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

// SeaTac Airport
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
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

    h2.textContent = 'SeaTac Airport';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

seaTac.cookiesPerDay();
seaTac.render();

// Seattle Center
var sCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
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

    h2.textContent = 'Seattle Center';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

sCenter.cookiesPerDay();
sCenter.render();

// Capital Hill
var capital = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
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

    h2.textContent = 'Capital Hill';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

capital.cookiesPerDay();
capital.render();

// Alki
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
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

    h2.textContent = 'Alki';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

alki.cookiesPerDay();
alki.render();
*/


// Tuesday
function Store(name, ave, min, max) {
  this.name = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
}

Store.prototype.methodName = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

var pikePlace = new Store('Pike Place', 6.3, 23, 65);
var sCenter = new Store('Seattle Center', 3.7, 11, 28);

console.log(pikePlace, sCenter);

pike.render();
sCenter.render();
