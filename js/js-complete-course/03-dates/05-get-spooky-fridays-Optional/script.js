/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const run = document.getElementById('run');
    run.addEventListener("click",e => {
        let date = new Date();
        let year = parseInt(document.getElementById('year').value);
        date.setFullYear(year);
        date.setDate(13);
        var d = new Date();
        var month = new Array();
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
        var n = month[0];
        var spooky = [];
        for(i=0; i<12; i++) {
            date.setMonth(i);
            let day = parseInt(date.getDay());
            if (day == 5 ){
            alert(month[i]);
            spooky.push()
            }
            // your code here
        }
    })
})();
