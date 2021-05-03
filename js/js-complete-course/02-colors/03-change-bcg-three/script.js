/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const run = document.getElementById('run');


    run.addEventListener("click", e => {
        let red = Math.floor(Math.random() * 250);
        let green = Math.floor(Math.random() * 250);
        let blue = Math.floor(Math.random() * 250);

        document.body.style.backgroundColor=("rgb(" + red + ", " + green + ", " + blue + ")");
    })
})();
