/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.getElementById("target");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");



    for (i =0; i<10 ; i++){
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        row.appendChild(cell);
        tbody.appendChild(row);
    }



    table.appendChild(tbody);
    target.appendChild(table);


    // your code here

})();
