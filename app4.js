'use strict';

function CookieStore(storeName, minCust, maxCust, aveCookieSold) {
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookies = avgCookiesSold;
  this.hours = 15;
  this.totalCookies = []; //This is what I did wrong before
  this.dailyTotalSum = []; //This is what I did wrong before
}

CookieStore.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};
CookieStore.prototype.perHourBought = function() {
  var total;
  for (var i = 0; i < this.totalCookies.length; i++) {
    // var total = 0; //resets total var back to 0, causes only single numbers
    total += this.totalCookies[i];
    total += this.totalCookies[i];
    this.dailyTotalSum.push(total[i]); //probably wrong

  }
};

CookieStore.prototype.toHtml = function() {
  this.perHourBought();
  this.dailyTotalSum();;

};
// variables- store info
// var pikePlaceLocation = (pikePlace, min, max, ave), etc

//render chart
// render header - function headerRow
// render body
// render footer

//
// call
