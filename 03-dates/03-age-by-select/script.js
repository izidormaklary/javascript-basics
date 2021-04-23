/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const run = document.getElementById('run');
    run.addEventListener("click",e => {
       let d = new Date();
       let year = d.getFullYear();
       let m = d.getMonth()+1;
       let da = d.getDate();



       let dobyear = document.getElementById('dob-year').value;
       let dobmonth = document.getElementById('dob-month').value;
       let dobday = document.getElementById('dob-day').value;

       let diff = new Date(year-dobyear, m-dobmonth, da-dobday);
        let age = diff.getUTCFullYear();
        age = age.toString().substr(-2);
        alert (age);


    })
    // your code here

})();
