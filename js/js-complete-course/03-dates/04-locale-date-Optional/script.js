/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function refresh() {
    let date = new Date();
    let year = date.getFullYear();


    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mo = month[date.getMonth()];
    let d = date.getDay();

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day = date.getDate();
    var n = weekday[d];
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    document.getElementById("target").innerHTML = n +" "+ day + " " + mo +" "+ year +", "+h+"h"+m;   ;

    setTimeout(refresh, 1000);
    // your code here

}
refresh ();