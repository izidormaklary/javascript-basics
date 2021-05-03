/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let source = document.getElementById("source");
    let data = source.dataset.image;

    let newImage = document.createElement("IMG");
    newImage.setAttribute("src", data);
    document.getElementById("target").appendChild(newImage)
    source.remove();
    // your code here

})();
