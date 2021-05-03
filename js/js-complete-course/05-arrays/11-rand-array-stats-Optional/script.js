/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click",  () => {
        let nums = Array();
        for ( i = 1; i <= 10; i++) {
            let x = Math.floor(Math.random() * 100) + 1;
            let td = document.getElementById("n-"+i);
            nums.push(x);
            td.innerText = x ;
        }
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        let sum = nums.reduce(function(acc, val) { return acc + val; }, 0)
        const avg = (sum / nums.length) || 0;
        document.getElementById("min").innerText = min;
        document.getElementById("max").innerText = max;
        document.getElementById("sum").innerText = sum;
        document.getElementById("average").innerText = avg;
    });
    // your code here

})();
