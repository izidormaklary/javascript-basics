/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let image = document.getElementsByTagName("IMG")[0];
    let original = image.src
    let onhover = image.dataset.hover;

    // your code here
    image.onmouseover = function() {mouseOver()};
    image.onmouseout = function() {mouseOut()};

    function mouseOver() {
        image.src=onhover;
    }

    function mouseOut() {
        image.src=original;
    }
})();
