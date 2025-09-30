"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Katheryn Pratt
   Date:   feb 12 2022
*/
/* execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock()
{
    /*store the current date and time*/
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* calc the days until haloween */
    var releaseDate = new Date("April 09, 2023");
    var nextYear = currentDay.getFullYear()+1;
    releaseDate.setFullYear(nextYear);
    var daysLeft = (releaseDate - currentDay)/(1000*60*60*24);

    /*calc hours left in the current day*/
    var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

    /*calc minutes and seconds left in the current hour*/
    var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

    /* display the time left until new years eve */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);   
}


