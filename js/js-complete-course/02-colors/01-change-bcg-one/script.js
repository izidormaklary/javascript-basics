/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
      const red = document.getElementById('red');
      const blue = document.getElementById('blue');
      const green = document.getElementById('green');
      const yellow = document.getElementById('yellow');

      red.addEventListener("click", e => {
            document.body.style.backgroundColor = "red";
      })
      blue.addEventListener("click", e => {
            document.body.style.backgroundColor = "blue";
      })
      green.addEventListener("click", e => {
            document.body.style.backgroundColor = "green";
      })
      yellow.addEventListener("click", e => {
            document.body.style.backgroundColor = "yellow";
      })

      //  alert(this.id); // or alert($(this).attr('id'));

})();
